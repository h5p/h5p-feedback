import Vue from 'vue';
import Router from 'vue-router';
import ScoreInput from './views/ScoreInput.vue';
import TextInput from './views/TextInput.vue';
import Final from './views/Final.vue';
import XAPIBuilder from './components/xapi';

Vue.use(Router);

export default class Feedback extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   */
  constructor(config, contentId, contentData = {}) {
    super();
    this.contentId = contentId;
    this.xapi = new XAPIBuilder();

    const alternatives = [
      {
        title: config.l10n.scaleVerySatisfied,
        cls: 'feedback-score-4',
        score: '4'
      },
      {
        title: config.l10n.scaleSatisfied,
        cls: 'feedback-score-3',
        score: '3'
      },
      {
        title: config.l10n.scaleNeutral,
        cls: 'feedback-score-2',
        score: '2'
      },
      {
        title: config.l10n.scaleUnsatisfied,
        cls: 'feedback-score-1',
        score: '1'
      }];


    // set data on text input view
    TextInput.data = () => ({
      alternatives,
      text: '',
      labelTextInput: config.labelTextInput
    });

    // crate router
    const router = new Router({
      mode: 'abstract',
      routes: [
        { path: '/score-input', component: ScoreInput, props: { alternatives: alternatives, message: config.labelScoreInput } },
        { path: '/text-input/:score', component: TextInput, props: true },
        { path: '/final', component: Final, props: { finishedText: config.finishedText } },
        { path: '/', redirect: '/score-input' },
      ]
    });

    // trigger resize when switching views
    router.beforeEach((to, from, next) => {
      next();
      this.trigger('resize');
    });

    // create view model
    this.viewModel = new Vue({ router });

    // Fire xAPI score event on
    router.app.$on('submit-score', score => {
      const event = this.createXAPIEventTemplate('answered');
      const scale = alternatives.map(this.alternativeeToScale);
      this.xapi.createLikertEvent(event, config.labelScoreInput, score, scale);
      this.trigger(event);
    });

    router.app.$on('submit-text', responseText => {
      const event = this.createXAPIEventTemplate('answered');
      this.xapi.createTextEvent(event, responseText);
      this.trigger(event);
    });

    /**
     * Attach library to wrapper
     *
     * @param {jQuery} $wrapper
     * @public
     */
    this.attach = $wrapper => {
      const id = `h5p-feedback-content-${this.contentId}`;
      $wrapper.get(0).appendChild(this.createRootElement(id));
      this.viewModel.$mount(`#${id}`);
      router.push('score-input');
    };

    /**
     * Creates the root element that vue will render into
     *
     * @param {string} id
     *
     * @return {Element}
     */
    this.createRootElement = id => {
      const element = document.createElement('div');
      element.id = id;
      element.className = 'h5p-feedback';
      element.innerHTML = '<router-view></router-view>';
      return element;
    };

    this.alternativeeToScale = alternative => ({
      id: alternative.score,
      description: this.xapi.wrapAsTranslation(alternative.title)
    })
  }
}
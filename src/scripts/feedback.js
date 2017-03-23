import Vue from 'vue';
import Router from 'vue-router';
import ScoreInput from './views/ScoreInput.vue';
import TextInput from './views/TextInput.vue';
import Final from './views/Final.vue';

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

    const alternatives = [
      {
        title: 'Very Satisfied',
        cls: 'feedback-score-4',
        score: '4'
      },
      {
        title: 'Satisfied',
        cls: 'feedback-score-3',
        score: '3'
      },
      {
        title: 'Neutral',
        cls: 'feedback-score-2',
        score: '2'
      },
      {
        title: 'Unsatisfied',
        cls: 'feedback-score-1',
        score: '1'
      }];

    // set data on score input view
    ScoreInput.data = () => ({
      message: config.title,
      score: '0',
      alternatives
    });

    // set data on text input view
    TextInput.data = () => ({
      alternatives,
      text: ''
    });

    // crate router
    const router = new Router({
      mode: 'abstract',
      routes: [
        { path: '/score-input', component: ScoreInput },
        { path: '/text-input/:score', component: TextInput, props: true },
        { path: '/final', component: Final },
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
    }
  }
}
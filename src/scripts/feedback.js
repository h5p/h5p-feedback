import Vue from 'vue';
import App from './App.vue';

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

    let data = {
      message: config.title,
      scores: [
        {
          title: 'Very Satisfied',
          cls: 'feedback-score-4'
        },
        {
          title: 'Satisfied',
          cls: 'feedback-score-3'
        },
        {
          title: 'Neutral',
          cls: 'feedback-score-2'
        },
        {
          title: 'Unsatisfied',
          cls: 'feedback-score-1'
        }]
    };

    /**
     * Attach library to wrapper
     *
     * @param {jQuery} $wrapper
     * @public
     */
    this.attach = $wrapper => {
      let element = document.createElement('div');
      element.id = "h5p-feedback-content";
      $wrapper.get(0).appendChild(element);
      this.renderViewTo(`#${element.id}`);
    };

    /**
     * Renders the view to a element
     *
     * @param {string} el
     * @private
     */
    this.renderViewTo = el => {
      this.viewModel = new Vue({ ...App, data, el });
    }
  }
}
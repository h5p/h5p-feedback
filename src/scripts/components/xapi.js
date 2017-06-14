import stiptags from 'striptags';

const InteractionType = {
  FILL_IN: 'fill-in',
  LIKERT: 'likert'
};

const Type = {
  INTERACTION: 'http://adlnet.gov/expapi/activities/cmi.interaction'
};

export default class XAPIBuilder {
  constructor(question) { }

  /**
   * Creates an answered xAPI event with with the score
   *
   * @param {XAPIEvent} event
   * @param {string} description
   * @param {string} score
   * @param {object[]} scale
   * @return {XAPIEvent}
   */
  createLikertEvent(event, description, score, scale) {
    // prepare question
    const definition = event.getVerifiedStatementValue(['object', 'definition']);
    definition.description = this.wrapAsTranslation(description);
    definition.type = Type.INTERACTION;
    definition.interactionType = InteractionType.LIKERT;
    definition.correctResponsesPattern = [score];
    definition.scale = scale;

    // prepare answer

    return event;
  }

  /**
   * Creates an answered xAPI event with with the response text
   *
   * @param {XAPIEvent} event
   * @param {string} description
   * @param {string} responseText
   * @return {XAPIEvent}
   */
  createTextEvent(event, description, responseText) {
    // prepare question
    const definition = event.getVerifiedStatementValue(['object', 'definition']);
    definition.description = this.wrapAsTranslation(description);
    definition.type = Type.INTERACTION;
    definition.interactionType = InteractionType.FILL_IN;
    definition.correctResponsesPattern = [responseText];

    return event;
  }

  /*
  addResponseToXAPI (event) {
    const isCorrect = answerGroup.isCorrect();
    event.setScoredResult(isCorrect ? MAX_SCORE : 0, MAX_SCORE, self, true, isCorrect);
    event.data.statement.result.response = (isCorrect ? getCorrectAnswer() : getWrongAnswer());
  };*/

  /**
   * Wraps a string as translation for en-US
   *
   * @param {string} str
   * @return {object}
   */
  wrapAsTranslation(str) {
    return { 'en-US': stiptags(str) };
  }
}
<template>
  <div role="region" class="h5p-feedback-score">
    <h3 class="feedback-title" v-html="message"></h3>

    <ul class="feedback-score-input">
      <li v-for="alternative in alternatives">
        <div role="button" tabindex="0" v-bind:class="alternative.cls" v-on:click="sendScore(alternative)">
          <div class="feedback-score-title">{{ alternative.title }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'score-input-view',
    props: ['alternatives', 'message'],

    data: () => ({
      score: '0'
    }),

    methods: {
      sendScore: function(alternative) {
        this.score = alternative.score;
        this.$router.app.$emit('submit-score', alternative.score);
        this.$router.push(`text-input/${alternative.score}`);
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
$icon-size: 50px;
$icon-hover-size: 68px;
$feedback-score-margin: 1em;
$feedback-score-title-displacement: 2em;

.feedback-score-input {
  margin-top: -1em;
  float: right;

  li {
    display: inline-block;

    [role="button"] {
      cursor: pointer;
      margin: ($icon-hover-size - $icon-size) $feedback-score-margin $feedback-score-title-displacement $feedback-score-margin;
      height: $icon-size;
      width: $icon-size;
      position: relative;

      &:hover {
        margin-top: 0;
        height: $icon-hover-size;

        .feedback-score-title {
          display: block;
        }
      }
    }

    .feedback-score-title {
      position: absolute;
      bottom: -$feedback-score-title-displacement;
      left: 0;
      right: 0;
      font-weight: 400;
      margin: auto;
      white-space: nowrap;
      display: none;
    }
  }
}
</style>
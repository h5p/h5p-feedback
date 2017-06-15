<template>
  <div role="region" class="h5p-feedback-score">
    <h3 class="feedback-title" v-html="message"></h3>

    <ul class="feedback-score-input">
      <li v-for="alternative in alternatives">
        <div role="button" tabindex="0" v-on:click="sendScore(alternative)">
          <div v-html="alternative.icon" :class="alternative.cls"></div>
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
$feedback-score-margin: 1em;
$feedback-score-title-displacement: 2em;

$lightBlue: #a4c3ef;
$darkGreen: #63a96d;
$lightGreen: #a3aa66;
$orange: #e38743;
$red: #c85e5f;
$gray: #B9B9B9;

.feedback-score-input {
  margin-top: -1em;
  float: right;

  li {
    display: inline-block;
  }

  [role="button"] {
    cursor: pointer;
    margin: 0 $feedback-score-margin $feedback-score-title-displacement $feedback-score-margin;
    height: $icon-size;
    width: $icon-size;
    outline: none;
    position: relative;

    &:focus,
    &:hover {
      .feedback-score-4 .face {
        fill: $darkGreen;
      }

      .feedback-score-3 .face {
        fill: $lightGreen;
      }

      .feedback-score-2 .face {
        fill: $orange;
      }

      .feedback-score-1 .face {
        fill: $red;
      }

      .feedback-score-title {
        display: block;
      }

      .face {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
      }

      .shadow {
        transform: scaleX(0.7) translateX($icon-size * 0.15);
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


  .face-container {
    overflow: visible;
  }

  .face {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    fill: $lightBlue;
  }

  .shadow {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    fill: $gray;
  }
}
</style>
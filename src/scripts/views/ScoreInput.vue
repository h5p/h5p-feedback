<template>
  <div role="region" class="h5p-feedback-score">
    <h3 class="feedback-title" v-html="message"></h3>

    <ul class="feedback-score-input">
      <li v-for="alternative in alternatives">
        <div role="button" v-bind:class="alternative.cls" v-on:click="sendScore(alternative)">
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
    // set data on score input view
    data: () => ({
      score: '0'
    }),
    methods: {
      sendScore: function(alternative) {
        this.score = alternative.score;

        this.$router.push({
          path: `text-input/${alternative.score}`,
        });
      }
    }
  }
</script>
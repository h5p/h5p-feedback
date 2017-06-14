<template>
  <div role="region" class="feedback-text-input">
    <div class="from-score-input">
      <span class="feedback-score" v-bind:class="alternative.cls"></span>
      <span class="feedback-score-title">{{ this.alternative.title }}</span>
      <router-link to="/score-input">Change</router-link>
    </div>

    <div v-html="labelTextInput"></div>

    <textarea rows="4" placeholder="Your Feedback" v-model="text"></textarea>
    <button v-bind:disabled="text.length < 1" class="button button-primary" v-on:click="sendText(text)">Send</button>
  </div>
</template>

<script>
  export default {
    name: 'text-input-view',
    props: ['score'],

    computed: {
      alternative: function() {
        return this.alternatives
          .filter(alternative => alternative.score === this.score)[0];
      }
    },

    methods: {
      sendText: function(text) {
        this.$router.app.$emit('submit-text', text);
        this.$router.push('/final');
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
.feedback-text-input {
  .from-score-input {
    margin-bottom: 2em;
  }

  .feedback-score {
    display: inline-block;
    width: 2.5em;
    height: 2.5em;
    margin-right: 1em;
    margin-bottom: -1em;
  }

  .feedback-score-title {
    margin-right: 1em;
  }
}
</style>

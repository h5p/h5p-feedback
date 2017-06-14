<template>
  <div role="region" class="feedback-text-input">
    <div class="from-score-input">
      <span class="feedback-score" v-bind:class="alternative.cls"></span>
      <span class="feedback-score-title">{{ this.alternative.title }}</span>
      <router-link to="/score-input">Change</router-link>
    </div>

    <h2>Thanks for the rating!</h2>
    <p>Let us know how we can improve your experience with the <strong>Drag Text</strong> authoring tool.</p>

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
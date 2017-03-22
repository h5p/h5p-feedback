<template>
  <div role="region" class="h5p-feedback-text">
    <div class="feedback-score" v-bind:class="alternative.cls"></div>
    <p>{{ this.alternative.title }}</p>

    <router-link to="/score-input">Change</router-link>

    <h3>Thanks for the rating!</h3>

    <p>Let us know how we can improve your experience with the <strong>Drag Text</strong> authoring tool.</p>

    <textarea rows="4" placeholder="Your Feedback"></textarea>

    <button v-on:click="sendText()">Send</button>
  </div>
</template>

<script>
  export default {
    name: 'text-input-view',
    props: ['score'],
    watch: {
      '$route': 'updateAlternative'
    },

    created () {
      this.updateAlternative();
    },

    methods: {
      updateAlternative () {
        this.alternative = this.alternatives
          .filter(alternative => alternative.score === this.score)[0];
      },

      sendText: function() {
        // TODO Fire xAPI
        this.$router.push('/final');
      }
    }
  }
</script>
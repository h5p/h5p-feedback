<template>
  <div role="region" class="h5p-feedback-final" v-html="finishedText"></div>
</template>

<script>
  export default {
    name: 'final-view',
    props: ['finishedText']
  }
</script>
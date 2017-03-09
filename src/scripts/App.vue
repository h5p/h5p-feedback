<template>
  <div class="h5p-feedback">
    <div class="feedback-title" v-html="message"></div>

    <ul class="feedback-score-selector">
      <li v-for="score in scores">
        <div class="feedback-score" v-bind:class="score.cls">
          <div class="feedback-score-title">{{ score.title }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
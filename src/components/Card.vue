<template>
  <div class="card">
    {{ question }}
    <div v-if="showAnswer">
      {{ answer }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    question: String,
    answer: String,
  },
  data() {
    return {
      showAnswer: false,
    };
  },
};
</script>
<template>
  <form @submit="onSubmit">
    <input type="text" v-model="question" name="question" />
    <input type="text" v-model="answer" name="answer" />
    <input type="submit" />
  </form>
</template>

<script>
export default {
  name: "AddTaskComponent",
  data() {
    return {
      question: String,
      answer: String,
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.question | !this.answer) {
        alert("Cette carte manque une question ou une réponse");
        return;
      }

      const newCard = {
        question: this.question,
        answer: this.answer,
      };

      this.$emit('add-card', newCard)

      this.question = "";
      this.answer = "";
    },
  },
};
</script>
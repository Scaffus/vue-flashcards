<template>
  <div class="add-card position-relative">
    <form @submit="onSubmit">
      <div class="mb-3">
        <label for="question" class="form-label">Question</label>
        <input
          type="text"
          class="form-control"
          v-model="question"
          id="question"
        />
      </div>
      <div class="mb-3">
        <label for="answer" class="form-label">Answer</label>
        <input type="text" class="form-control" v-model="answer" id="answer" />
      </div>
      <button type="submit" class="btn btn-success position-absolute start-50 translate-middle">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTaskComponent",
  data() {
    return {
      question: "",
      answer: "",
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

      this.$emit("add-card", newCard);

      this.question = "";
      this.answer = "";
    },
  },
};
</script>

<style lang="sass" scoped>

// .add-card
//   max-width: 700px 
//   margin: 30px auto
//   overflow: auto
//   min-height: 300px
//   border: 1px solid steelblue
//   padding: 30px
//   border-radius: 5px
//   overflow: hidden

//   label
//     display: block
    
//   input
//     width: 100%
//     height: 40px
//     margin: 5px
//     padding: 3px 7px
//     font-size: 17px

//   button
//     margin-top: 2em

</style>
<template>
  <Header :isAuthenticated="isAuthenticated" />

  <AddCard @add-card="addCard" />

  <Cards :cards="cards"/>

  <!-- <div class="add-card">
    <input type="text" name="question">
    <input type="text" name="answer">
    <button type="submit">Add</button>
  </div> -->

  <!-- <div class="cards">
    <div class="card" v-for="card in cards"></div>
  </div> -->
</template>

<script>
import Header from "@/components/Header.vue";
import AddCard from "@/components/AddCard.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "App",
  components: {
    Header,
    AddCard,
    Cards,
  },
  data() {
    return {
      isAuthenticated: false,
      cards: [],
    };
  },

  created: {
    loadCards() {
      this.cards = localStorage.getItem("cards");
    },
  },

  methods: {
    addCard(card) {
      this.cards = localStorage.getItem("cards");
      this.cards.push(card);
      localStorage.setItem("cards", this.cards);
    },
  },
};
</script>

<style lang="sass">
@use '@/scss/_fonts.scss'
@use '@/scss/_colors.scss'

*
  font-family: fonts.$family-prim
  margin: 0
  padding: 0

  body
    background-color: colors.$bg-prim
</style>

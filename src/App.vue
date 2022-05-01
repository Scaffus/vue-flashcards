<template>
  <div class="">
    <Header
      @toggle-show-auth-form="toggleShowAuthForm()"
      :isAuthenticated="isAuthenticated"
    />
    <div class="container">
      <AddCard @add-card="addCard" />
      <Cards :cards="cards" />
    </div>

    <Authenticate
      v-show="showAuthForm"
      @toggle-show-auth-form="toggleShowAuthForm"
    />
  </div>

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
import Authenticate from "@/components/Authenticate.vue";

export default {
  name: "App",

  components: {
    Header,
    AddCard,
    Authenticate,
    Cards,
  },

  data() {
    return {
      showAuthForm: true,
      isAuthenticated: false,
      cards: [],
    };
  },

  methods: {
    toggleShowAuthForm() {
      this.showAuthForm = !this.showAuthForm;
    },

    addCard(card) {
      this.cards = localStorage.getItem("cards");
      if (!this.cards) this.cards = [];
      this.cards.push(card);
      localStorage.setItem("cards", this.cards);
    },

    closeAuthForm() {
      this.showAuthForm = false;
    },
  },
};
</script>

<style lang="sass">
@use '@/scss/_colors.scss'
@use '@/scss/_fonts.scss'
@use '@/scss/_utils.scss'

*
  @extend %font-bold
  background: colors.$bg-dark
  color: colors.$fg-light
</style>

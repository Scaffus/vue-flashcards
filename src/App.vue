<template>
  <Header
    @toggle-show-auth-form="toggleShowAuthForm()"
    @logout-user="logoutUser()"
    :isAuthenticated="isAuthenticated"
  />
  <div class="popup center">
    <Popup
      class="fadein center"
      v-if="showPopup"
      :title="popup.title"
      :content="popup.content"
      :type="popup.type"
      @close-popup="showPopup = false"
    />
  </div>
  <Auth
    class="fadein"
    v-if="showAuthForm"
    @logged-in="isAuthenticated = true"
    @toggle-show-auth-form="toggleShowAuthForm()"
    @show-popup="
      (npopup) => {
        showPopup = true;
        popup = npopup;
      }
    "
  />
  <!-- <div class="container"> -->
    <AddCard @add-card="addCard" />
    <Cards :cards="cards" />
  <!-- </div> -->

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
import Auth from "@/components/Auth.vue";
import Popup from "@/components/Popup.vue";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "App",

  components: {
    Header,
    AddCard,
    Cards,
    Auth,
    Popup,
  },

  created() {
    let auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuthenticated = true
      } else {
        this.isAuthenticated = false
      }
    });
  },

  data() {
    return {
      showAuthForm: false,
      isAuthenticated: false,
      cards: [],
      showPopup: false,
      popup: {},
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

    logoutUser() {
      signOut(getAuth())
      this.popup.title = "Logged out"
      this.popup.type = "info"
    }
  },
};
</script>

<style lang="sass">
@use '@/scss/_colors.scss'
@use '@/scss/_fonts.scss'
@use '@/scss/_utils.scss'

@include utils.animate(fadein, 500ms, ease)
@include utils.utils()

#app
  @extend %font-bold
  background: colors.$bg-light
  color: colors.$fg-dark
  display: flex
  height: 100%
  padding: 0
  margin: 0
  // justify-content: center
  // align-items: center
  flex-direction: column
</style>

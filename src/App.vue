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
  <router-view></router-view>
</template>

<script>
import Header from "@/components/Header.vue";

import Popup from "@/components/Popup.vue";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import "./assets/tailwind.css";

export default {
  name: "App",

  components: {
    Header,
    Popup,
  },

  created() {
    let auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
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

  logoutUser() {
    signOut(getAuth());
    this.popup.title = "Logged out";
    this.popup.type = "info";
  },
};
</script>

<style lang="sass">
// @use '@/scss/_colors.scss'
// @use '@/scss/_fonts.scss'
// @use '@/scss/_utils.scss'

// @include utils.animate(fadein, 500ms, ease)
// @include utils.utils()

// #app
//   @extend %font-bold
//   background: colors.$bg-light
//   color: colors.$fg-dark
//   display: flex
//   height: 100%
//   padding: 0
//   margin: 0
//   // justify-content: center
//   // align-items: center
//   flex-direction: column

//   padding: 0
//   margin: 0
//   // justify-content: center
//   // align-items: center
//   flex-direction: column
</style>

<template>
  <div class="form">
    <div class="content">
      <button @click="$emit('toggleShowAuthForm')"></button>
      <!-- Switch between login and register form (0 & 1)  -->
      <button @click="mode = 0">Login</button>
      <button @click="mode = 1">Register</button>
    </div>
    <input type="text" v-model="email" placeholder="Email" />

    <input type="text" v-model="password" placeholder="Password" />
    <div class="register" v-if="mode == 1">
      <button @click="register">Register</button>
    </div>
    <div class="login" v-if="mode == 0">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  name: "LoginComponent",

  data() {
    return {
      // 0 -> Login
      // 1 -> Register
      mode: 0,
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      if (!this.email | !this.password) {
        alert("Email ou mot de passe manquant");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log("Registered!" + data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    login() {
      if (!this.email | !this.password) {
        alert("Email ou mot de passe manquant");
        return;
      }
      console.log("login");
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
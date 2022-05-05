<template>
  <div class="form center">
    <div class="form-content center">
      <!-- Switch between login and register form (0 & 1)  -->
      <div class="form-tab">
        <button :class="!mode ? 'mode active' : 'mode'" @click="mode = true">
          Login
        </button>
        <button
          :class="mode ? 'mode active' : 'mode'"
          @click="mode = false"
        >
          Register
        </button>
        <!-- <button class="close" @click="$emit('toggleShowAuthForm')">×</button> -->
      </div>
      <div class="form-body">
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <div class="form-footer">
        <div class="register" v-if="mode == false">
          <button @click="register" class="auth">Register</button>
        </div>
        <div class="login" v-if="mode == true">
          <button @click="login" class="auth">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  name: "AuthComponent",

  components: {},

  data() {
    return {
      // 0 -> Login
      // 1 -> Register
      mode: true,
      email: "",
      password: "",
      popup: {},
    };
  },

  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Registered!" + data);
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/weak-password":
              this.popup.title = "Password is too weak";
              break;
            default:
              this.popup.title = "An error occured during user creation";
              break;
          }
          this.popup.type = "danger";
          this.showPopup = true;
        });
    },

    login() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          console.log("Logged in!");
          this.popup.title = "Logged in successfully";
          this.popup.type = "success";
          this.$emit("toggleShowAuthForm");
          this.$emit("showPopup", this.popup);
          this.$emit("loggedIn");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalide-email":
              this.popup.title = "Invalide email";
              break;
            case "auth/user-not-found":
              this.popup.title = "No account found with that email";
              break;
            case "auth/wrong-password":
              this.popup.title = "Incorrect password";
              break;
            default:
              this.popup.title = "Incorrect email or password";
              break;
          }
          this.popup.type = "danger";
          this.$emit("showPopup", this.popup);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@use '@/scss/_colors.scss'
@use '@/scss/_fonts.scss'
@use '@/scss/_utils.scss'

button
  margin: .3em
  border: 2px solid steelblue
  border-radius: 10px
  padding: .3em
  background: white

.form-tab
  overflow: hidden
  display: flex
  width: 100%
  background: rgba(0, 0, 0, 0.1)
  border-radius: 10px 10px 0px 0px 
  button
    float: left
    border: none
    outline: none
    cursor: pointer
    padding: 14px 16px
    transition: .3s
    background: white
    margin: 0
    flex-grow: 1
    border-radius: 10px 10px 0px 0px
  .active
    background: rgba(0, 0, 0, 0)



.form
  position: fixed
  zoom: 120%
  z-index: 1
  left: 0
  top: 0
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, 0.3)
  

.form-content
  z-index: 0
  border-radius: 10px
  background: colors.$bg-light
  max-width: 70%
  flex-direction: column

.form-footer
  button
    border: none
    transition: .3s
    float: left
    border-radius: 10px
    outline: none
    padding: 14px 16px
    margin: 0
    flex-grow: 1
    cursor: pointer
    margin-bottom: .8em

  button:hover
    background: rgba(0, 0, 0 , 0.2)

input
  border: none
  border-bottom: 2px solid black
  padding: .8em
  margin: .8em
  // width: 80%
  font-size: calculate(fonts.$font-size * 2)

.close
  z-index: -1
  width: 100%
  height: 100%
  left: 0
  right: 0
  border: none
  background: rgba(0, 0, 0, 0)
  cursor: pointer
</style>

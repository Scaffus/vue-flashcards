<template>
  <nav>
    <ul>
      <li>
        <button class="link" @click="$emit('goHome')">
          <img :src="require('@/assets/icons/home.svg')" />
        </button>
      </li>
      <li>
        <button class="link">My Cards</button>
      </li>
      <div class="right">
        <li v-if="!isAuthenticated">
          <button @click="$emit('toggleShowAuthForm')" class="link">
            Login
          </button>
        </li>
        <li v-if="isAuthenticated">
          <DropdownComponent
            class="link"
            :dropdownData="userDropdown"
            @logout-user="$emit('logoutUser')"
          />
          <!-- <button class="link user-dropdown"><img :src="require('@/assets/icons/person.svg')" alt=""></button> -->
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
import DropdownComponent from "@/components/Dropdown.vue";

export default {
  name: "HeaderComponent",

  components: {
    DropdownComponent,
  },

  props: {
    isAuthenticated: Boolean,
  },

  data() {
    return {
      userDropdown: {
        image: true,
        imagePath: require("../assets/icons/person.svg"),
        imageAlt: "User icon",
        options: [
          {
            content: "logout",
            emit: "logoutUser",
          },
        ],
      },
    };
  },
};
</script>

<style lang="sass" scoped>
@use '@/scss/_colors.scss'

nav
  zoom: 160%
  top: 0
  left: 0
  width: 100%
  position: fixed
  display: block
  background-color: #333

li
  float: left


li .link
  color: white
  padding: 14px 16px
  text-decoration: none
  border: none
  background: #0000 
  transition: .2s
  height: 100%
  bottom: 0
  cursor: pointer

.link:hover
  background-color: rgba(0, 0, 0, 0.2)

ul
  list-style-type: none
  margin: 0
  padding: 0


.right
  float: right

.sign-in
  background: colors.$success
  border-radius: 5px
</style>

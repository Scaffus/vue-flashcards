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
          <DropdownComponent class="link" @logout-user="$emit('logoutUser')">
            <template v-slot:ddImage>
              <img
                :src="require('@/assets/icons/person.svg')"
                alt="User icon"
              />
            </template>
            <template v-slot:ddContent>
              <div class="option">
                <button class="link" @click="$emit('logoutUser')">SignOut</button>
              </div>
            </template>
          </DropdownComponent>
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

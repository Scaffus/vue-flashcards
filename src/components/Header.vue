<template>
  <nav>
    <ul>
      <div class="auth" v-if="!isAuthenticated">
        <li>Sign In</li>
        <li>Sign Up</li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    isAuthenticated: Boolean,
  },
};
</script>

<style lang="sass" scoped>
@use '@/scss/_colors.scss'

*
  background-color: colors.$bg-darker
  color: colors.$fg-prim

  nav
    position: fixed
    width: 100%
    text-align: center
    padding: 14px 16px
    ul
      li
        display: inline
        list-style-type: none
      .auth
        float: right
        margin-right: 1em
</style>
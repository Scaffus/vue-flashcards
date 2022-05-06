<template>
  <div class="dropdown">
    <button class="select" @click="showDropdown = !showDropdown">
      <slot name="ddImage">

      </slot>
    </button>
    <transition name="fade">
      <div v-if="showDropdown" class="dropdown-menu">
        <slot name="ddContent">

        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DropdownComponent",

  props: {
    dropdownData: Object,
  },

  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>

<style lang="sass" scoped>

button.select
    border: none
    background: rgba(0, 0, 0, 0)
    cursor: pointer

.option
  border: none
  color: white
  background: #0000
  cursor: pointer
  transition: .2s
  
.option:hover
  background: rgba(0, 0, 0, .2)


.dropdown
    position: relative

.dropdown-menu
    position: absolute
    right: .2em
    top: calc(100% + .25rem)
    background: #333
    padding: .7rem
    border-radius: 5px
    // transition: .5s

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>

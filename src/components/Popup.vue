<template>
  <div :class="'popup ' + type">
    <p class="title">{{ title }}</p>
    <p class="content">{{ content }}</p>
    <button @click="$emit('close-popup')">×</button>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",

  props: {
    title: String,
    content: String,
    type: String,
  },
};
</script>

<style lang="sass" scoped>
// @use '@/scss/_colors.scss'

// .popup
//     top: 5%
//     position: fixed
//     width: 80%
//     padding: 0em .7em
//     border-radius: 10px
//     background: white
//     z-index: 1

//     button
//         margin-left: auto
//         border: 0
//         zoom: 150%
//         background: white
//         cursor: pointer

// .warning
//     border: 2px solid colors.$warning

// .info
//     border: 2px solid colors.$info

// .success
//     border: 2px solid colors.$success

// .danger
//     border: 2px solid colors.$danger
</style>

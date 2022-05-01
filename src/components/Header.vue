<template>
  <ul>
    <li v-if="!isAuthenticated">
      <button @click="$emit('toggleShowAuthForm')">Login</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    isAuthenticated: Boolean,
  },
};
</script>

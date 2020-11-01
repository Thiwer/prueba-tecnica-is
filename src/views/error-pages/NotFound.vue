<template>
  <div class="mt-3">
    <button class="button" @click="goHome">Home</button>
    <p class="title is-2 mt-2">SORRY</p>
    <p class="subtitle is-4">
      We couldn't find that page, press Home button to go land page.
    </p>
  </div>
</template>

<script>
export default {
  name: "not-found-error-page",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
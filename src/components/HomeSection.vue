<template>
  <section
    class="hero mt-2 is-pointer"
    :class="[`is-${color}`]"
    @click="pushRoute()"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ name }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home-section",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "info",
    },
  },
  methods: {
    pushRoute() {
      this.$router.push({ path: this.name });
    },
  },
};
</script>
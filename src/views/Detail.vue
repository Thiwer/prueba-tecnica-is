<template>
  <div>
    <button class="button" @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
  name: "detail-view",
  props: {
    name: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: `${this.origin}List` });
    },
  },
};
</script>
<template>
  <div>
    <button class="button" @click="goBack">Back</button>
    I'm detail of {{ name }}
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
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: "PeopleList" });
    },
  },
};
</script>
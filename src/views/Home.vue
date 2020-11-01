<template>
  <div class="home">
    <HomeSection name="People" />
    <HomeSection name="StarShips" color="success" />
    <HomeSection name="Planets" color="dark" />
  </div>
</template>

<script>
import HomeSection from "@/components/HomeSection";

export default {
  name: "Home",
  components: {
    HomeSection,
  },
};
</script>

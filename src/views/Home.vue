<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column">
          <router-link to="/People">People</router-link>
        </div>
        <div class="column">
          <router-link to="/StarShips">StarShips</router-link>
        </div>
        <div class="column">
          <router-link to="/Planets">Planets</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

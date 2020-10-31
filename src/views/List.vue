<template>
  <div>
    <button class="button" @click="goBack">Back</button>
    <div class="field has-addons">
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="search"
          placeholder="Seach text"
          @keyup.enter="searchItems"
        />
      </div>
      <div class="control">
        <button class="button is-info" @click="searchItems">Search</button>
      </div>
    </div>
    <div>
      <table class="table">
        <tbody>
          <template v-for="item in items">
            <tr :key="item.name" @click="loadInfo(item)" class="is-pointer">
              {{
                item.name
              }}
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "@/services/api";

const PeopleRepository = RepositoryFactory.get("people");

export default {
  name: "list-view",
  data() {
    return {
      items: [],
      search: "",
      actualPage: 1,
    };
  },
  mounted() {
    this.getPagedItems();
  },
  methods: {
    searchItems() {
      this.getPagedItems();
    },
    async getPagedItems() {
      let respose = await PeopleRepository.getPaged(
        this.actualPage,
        this.search
      );
      if (respose.status === 200) {
        window.console.log(respose.data);
        this.items = respose.data.results;
      }
    },
    async loadInfo(item) {
      this.$router.push({
        path: item.name,
        params: { other: "Prueba" },
        append: true,
      });
    },
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
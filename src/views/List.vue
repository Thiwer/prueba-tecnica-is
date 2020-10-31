<template>
  <div>
    <button class="button" @click="goBack">Back</button>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="search"
          placeholder="Seach text"
        />
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
    };
  },
  mounted() {
    this.getPagedItems();
  },
  methods: {
    async getPagedItems() {
      let respose = await PeopleRepository.getPaged(1, this.search);
      if (respose.status === 200) {
        window.console.log(respose.data);
        this.items = respose.data.results;
      }
    },
    async loadInfo(item) {
      this.$router.push({ path: item.name, append: true });
    },
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
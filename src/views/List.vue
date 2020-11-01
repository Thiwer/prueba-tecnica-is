<template>
  <div>
    <button class="button back-button" @click="goBack">Back</button>
    <div>
      <h2 class="title is-2 mt-4">{{ customTitle }}</h2>
      <div class="field has-addons has-addons-right">
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
      <div v-if="!isBussy">
        <table class="table is-bordered has-text-justified is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in items"
              :key="item.id"
              @click="loadInfo(item)"
              class="is-pointer"
            >
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
            </tr>
          </tbody>
        </table>
        <nav class="pagination">
          <a class="pagination-previous" v-if="currentPage > 1" @click="prev()"
            >Previous</a
          >
          <a
            class="pagination-next"
            v-if="currentPage < totalPages"
            @click="next()"
            >Next</a
          >
          <ul class="pagination-list">
            <li v-if="currentPage > 2">
              <a class="pagination-link" @click="goTo(1)">1</a>
            </li>
            <li v-if="currentPage > 3">
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li v-if="currentPage > 1">
              <a class="pagination-link" @click="goTo(currentPage - 1)">{{
                currentPage - 1
              }}</a>
            </li>
            <li>
              <a
                class="pagination-link is-current"
                @click="goTo(currentPage)"
                >{{ currentPage }}</a
              >
            </li>
            <li v-if="totalPages > currentPage">
              <a class="pagination-link" @click="goTo(currentPage + 1)">{{
                currentPage + 1
              }}</a>
            </li>
            <li v-if="totalPages - currentPage > 2">
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li v-if="totalPages - currentPage > 1">
              <a class="pagination-link" @click="goTo(totalPages)">{{
                totalPages
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-else>
        <Loading :absolute="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "@/services/api";
import Loading from "@/components/Loading";

import { stringFunctions } from "@/helpers/stringHelper.js";

export default {
  name: "list-view",
  components: {
    Loading,
  },
  props: {
    repositoryName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: [],
      search: "",
      totalPages: 0,
      currentPage: 1,
      nextEndpoint: null,
      prevEndpoint: null,
      repository: undefined,
      isBussy: false,
    };
  },
  mounted() {
    this.repository = RepositoryFactory.get(this.repositoryName);
    this.getPagedItems();
  },
  computed: {
    customTitle() {
      return stringFunctions.capitalizeFirstLetter(
        this.repositoryName.toLowerCase()
      );
    },
  },
  methods: {
    searchItems() {
      if (!this.isBussy) {
        this.getPagedItems();
      }
    },
    next() {
      if (this.nextEndpoint !== null) {
        this.currentPage = this.currentPage + 1;
        this.getPagedItems();
      }
    },
    prev() {
      if (this.prevEndpoint !== null) {
        this.currentPage = this.currentPage - 1;
        this.getPagedItems();
      }
    },
    goTo(page) {
      this.currentPage = page;
      this.getPagedItems();
    },
    async getPagedItems() {
      this.isBussy = true;
      let response = await this.repository.getPaged(
        this.currentPage,
        this.search
      );
      if (response.status === 200) {
        let items = response.data.results;
        items = items.map((item) => {
          item.id = this.getId(item);
          return item;
        });
        this.items = items;

        this.nextEndpoint = response.data.next;
        this.prevEndpoint = response.data.previous;
        this.totalPages = Math.ceil(response.data.count / 10);
      }
      this.isBussy = false;
    },
    async loadInfo(item) {
      this.$router.push({
        path: item.id,
        append: true,
      });
    },
    goBack() {
      this.$router.push("/");
    },
    getId(item) {
      let slices = item.url.split("/");
      slices.pop();
      let id = slices.pop();
      return id;
    },
  },
};
</script>
<template>
  <div>
    <button class="button back-button" @click="goBack">Back</button>
    <div v-if="!isBussy">
      <h2 class="title is-2 mt-4">{{ name }}</h2>
      <div class="has-text-left" v-if="item !== undefined">
        <div v-for="key in itemKeys" :key="key">
          <DetailItem :keyName="key" :item="item" />
        </div>
      </div>
    </div>
    <div v-else>
      <Loading :absolute="true" />
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "@/services/api";
import Loading from "@/components/Loading";
import DetailItem from "@/components/DetailItem";

export default {
  name: "detail-view",
  components: {
    Loading,
    DetailItem,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
    },
  },
  data() {
    return {
      item: undefined,
      repository: undefined,
      isBussy: false,
    };
  },
  mounted() {
    this.repository = RepositoryFactory.get(this.origin.toLowerCase());
    this.retrieveData();
  },
  computed: {
    itemKeys() {
      return Object.keys(this.item);
    },
    name() {
      return this.item !== undefined ? this.item.name : "";
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: `${this.origin}List` });
    },
    async retrieveData() {
      this.isBussy = true;

      let response = await this.repository.getItem(this.id);
      if (response.status === 200) {
        this.item = response.data;
      }
      this.isBussy = false;
    },
  },
};
</script>
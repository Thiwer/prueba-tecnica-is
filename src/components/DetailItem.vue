<template>
  <div class="field mt-3">
    <label class="label">{{ customName }}</label>
    <div class="control">
      <input class="input" type="text" :value="value" readonly="true" />
    </div>
  </div>
</template>

<script>
import { stringFunctions } from "@/helpers/stringHelper.js";

export default {
  name: "detail-item",
  props: {
    keyName: String,
    item: Object,
  },
  computed: {
    customName() {
      return stringFunctions
        .capitalizeFirstLetter(this.keyName)
        .replace(/_/g, " ");
    },
    value() {
      let value = this.item[this.keyName];
      let type = typeof value;
      if (type === "object") {
        value = value.join(", ");
      }
      return value;
    },
  },
};
</script>
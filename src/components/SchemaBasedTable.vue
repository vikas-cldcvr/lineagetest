<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <f-table-schema
    selectable="multiple"
    variant="underlined"
    highlight-selected
    highlight-hover
    :data.prop="tableData"
  >
  </f-table-schema>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getFakeUsers from "./mock-table-data";

export default defineComponent({
  name: "SchemaBasedTable",
  data() {
    return {
      tableData: getFakeUsers(),
    };
  },
});
</script>

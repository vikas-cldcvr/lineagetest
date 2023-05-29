<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <f-table variant="bordered">
    <f-trow slot="header">
      <f-tcell v-for="j in columnCount" :key="j">header {{ j }}</f-tcell>
    </f-trow>
    <f-trow v-for="row in rows" :key="row.index" :selected="row.selected">
      <f-tcell v-for="j in columnCount" :key="j">Column {{ j }}</f-tcell>
    </f-trow>
  </f-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
type TableRow = {
  selected: boolean;
  index: number;
};
export default defineComponent({
  name: "InnerTable",
  data(): { rows: TableRow[]; columnCount: number } {
    return {
      rows: [],
      columnCount: 5,
    };
  },
  mounted() {
    for (let r = 0; r < 10; r++) {
      this.rows.push({ selected: false, index: r });
    }
    // setInterval(() => {
    //   this.rows.push({ selected: true, index: this.rows.length });
    // }, 5000);
  },
});
</script>

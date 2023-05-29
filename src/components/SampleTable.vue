<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <f-table
    selectable="multiple"
    variant="outlined"
    highlight-selected
    highlight-hover
  >
    <f-trow slot="header">
      <f-tcell v-for="j in columnCount" :key="j">header {{ j }}</f-tcell>
      <f-tcell></f-tcell>
    </f-trow>
    <f-trow
      v-for="row in rows"
      :state="row.state"
      :key="row.index"
      :selected="row.selected"
      :open="row.open"
      @click="toggleRow(row)"
    >
      <f-div v-if="row.index !== 3" slot="details" width="100%" padding="large">
        <InnerTable />
      </f-div>
      <f-tcell v-for="j in columnCount" :key="j">Column {{ j }}</f-tcell>
      <f-tcell :actions="actions"> </f-tcell>
    </f-trow>
  </f-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InnerTable from "./InnerTable.vue";
import { FTcellActions, FTrowState } from "@cldcvr/flow-table";

type TableRow = {
  selected: boolean;
  index: number;
  state?: FTrowState;
  open?: boolean;
};

export default defineComponent({
  name: "SampleTable",
  components: {
    InnerTable,
  },
  data(): {
    rows: TableRow[];
    columnCount: number;
    actions: FTcellActions;
  } {
    return {
      rows: [],
      columnCount: 5,
      actions: [
        { icon: "i-copy", onClick: () => console.log("i-launch clicked") },
        {
          icon: "i-git-branch",
          onClick: () => console.log("i-launch clicked"),
        },
        { icon: "i-launch", onClick: () => console.log("i-launch clicked") },
      ],
    };
  },
  methods: {
    toggleRow(row: TableRow) {
      row.open = !row.open;
    },
  },
  mounted() {
    for (let r = 0; r < 10; r++) {
      this.rows.push({
        selected: false,
        index: r,
        state: r === 5 ? "danger" : "default",
        open: false,
      });
    }
    // setInterval(() => {
    //   this.rows.push({ selected: true, index: this.rows.length });
    // }, 5000);
  },
});
</script>

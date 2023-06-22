<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <SampleTable v-if="view === 'table'" />
  <SchemaBasedTable v-if="view === 'schemaTable'" />
  <FlowFormBuilder v-if="view === 'formbuilder'" />
  <f-code-editor
    v-if="view === 'codeditor'"
    :code="code"
    :language="language"
  ></f-code-editor>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SampleTable from "./components/SampleTable.vue";
import SchemaBasedTable from "./components/SchemaBasedTable.vue";
import FlowFormBuilder from "./components/FlowFormBuilder.vue";

import type { FCodeEditorLanguage } from "@cldcvr/flow-code-editor";

type AppData = {
  view: "codeditor" | "table" | "schemaTable" | "formbuilder";
  code?: string;
  language?: FCodeEditorLanguage;
};

export default defineComponent({
  name: "App",
  components: {
    SampleTable,
    SchemaBasedTable,
    FlowFormBuilder,
  },
  data(): AppData {
    return {
      view: "formbuilder",
      language: "scala",
      code: `object ScalaExample{  
    def main(args:Array[String]){  
        println "Hello Scala"  
    }  
}  `,
    };
  },
});
</script>

<style lang="scss">
@import "@cldcvr/flow-core/dist/style.css";
@import "@cldcvr/flow-lineage/dist/style.css";
@import "@cldcvr/flow-form-builder/dist/style.css";
@import "@cldcvr/flow-table/dist/style.css";
@import "@cldcvr/flow-code-editor/dist/style.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: var(--color-surface-default);
}
</style>

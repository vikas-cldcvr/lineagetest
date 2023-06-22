/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from "vue";
import App from "./App.vue";
import "@cldcvr/flow-core/dist/types/vue3";
import "@cldcvr/flow-lineage/dist/types/vue3";
import "@cldcvr/flow-table/dist/types/vue3";
import "@cldcvr/flow-form-builder/dist/types/vue3";
import "@cldcvr/flow-code-editor/dist/types/vue3";

import("@cldcvr/flow-core").then(async () => {
  await import("@cldcvr/flow-system-icon");
  await import("@cldcvr/flow-lineage");
  await import("@cldcvr/flow-table");
  await import("@cldcvr/flow-form-builder");
  await import("@cldcvr/flow-code-editor");

  createApp(App).mount("#app");
});

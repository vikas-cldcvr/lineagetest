/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from "vue";
import App from "./App.vue";
import "@cldcvr/flow-core/dist/types/vue3";
import "@cldcvr/flow-lineage/dist/types/vue3";
import "@cldcvr/flow-table/dist/types/vue3";
import "@cldcvr/flow-code-editor/dist/types/vue3";

self.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    const getWorkerModule = (moduleUrl: string, label: string) => {
      //@ts-ignore
      return new Worker(self?.MonacoEnvironment?.getWorkerUrl(moduleUrl), {
        name: label,
        type: "module",
      });
    };

    switch (label) {
      case "json":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/json/json.worker?worker",
          label
        );
      case "css":
      case "scss":
      case "less":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/css/css.worker?worker",
          label
        );
      case "html":
      case "handlebars":
      case "razor":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/html/html.worker?worker",
          label
        );
      case "typescript":
      case "javascript":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/typescript/ts.worker?worker",
          label
        );
      default:
        return getWorkerModule(
          "/monaco-editor/esm/vs/editor/editor.worker?worker",
          label
        );
    }
  },
};

import("@cldcvr/flow-core").then(async () => {
  await import("@cldcvr/flow-system-icon");
  await import("@cldcvr/flow-lineage");
  await import("@cldcvr/flow-table");

  await import("@cldcvr/flow-code-editor");
  createApp(App).mount("#app");
});

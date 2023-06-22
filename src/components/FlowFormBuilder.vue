<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <f-div padding="large">
    <f-form-builder :field.prop="field">
      <f-div>
        <f-button label="submit" type="submit"></f-button>
      </f-div>
    </f-form-builder>
  </f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import field from "./f-formbuilder-field";

export default defineComponent({
  name: "FlowFormBuilder",
  data() {
    return {
      field,
    };
  },
});
</script>

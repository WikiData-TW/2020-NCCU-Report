<template>
  <div id="app">
    <router-view class="viewport" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import metadataParser from "markdown-yaml-metadata-parser";

import rawParagraph from "!!raw-loader!@/../post/index.md";

@Component
export default class App extends Vue {
  private metadata = metadataParser(rawParagraph).metadata;
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>

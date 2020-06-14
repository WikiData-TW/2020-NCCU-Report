<template>
  <div class="home">
    <article class="article-container" v-html="paragraphs" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import marked from "marked";
import metadataParser from "markdown-yaml-metadata-parser";

import rawParagraph from "!!raw-loader!@/../post/index.md";

import Heading from "@/components/element/Heading.vue";

@Component({
  components: {
    Heading
  }
})
export default class Home extends Vue {
  private paragraphs = marked(
    metadataParser(rawParagraph)
      .content.replace(
        /<!-- article::start -->/g,
        `<div class="article article-part">`
      )
      .replace(/<!-- article::end -->/g, `</div>`)
      .replace(
        /<!-- spotlight::full-start -->/g,
        `<div class="spotlight spotlight-fullsize">`
      )
      .replace(/<!-- spotlight::full-end -->/g, `</div>`)
      .replace(
        /<!-- spotlight::reader-start -->/g,
        `<div class="spotlight spotlight-reader">`
      )
      .replace(/<!-- spotlight::reader-end -->/g, `</div>`)
  );
}
</script>

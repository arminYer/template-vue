<template>
  <h1 text="3xl">
    {{ msg }}
  </h1>
  <ul>
    <li><i-vscode-icons:file-type-typescript-official /> TypeScript</li>
    <li><i-vscode-icons:file-type-vite /> Vite</li>
    <li><i-file-icons:windi /> WindiCss</li>
    <li><i-ion:images-sharp /> Icons</li>
    <li><i-mdi:book-open-page-variant /> Pages</li>
    <li><i-noto:pineapple /> Pinia</li>
  </ul>
  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>
  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>
  <div>
    <p
      class="inline"
      bg="blue-300"
    >
      nav
    </p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    vue(), 
    WindiCSS(),    
    Components({
      dts: true,
      resolvers: [IconsResolver()],
    }),
    Icons({ compiler: "vue3" }), 
    Pages({
      exclude: ["**/components/*.vue"],
      pagesDir: [
        { dir: "src/views", baseRoute: "" },
      ],         
    }),
  ],
});

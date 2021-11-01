import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import mkcert from"vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

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
    Layouts(),
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,      
      include: path.resolve(__dirname, "locales/**"),
    }),
    mkcert(),    
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [],  
      manifest: {
        name: "Template Vue",
        short_name: "Template",
        description: "Template for Vue",
        theme_color: "#f9fafb",
        icons: [],
      },
    }),    
  ],
});

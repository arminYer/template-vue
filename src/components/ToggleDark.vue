<template>
  <button
    @click="toggleDark()"
  >
    <span v-show="!isDark">
      <i-bx:bx-sun
        class="text-dark-700 align-middle h-6 w-6"
        aria-hidden="true"
      />
    </span>    
    <span v-show="isDark">
      <i-bx:bx-moon
        class="text-white align-middle h-6 w-6"
        aria-hidden="true"
      />
    </span>  
  </button>  
</template>

<script setup lang="ts">
import { onBeforeMount, onUpdated } from "vue";
import { isDark, toggleDark, ToggleThemeColor } from "../logic/darkMode";

onBeforeMount(() => {
  ToggleThemeColor(); 
});

onUpdated(() => {
  ToggleThemeColor();
});

</script>
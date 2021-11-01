import { useDark, useToggle } from "@vueuse/core";

const light = "#f9fafb";
const dark = "#1b1b1b";

export const isDark = useDark();
export const toggleDark = useToggle(isDark);

export function ToggleThemeColor(): void {
  const metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor?.setAttribute("content", isDark.value ? dark : light);    
}
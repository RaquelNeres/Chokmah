import { inject, ref } from 'vue'

export function useShowSidebar() {
  const showSidebar = inject('showSidebar', ref(false))

  const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value
  }

  const openSidebar = () => {
    showSidebar.value = true
  }

  const closeSidebar = () => {
    showSidebar.value = false
  }

  return {
    showSidebar,
    toggleSidebar,
    openSidebar,
    closeSidebar
  }
}

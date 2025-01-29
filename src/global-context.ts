import { buildContext } from './context-builder'
import { computed, ref } from "vue"

// example global context manager 
export const [useProvideGlobalContext, useGlobalContext] = buildContext('globalContext', () => {
  const scope = ref('Site')

  const updateScope = (newScope: string) => {
    scope.value = newScope
  }

  return { scope: computed(() => scope.value), updateScope }
})
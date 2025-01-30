import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

/**
 * This composable makes it easy to treat a value in the url search params like
 * a reactive state. It will automatically update the url when the value changes
 * And set the state when the url changes.
 * @param name 
 * @param initialValue 
 * @param parseParam 
 * @returns 
 */
export const useSearchParamsState = <T>(name: string, initialValue?: T, parseParam: (v: string | string[] | undefined) => T = (v) => v as T) => {
  const route = useRoute()
  const router = useRouter()
  const duplicateState = ref(route.query[name] ? parseParam(route.query[name]) : initialValue)

  watch(() => route.query[name], (value, oldValue) => {
    if(value === oldValue) return
    duplicateState.value = parseParam(value)
  })

  watch(duplicateState, (value, oldValue) => {
    if(value === oldValue) return
    router.push({
      query: {
        ...route.query,
        [name]: value
      }
    })
  })

  return duplicateState
}

export const useSearchParamNumberState = (name: string, initialValue?: number) => useSearchParamsState<number>(name, initialValue, (v) => Number(v as string))
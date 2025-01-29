import { buildContext } from '../context-builder'
import { computed, ref, watch } from "vue"
import { useGlobalContext } from '../global-context'

// example context manager 
export const [useProvideChartContext, useChartContext] = buildContext('chartContext', () => {
  const { scope } = useGlobalContext()
  const errorType = ref('API')
  const rawData = ref([])

  const chartData = computed(() => rawData.value.map((data: any) => ({ x: data.date, y: data.value })))

  const fetchData = async () => {
   // const data = await fetch('https://api.com/data')
   // rawData.value = await data.json()

    // let's just pretend it is fetching data
    rawData.value = fakeFetch(scope.value, errorType.value)
  }

  const setErrorType = (type: string) => errorType.value = type

  watch([errorType, scope], () => fetchData(), { immediate: true })

  // We wrap the errorType in a computed so ensure that it is a read-only state for
  // the consumers - we want to retain update logic to the contexts - the buildContext
  // only accepts computeds and functions 
  return { chartData, errorType: computed(() => errorType.value), setErrorType }
})






const fakeFetch = (scope: string, errorType: string) => {
    const fakeDifference = scope?.length + errorType?.length
    const value = `${scope} + ${errorType}`
    return [
      {date: '2025/01/01', value: `${value} = ${fakeDifference}`},
      {date: '2025/01/02', value: `${value} = ${fakeDifference*2}`},
      {date: '2025/01/03', value: `${value} = ${fakeDifference*3}`}
    ]
}
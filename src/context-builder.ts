import { ComputedRef, inject, provide } from "vue"


export type ComputedsOrFuntions<T> = Record<string, ComputedRef<any> | Function> 
export type ContextProvider<T, Args> = (args?: Args) => void
export type ContextConsumer<T> = () => T

export const buildContext = <T extends ComputedsOrFuntions<T>, Args>(name: string, contextManager: (_: Args) => T): [ContextProvider<T, Args>, ContextConsumer<T>] => {
  const provider = (args?: Args) => {
    const context = contextManager(args)
    provide<T>(name, context)
  }

  const consumer = (): T => {
    const distributedState = inject<T>(name)

    // Should be caught in developpement. 
    // Better to have an explicit error than provide a non reactive state to ensure the issue is caught and understood
    if(!distributedState) {
      throw new Error(`No context found, ensure that the ${name} consumer is used under the ${name} provider`)
    }
    return distributedState
  }

  return [
    provider, consumer
  ]
}


<script setup lang="ts">
import { useChartContext } from './chart-context';
import DumbSelector from '../dumb-components/DumbSelector.vue'

const { setErrorType, errorType } = useChartContext();

const errorTypes = ['API', 'JS', 'CUSTOM'];
</script>


<template>
  <div>
    <h3>Set Error Type</h3>
    <DumbSelector :options="errorTypes" :selectedOption="errorType" @onSelectOption="setErrorType" />
  </div>
</template>

<style>
.selected {
  background-color: green;
}
</style>
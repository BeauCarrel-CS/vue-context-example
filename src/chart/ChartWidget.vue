<script setup lang="ts">
import { useProvideChartContext } from './chart-context';
import ChartDataDisplay from './ChartDataDisplay.vue';
import ErrorTypeSelector from './ErrorTypeSelector.vue';

// Provide the context in the parent component
useProvideChartContext();
</script>


<template>
  <div>
    <h2>Chart Widget</h2>
    <div class="chart-widget">
      <ErrorTypeSelector />
      <ChartDataDisplay />
    </div>
  </div>
</template>
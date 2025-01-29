
<script setup lang="ts">
import { useChartContext } from './chart-context';

const { chartData } = useChartContext();
</script>

<template>
  <div>
    <h3>Chart Data</h3>
    <ul>
      <li v-for="point in chartData" :key="point.x">
        {{ point.x }}: {{ point.y }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts" >
import ChartWidget from '../chart/ChartWidget.vue'
import ScopeSelector from '../components/ScopeSelector.vue'
import { useProvideGlobalContext } from '../global-context';

useProvideGlobalContext()


</script>

<template>
  <ScopeSelector />

  <ChartWidget />
  <ChartWidget />
</template>
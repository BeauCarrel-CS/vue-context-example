

<script setup lang="ts">
import { useGlobalContext } from '../global-context';
import DumbSelector from '../dumb-components/DumbSelector.vue'

const { scope, updateScope } = useGlobalContext()

const scopes = ['Site', 'Page/URL', 'Page Group'];
</script>


<template>
  <div>
    <h3>Set Scope</h3>
    <DumbSelector :options="scopes" :selectedOption="scope" @onSelectOption="updateScope" />
  </div>
</template>

<style>
.selected {
  background-color: green;
}
</style>
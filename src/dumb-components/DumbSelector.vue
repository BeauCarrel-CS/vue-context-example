<script setup lang="ts">
defineProps<{ selectedOption?: string, options: string[] }>();
const emit = defineEmits<{ onSelectOption: [option: string] }>();

const selectOption = (option: string) => {
  emit('onSelectOption', option)
}
</script>

<template>
  <div>
    <button v-for="option in options" :key="option" @click="selectOption(option)" :class="{selected: option === selectedOption}">
      {{ option }}
    </button>
  </div>
</template>


<style>
.selected {
  background-color: green;
}
</style>
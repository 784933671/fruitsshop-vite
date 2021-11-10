<script setup>
const props = defineProps(
  ['description', 'descriptionModifiers']
)
const emit = defineEmits(['update:description'])
const onInput = (e) => {
  let value = e.target.value
  if (props.descriptionModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:description', value)
}
</script>

<template>
  <input type="text"
         :value="description"
         @input="onInput">
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

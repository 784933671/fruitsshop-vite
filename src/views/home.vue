<template>
  <HelloWorld v-model:description.capitalize="myText"></HelloWorld>
  <button @click="getMyText">点击</button>
</template>

<script>
import { defineComponent, defineAsyncComponent, reactive, toRefs } from "vue"
export default defineComponent({
  components: {
    "HelloWorld": defineAsyncComponent(() => import("@/components/HelloWorld.vue"))
  },
  setup: () => {
    const state = reactive({
      myText: ""
    })
    const getMyText = () => {
      console.log(state.myText)
    }
    return {
      ...toRefs(state),
      getMyText
    }
  }
})
</script>

<style lang="sacss" scoped>
</style>
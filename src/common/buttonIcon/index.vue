<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
defineOptions({
  name: 'ButtonIcon'
})
interface Props {
  name?: string,
  size?: string,
  plain?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  name: 'home',
  size: '1em',
  plain: true,
})
const classObject = computed(()=>{
  return props.plain? 'button-icon-box':'button-icon-box-plain'
})

</script>

<template>
  <div :class="classObject">
    <SvgIcon :name="name" :size="size" />
  </div>
</template>

<style scoped>
.button-icon-box {
  padding: 20px;
}
.button-icon-box-plain {
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
/* .button-icon-box-plain:hover {
  background-color: #dbdbdb;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
} */
.button-icon-box:hover {
  background-color: #ebebeb;
  border-radius: 5px;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
</style>
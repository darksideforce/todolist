<script setup lang='ts'>
import { ref, reactive } from 'vue'
defineOptions({
  name: 'GlobalSlider'
})
</script>

<template>
  <div class="slider-content">
    <SvgIcon name="clock" size="4em"/>
    <div class="slider-content-main">
      <div class="icon-box">
        <ButtonIcon  size="2em"></ButtonIcon>

      </div>
      <div class="icon-box">
        <ButtonIcon name="calendar" size="2em"></ButtonIcon>

      </div>
      <div class="icon-box">
        <ButtonIcon name="calendar" size="2em"></ButtonIcon>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.slider-content{
  width: 100px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 30px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.slider-content-main{
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
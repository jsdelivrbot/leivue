<template>
  <div :class="[displayType,offSetSize,orderSize]">
    <slot></slot>
  </div>
</template>

<script>
  import mixin from './gmixin.js'
  export default{
    name:'Column',
    data(){
      return{

      }
    },
    mixins: [mixin],
    created(){
      this.$parent.setGridType('column');
    }
  }
</script>

<style>
  
</style>
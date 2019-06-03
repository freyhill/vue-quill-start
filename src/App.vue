<template>
  <div>
    <Content></Content>
    <Format></Format>
  </div>
</template>
<style lang="scss">
.flex{
  display: flex;
}
</style>
<script lang="ts">
// script标签里一定要写上 lang ="ts" 
import Vue from 'vue'
import {quill} from './utils/editor'
import Component from 'vue-class-component';
import Content from './components/content.vue';
import Format from './components/format.vue'
@Component({
  components:{
    Content,
    Format
  }
})
export default class App extends Vue{
 public msg = 123;
}
</script>
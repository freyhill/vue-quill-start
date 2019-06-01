<template>
  <div>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <div>{{content}}</div>
    <div class="flex">
      <button @click="deleteText">删除文本测试</button>
      <button @click="getContents">获取编辑器内容</button>
    </div>
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
import {editor} from './utils/editor'
import Component from 'vue-class-component';
@Component({
  components:{
  }
})
export default class App extends Vue{
 public msg = 123;
 protected pContent:any = 'xxx';
 public get content () {
   return this.pContent;
 }
 public set content (val:any) {
   this.pContent = val;
 }
 public mounted() {
   
 }
 // 删除测试
 public deleteText () {
   console.log(this.pContent);
   editor.deleteText(6, 4);
 }
 // 获取编辑器内容
 public getContents () {
   var delta = editor.getContents();
   console.log('delta', delta);
   this.pContent = delta.ops[0].insert;
 }
}
</script>
<template>
  <div>
    <h1>内容相关</h1>
    <div>检索编辑器的内容，格式化返回一个Delta对象:{{content}}</div>
    <div>获取文本长度{{contentLength}}</div>
    <div>检索并已字符串的方式返回编辑器的内容:{{ptext}}</div>

    <div class="flex">
      <button @click="deleteText">deleteText</button>
      <button @click="getContents">getContents</button>
      <button @click="getContentLength">getContentLength</button>
      <button @click="getText">getText</button>
      <button @click="insertEmbed">insertEmbed</button>
      <button @click="insertText">insertText</button>
      <button @click="setContents">setContents</button>
      <button @click="setText">setText</button>
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
import {quill} from '../utils/editor'
import Component from 'vue-class-component';
@Component({})
export default class Content extends Vue{
 protected pContent:any = 'xxx';
 protected contentLength: number = 0;
 protected ptext: string = '';
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
   quill.deleteText(0, this.contentLength);
 }
 // 获取编辑器内容
 public getContents () {
   var delta = quill.getContents();
   console.log('delta', delta);
   this.pContent = delta.ops[0].insert;
 }
 // 返回编辑器内容的长度
 public getContentLength () {
   this.contentLength =  quill.getLength();
 }
 // 检索并以字符串的方式返回编辑器内容
 public getText () {
   // index：开始位置索引  length：结束索引，默认为当前剩余文档的长度
   console.log(quill);
   this.ptext = quill.getText();
 }
 // 向编辑器插入嵌入式内容 返回一个改变后的delta对象
 public insertEmbed () {
   quill.insertEmbed(10,'image','https://images2015.cnblogs.com/blog/329084/201511/329084-20151111151853244-221817908.png')
 }
 // 向编辑器中插入文本
 public insertText () {
   quill.insertText(0, 'Hello', 'bold', true);
 }
 // 用给定的内容覆盖编辑器的内容。内容应该以一个新行或者换行符结束。返回一个改变的Delta
 public setContents () {
    // quill.setContents({delta:[{insert:'ss'}]});
 }
 // 使用给定的文本设置为编辑器的内容，返回一个改变后的Delta对象
 public setText () {
     quill.setText('这是一个设置的内容');
 }
}
</script>
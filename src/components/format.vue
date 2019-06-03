<template>
  <div>
      <button @click="format">format</button>
      <button @click="formatLine">formatLine</button>
      <button @click="formatText">formatText</button>
    <div class="ql-editor ql-blank ql-show" data-gramm="false" contenteditable="true" autocorrect="off" autocomplete="off" spellcheck="false">
        sfsfsf
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script lang="ts">
import Vue from 'vue'
import {quill} from '../utils/editor'
import Component from 'vue-class-component';
@Component({})
export default class Format extends Vue{
 // 格式化用户当前选择的文本，返回一个改变后的Delta对象
 public format () {
     quill.format('color', 'red');
     quill.format('bold', true);
     quill.format('align', 'right');
 }
 // 格式化给定范围内的所有行，返回一个改变后的Delta对象
 public formatLine () {
     quill.formatLine(4, 4, 'align', 'right')
 }

 // 格式化编辑器中的文本，返回一个改变后的Delta对象
 public formatText () {
    // quill.formatText(0, 5, 'bold', true);
     quill.formatText(0, 5, {                   // 取消加粗 'hello' 并且设置颜色为blue
        'bold': true,
        'color': 'rgb(0, 0, 255)'
        });
 }
 public getFormat () {
    quill.setText('Hello World!');
    quill.formatText(0, 2, 'bold', true);
    quill.formatText(1, 2, 'italic', true);
    let f1 = quill.getFormat(0, 2);   // { bold: true }
    quill.getFormat(1, 1);   // { bold: true, italic: true }
    
 }
}
</script>
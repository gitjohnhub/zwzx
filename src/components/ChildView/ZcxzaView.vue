<template>
  <h1> ZcxzaView</h1>
  <a-checkbox-group v-model:value="checkedList" :options="plainOptions" />
  <a-input v-model:value="company_name" placeholder="公司名称">
  </a-input>
  <a-input v-model:value="origin_content" placeholder="请粘贴原来的经营范围">
  </a-input>
  <a-input v-model:value="modify_content" placeholder="请粘贴now的经营范围">
  </a-input>
  <a-button type="primary" @click="generate_xiuzhengan()">Primary Button</a-button>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
const plainOptions = ['经营范围', '住所',];
const checkedList = ref(['经营范围', '住所'])
const company_name = ref("")
const location = ref("第二章第三条")
const origin_content = ref("")
const modify_content = ref("")

watch(checkedList,(newValue,oldValue)=>{
  console.log(newValue)
})

function generate_xiuzhengan(){
  // 将内容转换为Blob对象
  const content = "<html><body><p style='text-align:center;font-size:24px;'>"+ company_name.value+"章程修正案</p ><p style='font-size:16px;'>根据《公司法》及股东会决议，对章程如下：</p ><p style='font-size:16px;'>一、章程"+location.value+"原为："+"<span style='text-decoration:underline;'>"+origin_content.value+"</span>"+"</p><p style='font-size:16px;text-indent:2em;'>现将该条修改为："+"<span style='text-decoration:underline;'>"+modify_content.value+"</span></p>"+"<p style='font-size:16px;'>二、章程第 条原为：</p ><p style='font-size:16px;text-indent:2em;'>现将该条修改为：</p ><p style='font-size:16px;'>三、章程其他条款不变。</p ><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><div style='text-align:right;font-size:16px;'><span style='margin-right:100px'>法定代表人签字:</span><p style='text-align:right;font-size:16px;'><span style='margin-right:20px'>_____年______月______日</span></p></body></html>";


  console.log(content)
  const blob = new Blob([content], {type: "application/msword"});

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = company_name.value + "章程修正案.doc";

  // 添加链接到页面中并触发下载
  document.body.appendChild(link);
  link.click();

  // 释放URL对象
  URL.revokeObjectURL(link.href);
}

</script>
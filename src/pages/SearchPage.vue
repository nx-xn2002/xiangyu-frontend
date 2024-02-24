<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length===0">请选择标签</div>

  <van-row :gutter="[20, 10]">
    <van-col v-for="tag in activeIds" span="4">
      <van-tag closeable size="medium" type="primary" @close="doClose({tag : tag})">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">可选标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

</template>
<script setup lang="ts">
import {ref} from 'vue';
import {showToast} from 'vant';

const searchText = ref('');
//搜索
const onSearch = () => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  })
}
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
};
//移除标签
const doClose = ({tag}: { tag: any }) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
};

//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);

const originTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
      {text: '1', id: '1'},
      {text: '2', id: '2'},
      {text: '3', id: '3'},
      {text: '4', id: '4'},
      {text: '5', id: '5'},
      {text: '6', id: '6'},
      {text: '7', id: '7'},
      {text: '8', id: '8'},
      {text: '9', id: '9'},
      {text: '10', id: '10'},
      {text: '11', id: '11'},
    ],
  },
  {
    text: '方向',
    children: [
      {text: 'Java', id: 'Java'},
      {text: 'C++', id: 'C++'},
      {text: 'Go', id: 'Go'},
    ],
  },
]
let tagList = ref(originTagList);

</script>
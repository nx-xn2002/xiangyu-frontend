<script setup lang="ts">
import {ref} from 'vue';
import {showToast} from 'vant';

const value = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');
</script>

<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <van-divider content-position="left">可选标签</van-divider>
</template>

<style scoped>

</style>
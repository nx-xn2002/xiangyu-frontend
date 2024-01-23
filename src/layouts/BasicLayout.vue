<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
  <div>
    <template v-if="active==='home'">
      <Home/>
    </template>
    <template v-if="active==='team'">
      <Team/>
    </template>
    <template v-if="active==='user'">
      <User/>
    </template>
  </div>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="home">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>
<script setup>
import {ref} from "vue";
import {showToast} from 'vant';
import 'vant/es/toast/style';
import Home from "../pages/Home.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";

const onClickLeft = () => alert("left")
const onClickRight = () => alert("right")
const active = ref("home");
const onChange = (index) => showToast(`${index}页`);
</script>

<style scoped>

</style>
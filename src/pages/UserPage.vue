<template>
  <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username','昵称',user.username)"/>
  <van-cell title="账号" is-link to="/user/edit" :value="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit">
    <van-image
        width="48"
        height="48"
        :src="user.avatarUrl"
    />
  </van-cell>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender==0?'男':'女'"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>
</template>
<script setup lang="ts">

import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: "倪响",
  userAccount: "nixiang2002",
  avatarUrl: "public/logo.svg",
  gender: 0,
  phone: "12345678901",
  email: "1234567890@163.com",
  createTime: new Date(),
};
const router = useRouter();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>
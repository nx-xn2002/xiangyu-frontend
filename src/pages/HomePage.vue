<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList||userList.length<1" description="网络异常"/>
</template>
<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from '../plugins/myAxios.js'
import {showFailToast, showSuccessToast} from "vant";
import UserCardList from "../components/UserCardList.vue";

const userList = ref([])
const route = useRoute();
onMounted(async () => {
  const userListData = await myAxios.get('/user/recommend', {
    params: {
      pageSize: 8,
      pageNum: 1,
    },
  })
      .then(function (response) {
        console.log('/user/recommend success', response);
        showSuccessToast('为您推荐以下用户');
        return response.data?.records;
      })
      .catch(function (error) {
        console.error('/user/recommend failed', error);
        showFailToast('网络请求失败');
      })
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})
const {tags} = route.query;

</script>
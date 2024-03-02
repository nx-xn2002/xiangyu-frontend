<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList||userList.length<1" description="搜索结果为空"/>
</template>
<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from '../plugins/myAxios.js'
import {showFailToast, showSuccessToast} from "vant";
import qs from 'qs'
import UserCardList from "../components/UserCardList.vue";

const userList = ref([])
const route = useRoute();
onMounted(async () => {
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log('/user/search/tags success', response);
        showSuccessToast('搜索完毕');
        return response.data;
      })
      .catch(function (error) {
        console.error('/user/search/tags failed', error);
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
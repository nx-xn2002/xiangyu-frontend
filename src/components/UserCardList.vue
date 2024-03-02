<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username}(${user.id})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 4px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>
<script setup lang="ts">
import {UserType} from "../models/user";

interface UserCardListProps {
  userList: UserType[]
}

const props = withDefaults(defineProps<UserCardListProps>(), {
  //@ts-ignore
  userList: [] as UserType[],
});
</script>
<style scoped>

</style>
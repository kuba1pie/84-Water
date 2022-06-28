<template>
  <q-card>
    <q-card-section class="column items-center q-pb">
      <div class="text-h6">The User</div>
      <q-space />

      {{ store.user.first_name }}
      {{ store.user.last_name }}
      {{ store.user.email }}
      {{ store.user.avatar }}
      <q-avatar size="200px">
        <img :src="store.user.avatar" />
      </q-avatar>
      <q-btn
        push
        color="white"
        text-color="primary"
        round
        icon="arrow_back"
        @click="onBackClick"
      >
        <q-tooltip> Back to users list</q-tooltip></q-btn
      >
      <q-btn
        dense
        round
        flat
        @click="store.favUser(store.user.id)"
        :color="
          store.favUsers.some((e) => e == store.user.id) ? 'green' : 'grey'
        "
        icon="star"
      >
        <q-tooltip> Add to favorites</q-tooltip>
      </q-btn>
      {{ $route.params.id }}
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useUserStore();

const onBackClick = () => {
  router.back();
};
</script>

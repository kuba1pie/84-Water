<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">The User {{ store.user.id }}</div>
      <q-space />

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
      {{ store.user }}
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

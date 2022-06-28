<template>
  <div
    class="q-pa-md doc-container"
    style="max-width: 1000px; margin: 2em auto"
  >
    <q-table
      title="Users"
      :rows="store.filter === '' ? store.response.data : store.filteredClients"
      :columns="columns"
      row-key="id"
      :loading="store.loading"
      binary-staresposnert
      v-model:pagination="store.pagination"
      @request="onRequest"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="store.filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            flat
            @click="favUser(props.row)"
            :color="store.favUsers.includes(props.row.id) ? 'green' : 'grey'"
            icon="star"
          >
            <q-tooltip> Add to favorites</q-tooltip></q-btn
          >
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="showUser(props.row)"
            icon="person"
          >
            <q-tooltip> See user profile </q-tooltip></q-btn
          >
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
import { useRouter } from "vue-router";
const store = useUserStore();
const router = useRouter();
const onRequest = (props) => {
  store.fetchUsers(props.pagination.page);
};
const favUser = (row) => {
  store.favUser(row.id);
};
const showUser = (row) => {
  store.fetchUser(row.id);
  router.push({ name: "User", params: { id: row.id } });
};
store.fetchUsers(1);
store.getFavUsers();
const columns = [
  {
    name: "first_name",
    label: "First Name",
    field: "first_name",
    sortable: true,
  },
  {
    name: "last_name",
    label: "Last Name",
    field: "last_name",
    sortable: true,
  },
  {
    name: "email",
    label: "Email",
    field: "email",
    sortable: true,
  },
  { name: "actions", label: "Actions" },
];
</script>

<template>
  <div class="q-pa-md" style="max-width: 500px; margin: 1em auto">
    <h3 style="text-align: center">App Features:</h3>
    <q-list bordered>
      <q-item v-ripple>
        <q-item-section>Get users list from API with pagination</q-item-section>
      </q-item>
      <q-item v-ripple>
        <q-item-section
          >Add user to the favorites from list and profile</q-item-section
        >
      </q-item>
      <q-item v-ripple>
        <q-item-section
          >Save favorites list to the local storage
        </q-item-section>
      </q-item>
      <q-item v-ripple>
        <q-item-section
          >Search user by lastname (only for one page content)</q-item-section
        >
      </q-item>
      <q-item v-ripple>
        <q-item-section>Created with: Vue3, Vite, Quasar, Pinia</q-item-section>
      </q-item>
      <q-separator />
    </q-list>
  </div>
</template>

<template>
  <v-layout>
    <v-flex xs12 sm8 md6>
      <h1 class="display-1">Users</h1>
      <v-card class="my-5" max-width="400" tile>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="user in users" :key="user.id" :to="'/' + user.id">
              <v-list-item-content>
                <v-list-item-title>{{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    async fetch ({store, error}) {
      if(store.getters['users/users'].length === 0) {
        await store.dispatch('users/fetchUsers')
      }
    },
    data: () => ({}),
    computed: {
      users() {
        return this.$store.getters['users/users']
      }
    }
  }
</script>
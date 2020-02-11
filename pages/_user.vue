<template>
  <v-layout>
    <v-flex xs12 sm8 md6>
      <h1 class="display-1 pb-5">User #{{ this.$route.params.user }}</h1>
      <v-card max-width="400">
        <v-card-title>{{user.name}}</v-card-title>
        <v-card-text>
          <div class="subtitle-1 black--text">
            {{ user.email }}
          </div>
          <div>{{ user.phone }} <a :href="'http://' + user.website" target="_blank" rel="nofollow">{{ user.website }}</a></div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-title>Address</v-card-title>
        <v-card-text>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>{{ user.address.street}}</v-list-item-title>
              <v-list-item-subtitle>Street</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>{{ user.address.suite}}</v-list-item-title>
              <v-list-item-subtitle>Suite</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ user.address.city}}</v-list-item-title>
              <v-list-item-subtitle>City</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>{{ user.address.zipcode}}</v-list-item-title>
              <v-list-item-subtitle>Zipcode</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn class="px-5" color="grey" dark>Posts</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    async asyncData ({$axios, params, error}) {
      const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.user)
      return {user}
    },
    data: () => ({})
  }
</script>
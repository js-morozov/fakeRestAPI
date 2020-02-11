<template>
  <v-layout column>
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
      </v-card>
    </v-flex>
    <v-flex xs12>
      <h1 class="display-1 pt-10">Posts</h1>
      <v-card class="my-5" tile>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(post, index) in postsByUserID" :key="post.id">
              <v-list-item-content>
                <v-list-item-title>{{ ++index }} - {{ post.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
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
    async asyncData ({$axios, params, error}) {
      const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.user)
      return {user}
    },
    data: () => ({}),
    computed: {
      postsByUserID() {
        return this.$store.getters['posts/posts'].filter(item => item.userId === this.user.id)
      }
    }
  }
</script>
<template>
  <v-layout>
    <v-flex xs12>
      <v-layout justify-space-between align-center>
        <h1 class="display-1 mb-5">Posts</h1>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" fab dark color="indigo" small v-on="on">
              <v-icon dark small>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Add new post</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="User"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Title"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea label="Text"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
      <v-card class="my-5" tile>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(post, index) in posts" :key="post.id">
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
    asyncData ({$axios, error}) {
      return $axios.$get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {
          return {
            posts
          }
        }).catch(e => {
          error(e)
        })
    },
    data: () => ({
      dialog: false
    })
  }
</script>
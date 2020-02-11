<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="(link, index) in links">
          <v-list-item :key="index" link :to="link.to">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <span class="hidden-sm-and-down">Fake REST API</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="px-5">
        <nuxt />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      links: [
        { icon: 'mdi-account-group', text: 'Users', to: '/'},
        { icon: 'mdi-ballot-outline', text: 'Posts', to: '/posts'},
      ],
    }),
  }
</script>
<template>
  <v-app>
    <v-toolbar class="warning">

      <v-toolbar-title>
        Veamos
      </v-toolbar-title>

      <v-spacer></v-spacer>

        <v-btn>aja</v-btn>
        <v-btn>eje</v-btn>
    </v-toolbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
  <CustomToolbar />
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <CustomFooter />
</v-app>
</template>

<script>

import Carousel from '@/components/Carousel'
import CustomFooter from '@/components/CustomFooter'
import CustomToolbar from '@/components/CustomToolbar'

export default {
  name: 'app',
  components: {
    Carousel,
    CustomFooter,
    CustomToolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

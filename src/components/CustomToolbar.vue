<template>
    <v-toolbar fixed color="#FFFFFF">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link to="/">
    <img src="logo2.png" style="width:120px; height: auto"> 
    </router-link>
    <v-toolbar-title class="hidden-sm-and-down">CondoServices</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-text-field label="Buscar Profissional" 
          append-icon="search">
    </v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Contato</v-btn>
      <v-btn flat>Link Two</v-btn>
      <Login />
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import Login from '@/components/Login'
export default {
  components: {
    Login
  }
    
}
</script>

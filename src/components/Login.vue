<template>
<v-layout>
    <v-btn flat icon @click="dialog = true"> <v-icon> fa-user</v-icon></v-btn>
<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="400px">
       <v-card class="elevation-12">
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" label="Usuário" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" label="Senha" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                 <v-btn flat color="primary" to="/register" @click="dialog = false">Cadastrar</v-btn>
                <v-btn color="primary" @click="dialog = false">Entrar</v-btn>
              </v-card-actions>
            </v-card>
    </v-dialog>
  </v-layout>
</v-layout>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      dialog: false
    }),
    props: {
      source: String
    }
  }
</script>
 
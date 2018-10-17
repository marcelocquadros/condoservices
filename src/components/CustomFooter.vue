<template>
     <v-footer
    dark
    height="auto"
  >
    <v-card
      class="indigo  white--text text-xs-center flex"
      flat
      tile
    >
      <v-card-title class="indigo">
        <strong class="subheading">Siga-nos nas nossas redes sociais</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
       <v-card-text class="white--text">
        &copy;2018 — <strong>CondoServices</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
}
</script>

<template>
<v-footer app dark height="auto">
    <v-card flat tile class="indigo  white--text text-xs-center" width="100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
      
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>CondoServices</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>



<template>
  <v-layout pt-4>
    <v-flex xs12 sm4 offset-sm1>
      <v-card>
        <v-card-media>
        <v-img
          src="eletro.jpg"
          aspect-ratio="2.75"
          height="200px">
        </v-img>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4 class="headline mb-0">Alberto Costa</h4>
          </div>
        </v-card-title>
        <v-card-text>
            <div> 
                Lorem ipsum ornare integer molestie egestas conubia, vestibulum amet donec id neque. nulla nunc aliquet lectus volutpat luctus nulla donec nunc purus, luctus dictumst inceptos ullamcorper accumsan donec eu dui amet quisque, per proin morbi nibh ullamcorper pharetra tempor in. ut pellentesque rhoncus vel aenean sit auctor phasellus taciti mi, aliquam fames porttitor ad tristique eros.  
            </div>
        <v-divider></v-divider>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="indigo" dark>Valor Hora R$ 50,00</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="indigo" dark to="checkout">Contratar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-flex xs12 sm12>
        </v-flex>
        <v-flex xs12 sm12>
          <Comments />
        </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>

import Comments from '@/components/Comments'
export default {
    components: {
        Comments
    },
    data() {
        return {
            
            
        }   
    }
}
</script>





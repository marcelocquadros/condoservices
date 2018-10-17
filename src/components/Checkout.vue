<template>
    <v-container>
       
        <v-layout row justify-center pl-4>
            <v-flex xs12 md12>
             <v-card color="white" class="black--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="eletro.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Alberto Costa</div>
                      <div>Conserto de Eletro Domésticos </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>

            <Agenda />

            </v-card>
            <v-card>
                    <v-card-text primary-text>
                        <h3>Selecione o(s) dia(s) e a quantidade de horas desejadas </h3>
                    </v-card-text>
                    <v-card-text>
                        <div>
                            <v-slider  v-model="slide" min="0" max="100" label="Horas" thumb-label="always"></v-slider>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <h2>Valor a pagar: R$ {{ price * slide }},00</h2>
                    </v-card-actions>
                </v-card>
                
                 <CreditCard   />
                
            </v-flex>
        </v-layout>
        
    </v-container>
</template>
<script>
import CreditCard from '@/components/CreditCard'
import Agenda from '@/components/Agenda'
export default {
    components: {
        CreditCard,
        Agenda
    },
    data() {
        return {
            slide: 0,
            price: 50
        }
    }
};
</script>

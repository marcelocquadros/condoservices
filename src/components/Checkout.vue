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
                    <v-flex xs12>
                        <v-slider v-model="slide" min="0" max="100" label="Horas" thumb-label="always"></v-slider>
                    </v-flex>
                   <v-container fluid class="pa-0">
    <v-layout row wrap pr-5 pl-5>
        <v-spacer></v-spacer>
      <v-flex md12 sm12>
          Valor  a pagar
          <v-chip text-color="red" outline="true" >
              <v-avatar alt-labels="Valor a pagar">
              <img src="cash.png" alt="Valor a ser pago">
              </v-avatar>
              <span style="font-size:20px; font-weight: bold">
             R$ {{ price * slide }},00
             </span>

          </v-chip>
          Cash Back
          <v-chip text-color="green" outline="true">
            <v-avatar size="200px">
              <img src="cash-back.jpg" alt="Cash Back">
              </v-avatar>
              <span style="font-size:20px; font-weight: bold">
                 R$ {{ ((price * slide) * 0.05)  }},00
             </span>
          </v-chip>
                   
      </v-flex>
    </v-layout>
    
                   </v-container>
                </v-card-text>
                <v-card-actions>
                       
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

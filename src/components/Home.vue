<template>
<div>
     <Carousel />
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md3  sm6 xs12 v-for="item in items" :key="item.name">
                <v-card ripple style="cursor:pointer" to="/details">
                    <v-img class="white--text" height="200px" :src="item.src">
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                    <v-card-title>
                      <div style="width:100%">
                        <span class="grey--text" style="font-size:18px">{{ item.name }}</span><br>
                        <span>{{ item.title }}</span><br>
                        <span>Serviços Prestados: {{ item.totalServices }}</span> <br/>
                        <span>Preço Médio: R$ {{ item.price }},00</span>
                      </div>

                      <div style="width:100%">
                          <v-divider></v-divider>
                          <v-rating 
                            v-model="item.rating"
                            readonly
                            small
                        ></v-rating> 
                      </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <br/>
        <br/>
        <div class="text-xs-center">
            <v-pagination
                v-model="page"
                :length="4"
                circle>
            </v-pagination>
        </div>
    </v-container>
</div>
</template>
<script>

import Carousel from '@/components/Carousel'

export default {
    components: {
        Carousel
    },
    data() {
        return {
            page: 1,
            items: [
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"air.jpg",
                    name: "José Dias",
                    price: 90,
                    title: "Especialista em Ar condicionado",
                    totalServices: 59,
                    description: "Está com problemas no seu ar condicionado?" 
                }, 
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"eletro.jpg",
                    name: "Alberto Costa",
                    price: 80,
                    title: "Reparos em Eletro Domésticos",
                    totalServices: 53,
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"pedreiro.jpg",
                    name: "João Augusto",
                    price: 140,
                    title: "Serviços de Pedreiro",
                    totalServices: 30,

                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"clean2.jpg",
                    name: "Marinete Souza",
                    price: 70,
                    title: "Serviços Domésticos",
                    totalServices: 200,
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"youga.jpg",
                    name: "Eunice Santos",
                    price: 70,
                    title: "Professora de Yoga",
                    totalServices: 300,
    
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"mat.jpg",
                    name: "Lidiane Silva",
                    price: 56,
                    title: "Professora de Matemática",
                    totalServices: 219
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"teacher2.jpg",
                    name: "Antony Jih",
                    price: 50,
                    title: "English Teacher",
                    totalServices: 101
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"domestica2.jpg",
                    name: "Juliane Gomes",
                    price: 50,
                    title: "Doméstica e Cozinheira",
                    totalServices: 100

                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"personal1.jpg",
                    name: "Lidiane Santos",
                    price: 98,
                    title: "Personal Trainner",
                    totalServices: 5
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"baba.jpg",
                    name: "Vivian Neves",
                    price: 51,
                    title: "Babá",
                    totalServices: 5
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"encanador1.jpg",
                    name: "Jonas Mendes",
                    price: 10,
                    title: "Encanador",
                    totalServices: 89
                },
                {
                    rating: (Math.floor(Math.random() * 5) + 3),
                    src:"musica.jpg",
                    name: "Aline Mattos",
                    price: 30,
                    title: "Professora de Música",
                    totalServices: 58
                    
                    
                }
            ]
        }
    }
}
</script>

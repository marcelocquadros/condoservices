<template>
<v-card>
    <v-layout row justify-center pl-4>
    <v-card width="500px">
        <v-card-title>
            Dados do Pagamento
        </v-card-title>
        <v-card-media>
            <img src="cartoes.png" style="width:300px; height:auto; margin-top:5px" />
        </v-card-media>
        <v-card-text>
            <v-text-field label="Nome do Titular"></v-text-field>
            <v-text-field label="Número do Cartão"></v-text-field>
            <v-text-field label="CVV"></v-text-field>
            <v-text-field label="CPF do Titular"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary">Concluir Pedido</v-btn>
        </v-card-actions>
    </v-card>
    </v-layout>
</v-card>
</template>
<script>
export default {
    
}
</script>

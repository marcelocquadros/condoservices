<template>
    <v-card>
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
    </v-card>
</template>
<script>
export default {
    
}
</script>

<template>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex>
            <v-card>
                <v-card-title>
                   <h3> Cadastro de Profissional </h3>
                </v-card-title>
                <v-card-text>
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex   md8 xs12  pr-4>
                                <v-text-field padding label="Nome Completo"> </v-text-field>
                            </v-flex>
                            <v-flex  md4 xs12>
                                <v-text-field label="CEP"></v-text-field>
                            </v-flex>
                            <v-flex  md8 xs12 pr-4>
                                <v-text-field label="Endereço"></v-text-field>
                            </v-flex>
                            <v-flex  md4 xs12>
                                <v-text-field label="Número"></v-text-field>
                            </v-flex>
                            <v-flex  md4 xs12 pr-4>
                                <v-text-field label="Complemento"></v-text-field>
                            </v-flex>
                            <v-flex  md4 xs12 pr-4>
                                <v-text-field label="Telefone"></v-text-field>
                            </v-flex>
                            <v-flex  md4 xs12>
                                <v-text-field label="Valor Hora"></v-text-field>
                            </v-flex>
                            <v-flex  md6 xs12 pr-4>
                                 <v-select 
                                    :items="states"
                                    label="Estado"
                                ></v-select>
                            </v-flex>

                            <v-flex  md6 xs12>
                                <v-text-field label="Profissão/Especialidade"></v-text-field>
                            </v-flex>
                            <v-flex  md6 xs12 pr-4>
                                <v-text-field type="file" label="Foto" prepend-icon="fas fa-file-upload"></v-text-field>
                            </v-flex>
                            <v-flex  md6 xs12>
                                <v-text-field type="file" label="CPF" prepend-icon="fas fa-file-upload"></v-text-field>
                            </v-flex>
                            <v-flex  md6 xs12 pr-4>
                                <v-text-field type="file" label="Comprovante Residência" prepend-icon="fas fa-file-upload"></v-text-field>
                            </v-flex>
                            <v-flex  md6 xs12>
                                <v-text-field type="file" label="Antepassado Criminal" prepend-icon="fas fa-file-upload"></v-text-field>
                            </v-flex>
                            <v-flex  md12 xs12>
                                <v-textarea label="Descrição/Habilidades"></v-textarea>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                    <v-card-actions>
                       <v-btn flat color="info">Voltar</v-btn>
                        <v-btn  color="primary">Enviar</v-btn>
                    </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            radioGroup: {},
            states: ['SP', 'MG', 'MT']
        }
    }
}
</script>

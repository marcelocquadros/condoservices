<template>
    <v-layout column justify-center pl-4>
        <v-subheader>
            Comentários 
        </v-subheader>
        <v-expansion-panel>
            <v-expansion-panel-content
                v-for="(message, i) in messages"
                :key="i"
                hide-actions>
                <v-layout
                    slot="header"
                    align-center
                    row
                    spacer>
                    <v-flex xs4 sm2 md1>
                        <v-avatar
                            slot="activator"
                            size="36px">
                            <img
                                v-if="message.avatar"
                                :src="message.avatar"
                                alt="Avatar"
                            >
                            <v-icon
                                v-else
                                :color="message.color"
                                v-text="message.icon"
                            ></v-icon>
                        </v-avatar>
                    </v-flex>

                    <v-flex sm5 md3 hidden-xs-only>
                        <strong v-html="message.name"></strong>
                    <span
                        v-if="message.total"
                        class="grey--text">
                        &nbsp;({{ message.total }})
                    </span>
                    </v-flex>
                    <v-flex no-wrap xs5 sm3>
                        <v-chip
                            v-if="message.new"
                            :color="`${message.color} lighten-4`"
                            class="ml-0"
                            label
                            small>
                          {{ message.new }} new
                        </v-chip>
                        <strong v-html="message.title"></strong>
                    </v-flex>

                    <v-flex
                        v-if="message.excerpt"
                        class="grey--text"
                        ellipsis
                        hidden-sm-and-down>
                        &mdash;
                        {{ message.excerpt }}
                    </v-flex>
                    <div>
                        <v-rating small v-model="ratting" readonly></v-rating>
                    </div>
                </v-layout>
                <v-card>
                    <v-divider></v-divider>
                    <v-card-text v-text="message.lorem"></v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            ratting: 5,
            messages: [
            { 
                avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                name: 'Marcio Campos',
                title: 'Profissional nota 10',
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },
            { 
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                name: 'John Leider',
                title: 'Recomendo!',
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },
            { 
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                name: 'Júlia Paixão',
                title: 'Ótimo trabalho!',
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },
            
            { 
                avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                name: 'Marcio Campos',
                title: 'Profissional nota 10',
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },
            { 
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                name: 'John Leider',
                title: 'Recomendo!',
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },
            { 
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                name: 'Júlia Paixão',
                title: 'Ótimo trabalho!',
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },
             { 
                avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                name: 'Marcio Campos',
                title: 'Profissional nota 10',
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },
            ],
            
        }   
    }
}
</script>
<!--
<template>
    <v-list two-line>
        <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
            >
                <v-list-tile-avatar>
                    <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-container grid-list-md text-xs-center>
                    <v-layout row wrap>
                        <v-flex sm6>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        </v-flex>
                        <v-flex>
                            <v-spacer> </v-spacer> <v-rating  small v-model="ratting"> </v-rating>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>
  export default {
    data () {
      return {
        ratting: 5,
        items: [
          { header: 'Comentários' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Mark Ju',
            subtitle: "Ótimo profissional! Não deixou nada desejar..."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'John Viti',
            subtitle: "Tudo conforme combinado! Recomendo!"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'José Amparo',
            subtitle: "Honesto e fez um ótimo trabalho! Recomendo!"
          }
        ]
      }
    }
  }
</script>
-->
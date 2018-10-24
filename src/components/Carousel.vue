<template>
    <v-carousel style="height:500px; margin-top:-15px" >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src" />
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "header1_.jpg"
        },
        {
          src: "header2.jpg"
        },
         {
          src: "baba.jpg"
        },
        {
          src: "header11.jpg"
        }
       
      ]
    };
  }
};
</script>


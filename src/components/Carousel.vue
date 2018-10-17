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
          src: "header1.jpg"
        },
        {
          src: "header2.jpg"
        },
        {
          src: "header3.jpg"
        },
        {
          src: "header4.jpg"
        },
        {
          src: "header5.jpg"
        },
        {
          src: "header11.jpg"
        },
        {
          src: "header7.jpg"
        }
      ]
    };
  }
};
</script>


<template>
  
  <div>
    <v-list-tile :class="{'is-selected': active}" @click.stop="selectPost">
        <div class="list__media__background" 
        :style="{ 'background-image': 'url(' + img + ')' }"></div>
        <v-list-tile-content>
          <v-list-tile-title v-text="title"></v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
  </div>
  
</template>



<script>
  export default {
    data() {
      return {
        cardHeight: '75',
      }
    },
    template: '#post-item',
    props: ['title', 'img', 'active', 'index'],
    methods: {
    	selectPost() {
        this.$emit('newactive', this.index);
      }
    }
    
  }
</script>



<style lang="scss" scope>
  .list__media__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: inherit;
   
    
    opacity: 0;
    transition: opacity 0.3s ease-in;
    
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.3s ease-in;
    }
  }
  
  
  
  .list__media__content {
    background-color: rgba(0,0,0,0.3);
    
  }
  
  .list__tile__title {
    transition: color 0.2s ease-in;
    white-space: inherit;
    overflow: visible;
    line-height: 1.2em;
    font-family: 'Questrial', sans-serif;
  }
  
  
 
  .list__tile:hover,
  .is-selected{
    .list__media__background {
      opacity: 1;
      transition: opacity 0.3s ease-out;
      
      &:before {
        background-color: rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease-out;
      }
    }
    
    .list__tile__title {
      color: #fff;
      transition: color 0.2s ease-out;
    }
  }
  
</style>
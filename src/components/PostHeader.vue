<template>
 <section>
    <div class="post__header u-text--center">
      <div class="container">
        <h1 class="heading--main">{{ title }}</h1>
        <p class="heading--kicker">{{ date }}</p>
      </div>
    </div>
 </section>
</template>


<script>
  export default {
    data() {
      return {
        social: ['fa-envelope', 'fa-facebook', 'fa-twitter', 'fa-rss']
      }
    },
    template: '#post-page',
    props: ['title', 'date'],
    methods: {
    	
    }
    
  }
</script>



<style lang="scss" scope>
   
  .post__header {
    background-color: #F4F4F4;
    padding: 25px 0 15px;
    position: relative;
    
    @media only screen and (min-width: 768px) {
      padding-top: 35px;
      padding-bottom: 35px;
    }
  }
  
  .heading--main {
    font-family: 'Questrial', sans-serif;
    font-size: 30px;
    font-weight: 300;
    line-height: 1.2em;
    color: #003553;
    margin-bottom: .4em;

    
    @media only screen and (min-width: 768px) {
      font-size: 40px;
    }  
  }

  .heading--kicker {
    font-family: 'Questrial', sans-serif;
    font-size: 12px;
    line-height: 1.3;
    color: #e0462a;
    
    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }  
  }
    
 
    
</style>
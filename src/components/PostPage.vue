<template>
  <transition name="slide">
    <article class="post">
      <div class="post__info-box">
        <aside class="post__info-aside">
          <div class="post__info-byline u-text--right">By {{ author }}</div>
          <div class="post__info-social">
            <a v-for="icon in social" href="#"><i v-bind:class="['fa', icon]" aria-hidden="true"></i></a>
          </div>
        </aside>
        <div class="post__info-img" :style="{ 'background-image': 'url(' + img + ')' }">
        </div>
        
      </div>
      <div class="post__content">
        <div class="container">
          
          <div v-html="desc"></div>
        </div>
      </div>
    </article>
  </transition>
</template>


<script>
  export default {
    data() {
      return {
        social: ['fa-envelope', 'fa-facebook', 'fa-twitter', 'fa-rss']
      }
    },
    template: '#post-page',
    props: ['title', 'author', 'date', 'desc', 'img'],
    methods: {
    	
    }
    
  }
</script>



<style lang="scss" scope>
   
   .post {
      opacity: 1;
      transition: opacity 0.3s ease-in;
   }
   
  .post__info-box {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    padding: 15px;
    

    
    @media (min-width: 768px) {
      flex-direction: row;
      
      border-bottom: solid 1px rgba(0, 0, 0, .12);
    }
  }
  
  .post__info-img {
    flex: 1 1 80%;
    max-width: 600px;
    position: relative;
    
    height: 250px;
    padding-bottom: 10px;
    background-size: cover;
    background-position: center center;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -20px;
      width: 100%;
      height: 100%;
      border-bottom: solid 1px rgba(0, 0, 0, .12);
    }
    
    
    @media (min-width: 768px) {
      flex-direction: row;
      height: 400px;

      &:after {
        content: none;
      }
    }
  }
  
  .post__info-aside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    
    margin-bottom: 20px;
    border-bottom: solid 1px rgba(0, 0, 0, .12);
    
    @media (min-width: 768px) {
      flex-direction: column;
      align-items: flex-end;
      
      margin-bottom: 0;
      margin-right: 15px;
      padding-right: 15px;
      border-bottom: none;
      border-right: solid 1px rgba(0, 0, 0, .12);
    }
  }
  
  .post__info-byline {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.2em;
    font-style: italic;
  }
  
  /* generally wouldn't do this, very quick and dirty, forgive me...
     ideally there would be an icon component and where you can pass 
     the name, color, size, etc (all with defaults)
  */
  .post__info-social {
    display: flex;
    width: 95px;
    justify-content: space-between;
    
    i {
      display: 1 1 auto;
      font-size: 20px;
    }
    
    a:nth-child(1) i {
      color: #bcbcbc;
    }
    
    a:nth-child(2) i {
      color: #3b5998;
    }
    
    a:nth-child(3) i {
      color: #55acee;
    }
    
    a:nth-child(4) i {
      color: #ff6600;
    }
    
    
  }
  
  .post__content {
    
    /* would adjust data rather then compound and increase specificity like this ideally*/
    table {
      width: 100% !important;
      color: #717171;
    }
    
  }
  
  
  
  /* was going to use key frames to show an animation, but Vue has some great functionality built in... so to save time...*/
  .slide-leave-active,
  .slide-enter-active {
    transition: 1s;
  }
  .slide-enter {
    transform: translate(100%, 0);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
    opacity: 0;
  }
 
    
</style>
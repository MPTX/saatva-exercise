<template>
  <v-app>
   
     <v-toolbar dark color="accent">
      <v-toolbar-title class="white--text">Saatva Sightings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click.stop="drawer = !drawer" dark color="white" class="hidden-md-and-up">View Articles <v-icon>list</v-icon></v-btn>
      
    </v-toolbar>
    <v-container fluid class="u-padding--none">
      <v-layout row wrap>
        <v-flex xs12>
          <post-header
          :title="postTitle"
          :date="postDate">
        </post-header>
        </v-flex>
      </v-layout>   
    </v-container>
    
    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 md4>
          
          <v-navigation-drawer
            fixed
            mobile-break-point="960"
            v-model="drawer"
            app
          >
            
            <div class="search">
              <v-text-field
              name="search"
              label="Search titles..."
              single-line
              append-icon="search"
              color="accent"
              v-model="search"></v-text-field>
            </div>
            
            <v-list two-line class="u-padding--none">
              <post-item 
                :title="item.title"
                :img="item.urlToImage"
                v-for="(item, index) in filteredList"
                :active="index === activeLiIndex"
                :index="index" 
                :key="item.title"
                @newactive="itemClicked(item, $event)"      
                ></post-item>
            </v-list>
            
          </v-navigation-drawer>
        </v-flex>
        
        <v-flex xs12 md8 >
         <post-page
          :title="postTitle"
          :author="postAuthor"
          :date="postDate"
          :img="postImg"
          :desc="postDesc">
        </post-page>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer :fixed="fixed" app>
      <span>&nbsp;</span>
    </v-footer>
  </v-app>
</template>




<script>
import axios from 'axios'
import PostItem from './components/PostItem.vue';
import PostPage from './components/PostPage.vue';
import PostHeader from './components/PostHeader.vue';

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  console.log(date);

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

export default {
  components: {
    PostItem,
    PostPage,
    PostHeader
  },
  data () {
    return {
      search: '',
      fixed: false,
      clipped: false,
      drawer: false,
      width: 500,
      'mobile-break-point': 968,
      items: [
        { icon: 'bubble_chart', title: 'Inspire' }
      ],
      miniVariant: false,
      title: 'Saatva Sightings',
      posts: [],
      postImg: '',
      postTitle: '',
      postAuthor: '',
      postDesc: '',
      postDate: '',
      activeLiIndex: 0,
      
    }
  },
  computed: {
    filteredList() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      });
    }
  },
  mounted(){
  	var vm = this;					    
    axios.get('https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json')
  		.then(function (response) {
  		  console.log(response.data.articles);
  		  
  		  var posts = response.data.articles
  		  
    		vm.posts = posts;
    		
    		vm.postImg = posts[vm.activeLiIndex].urlToImage;
        vm.postTitle = posts[vm.activeLiIndex].title;
        vm.postAuthor = posts[vm.activeLiIndex].author;
        vm.postDesc = posts[vm.activeLiIndex].long_description;
        vm.postDate = formatDate(new Date("" + posts[vm.activeLiIndex].publishedAt));
  		});
  },
  methods: {
    itemClicked: function(item, index) {
    	this.postImg = item.urlToImage;
      this.postTitle = item.title;
      this.postAuthor = item.author;
      this.postDesc = item.long_description;
      
      this.postDate = formatDate(new Date("" + item.publishedAt));
			
			this.activeLiIndex = index;
		
    }
  }
}
</script>



<style lang="scss" scope>
  
  .application.theme--light {
    background-color: #fff !important;  
    color: rgba(0,0,0,0.67);
  }
  
  .theme--light .navigation-drawer, 
  .application .theme--light.navigation-drawer {
    background-color: transprent;
  }
  
  
  /* navigation bar hacks - would generally use a watcher for event change but ran out of time */
  .navigation-drawer--fixed {
    
    transition: all .3s ease-in;
    
    @media (min-width: 960px) {
      transition: all.3s ease-out;
      position: relative !important;
    }
    
  }
  
  .navigation-drawer--close.navigation-drawer:not(.navigation-drawer--right) {
     @media (min-width: 960px) {
       -webkit-transform: translateX(0) !important;
      transform: translateX(0) !important;
    }
  }
  
  
  
  .search {
    padding: 0 10px;
    font-family: 'Questrial', sans-serif;
    
    @media (min-width: 960px) {
      padding: 0;
    }
  }
  
  
  /* usuallyI'd make a globale style sheet with vars and base styles like the ones below */
  /* base styling in BEM - layout and content are separate things!*/
  body,
  .application {
    font-family: 'Pragati Narrow', sans-serif;
  }
  
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2em;
    
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }  
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Questrial', sans-serif;
    color: #75468f;
  }
  
 
  /* layout */
  .l-container {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
  }
  
  /* generally there'd be a layout or utility to prevent needing "margin-bottom" applied to specific components, however for time purposes I added a margin to a few elements*/
  
  
  /* example BEM utilities (though they exist in most CSS frameworks*/
  
  .u-padding--none {
    padding: 0;
  }
    
  .u-text--center {
    text-align: center; 
  }
  
  .u-text--left {
    text-align: left; 
  }
  
  .u-text--right {
    text-align: right; 
  }
  
  

  
  
</style>
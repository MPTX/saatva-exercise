# Saatva Sightings

> An exercise in VUE and components

## To get it up and running locally

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

## Browsers 
As I used Vuetify to expedite the process, I was forced to forgo EI 11 and under without adding a polyfill. Chrome, Firefox, and Safari have been tested.


## Some thoughts
This was a fun project as I'd never really worked with VUE before; I've been a fan girl for a while but just haven't had the time to dig in, so thanks!

I thought VUE would be a good candidate to show how wonderfully it lends itself to components and patterns (much like react... but better in my opinion...) and Saatva's future pattern library.

Generally I'd never mix CSS naming methodologies, especically when integrating with a framework like Vuetify to expedite the process... but please note that I have a mix of BEM styling used in to the components to illustrate that methodology as I feel it also lends itself well to componetns and pattern libraries. 

The key concept to take away from VUE, React, BEM, and any other component-minded approach is to separate your content from your layout and design - they are distinct. Hopefully that's apparent in my code!


## If I had a bit more time
1. With VUE and Nuxt (routing), I wanted to add funcitonality for directly selecting an article on initial load (linking to the third article, for example). The hook is simple enough as I have a data value to initialize the first post.
2. I almost had time to finish the page transition animation - you can see the beginnings at the bottom of PostPage.vue
3. Some minor clean up like making sure all titles are consistent case (e.g. "GOOD MORNING..."), a bit more styling attention to the rendered articles, and cleaning up the navigation drawer transition.
4. I might have changed my mind on leaving the drawer open after selecting an item. Originally the UX rationality was to provide the user with the same experience they had on desktop to click between the articles easily, but I think the assumption the user would want that on mobile may be incorrect.
5. A quick unit test (using karma) for the axios call would have been ideal as well - sorry!

## Known Bug
In mobile the nav drawer may not close, but this may just occur when the server does a few hot reload cycles - I've seen inconsistent results Apologies for not correcting this in time!
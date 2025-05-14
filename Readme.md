# Carbon Native V2.2
**Latest Relase of Carbon Native**
## Installation
Add This in index.html
```html

<link rel="stylesheet" href="/css/beer.min.css">
<script type="module"src="/css/beer.min.js"></script>
  <!-- React and ReactDOM -->
  <script src="react/react.development.js"></script>
  <script src="react/react-dom.development.js"></script>

  <!-- Babel for JSX -->
  <script src="react/babel.min.js"></script>

  <!-- Load router.js first -->
 <script src="UIVE/router.js"></script>
 <script type="text/babel" src="/UIVE/skeleton.js"></script>
 <script src="/UIVE/getUrlInput.js"></script>
 <!--DOM Js-->

  <!-- Then load app.js with type="text/babel" -->
  
  
  

  <script type="text/babel"src="View/app.js"></script>

```

Add #app id of div in index.html
```html

<div id="#app"></div>
```
### app.js
You write code in app.js
App.js is main file for it.
#### Example of app.js
```javascript
animation.config({
  fade: `css and html`
 })
 
 function MainActivity(){
   return(
     <div>
     {/*Your Jsx*/}
     </div>
   )
 }
 function AnotherActivity(){
   return(
     <div>
     Another Activity
    
     </div>
   )
 }
 
 router.config({
  "":<MainActivity/>,
  default:<MainActivity/>,
  main:<MainActivity/>,
  notfound:<Error/>,,
  {/*others activists */}
  {/*Router Must Register you Activity unless routing is not work*/}
})


```
## onClick  to open Activity 
see onClick open page documention
[See Doc Example](https://carbonnativev22.netlify.app/?route=main)
## Router Activity
[See Router Example](https://carbonnativev22.netlify.app/?route=main)
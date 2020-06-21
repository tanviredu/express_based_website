# Vue Components



### what are the vue components are?



### this is a traditional vue instances 

```
var vm = new Vue({

	el="#app",
	data:{
	
	},
	methods:{
	
	
	}
})
```



### but in thee vue template there is no el property and they have their own mark up that is defined 

using their custom tag and then it  can use it on our page



a simple vue element

```

## this is the custom component
Vue.component('my-component',{
	template:'<div> a uselesss component </div>',

})



// this is the main component
new Vue({

	el:"#app"

})

// ehe you wil use the component inside the app div

<div id="app">
	<my-conponent> </my-component>
	
</div>

```



### the different is when the main Vue component is used the data property is defined by a JSON object but in the custom component it wil be inside a function

```
Vue.component('mu-component',{
	template: "<div> Useles component #{{sku}} </div>",
	data:function(){
		sku:"Tanvir"
	}

})
```



### there is another way of doing this using "props"



```
Vue.component('my-component',{
	props:['sku'],
	template: "<div> useless component #{{sku}} </div>"

});

// and it will be renders as this

<div id="app">
		<my-component sku="data"></my-component>
</div>

```





### but the best way is to make a separate .vue file and populate this like that



```
<template>
	<div> useless component #{{sku}} </div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
			sku:"data"
			}
		}
	
	}
</script>

<style>
	// you can add this too if you want
</style>


```





## make another vue components

```
<script>
	Vue.component('my-component',{
		template: '<div>\
				<img width="300" height="400" :src="imgSrc" :title="imgTitle">\
				// this slot will give you addtional
				// data ading powerd
				<slot> </slot> \
				</div>',
				
			props = ['date'],
			data:function(){
			return{
			imgSrc="",
			imgTitle="",
			
				};
			};
			
			created:function(){
				this.fetchApod();
			}
			,methods:{
				
				fetchApod:function(){
				
				}
			
			}
				
		
	
	})

</script>
```

//calling this

<a-pod> 
	<p>this will added to the slot</p>

</a-pod>


// another ostance with props
<a-pod date="12-12-12"> </a-pod>

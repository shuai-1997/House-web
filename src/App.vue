<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	font-size: .24rem;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	
}
img{
	width: 100%;
	vertical-align: middle;
	
}
ul{
	list-style: none;
}
#app{
	height: 100%;
}
body{
	height: 100%;
}
html{
	height: 100%;
}
</style>

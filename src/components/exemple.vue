<template>
<div>
    <div class="card">
    <p>{{fleurs.name}} {{fleurs.type}}</p>
    </div>
</div>
</template>

<script>

export default {
  name: 'exemple',
  props: {
      fleurs: String,
      msg: String,
      fullName: Object
  },
  data(){ 
      return{}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  border: 1px solid black;
  margin: 5px; 
  float: left;
}
</style>

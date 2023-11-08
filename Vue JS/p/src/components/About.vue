<template>
  <div class="contentTwo">
    <h2>This is About Page</h2>
    <button @[eventname]="count++">Click to Update the Value: {{ count }}</button>
  </div>
</template>

<script>
export default {
data(){
  return {
    count: 0,
    eventname: 'click',
  }
}
};
</script>

<style scoped>
.contentTwo {
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
button{
  padding: 15px 35px;
  font-size: 1.5em;
  font-weight: 500;
  border-radius: 35px;
  display: block;
background: darkslategray;
color: white;
}
</style>
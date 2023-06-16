<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <p>
    <input type="text" v-model="inputMsg" placeholder="Enter the Subject" />
    <button>Submit</button>
  </p>
  <p>{{ inputMsg  }}</p>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'HelloWorld',
  props: ['msg'],
  setup() {
    const inputMsg = ref('');

    return {
      inputMsg,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

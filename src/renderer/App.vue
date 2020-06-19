<template>
  <div id="app">
    <h1>HELLO WORD</h1>
    <navigation />
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import navigation from './componentsRenderer/navigation';

export default {
  name: 'PlatformAdmin',
  components: {
    navigation,
  },
  data: () => ({
  }),
  mounted() {
  },
};
</script>

<style>
</style>

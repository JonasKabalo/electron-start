<template>
  <div id="app">
    <navigation />
    <router-view />
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

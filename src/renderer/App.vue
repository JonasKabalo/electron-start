<template>
  <div id="app">
    <navigation />
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Navigation from './componentsRenderer/Navigation';

export default {
  name: 'PlatformAdmin',
  components: {
    Navigation,
  },
  data: () => ({
  }),
  mounted() {
  },
};
</script>

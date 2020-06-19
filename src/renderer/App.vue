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
.router-view {
  margin: 5px 5px;
  margin-left: 200px;
}
</style>

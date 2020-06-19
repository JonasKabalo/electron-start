<template>
  <div class="container-navigation">
    <b-navbar
      type="dark"
      variant="dark"
      class="navBar"
    >
      <b-navbar-nav>
        <b-nav-item to="/">DashBoard</b-nav-item>
        <b-nav-item to="/Invoices">Invoices</b-nav-item>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Home</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.navBar {
  width: 15%;
  position: fixed;
  height: 110vh;
  display: block;
  ul {
    flex-direction: column !important;
  }
}
</style>

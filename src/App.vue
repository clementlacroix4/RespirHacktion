<template>
  <div id="app">
    <b-navbar toggleable="md" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" class="ml-4">Accueil</b-nav-item>
        </b-navbar-nav>
        <!-- Center items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href='#'>LOGO</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href='#' class="mr-4" right>Mon compte</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 1);
}
</style>

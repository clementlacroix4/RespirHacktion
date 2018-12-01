<template>
  <div id="app">
    <b-navbar toggleable="md" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" class="ml-4">
            <b-row>
              <b-col lg="3">
                <img class="img-fluid" :src="indexLogo" />
              </b-col>
            </b-row>
          </b-nav-item>
        </b-navbar-nav>
        <!-- Center items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href='#'></b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href='#' class="mr-4" right>
            <b-row>
              <b-col lg="3" offset-lg="9">
                <img class="img-fluid" :src="accountLogo" />
              </b-col>
            </b-row>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="d-flex align-items-center justify-content-center">
      <p  style="margin-bottom: 0 !important; color: #068587; font-weight: bold">Aide aux Personnes Nécessitant une Evaluation aux Apnées du Sommeil</p>
    </div>
    <router-view class="h-100"/>
  </div>
</template>

<script>
import AccountLogo from '@/assets/account.png'
import IndexLogo from '@/assets/index.png'

export default {
  name: 'App',
  data: () => ({
    indexLogo: IndexLogo,
    accountLogo: AccountLogo
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 915px;
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 1);
}

.bg-info {
  background-color: #F2B134 !important
}
</style>

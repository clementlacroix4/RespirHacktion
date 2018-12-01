<template>
  <div>
    <div v-bind:style="{ 'background-image': 'url(' + indexBg + ')' }" class="h-100 background">
      <div class="h-100">
        <b-row class="h-100">
          <b-col lg="4" offset-lg="5" class="h-100 d-flex align-items-center">
              <div class="login p-3">
                <b-row>
                  <b-col lg="12">
                    <a href="#" v-on:click="showLogin" class="loginBtn">S'identifier</a>
                  </b-col>
                  <b-col lg="12">
                    <a href="#" v-on:click="showRegister" class="registerBtn">S'enregistrer</a>
                  </b-col>
                </b-row>
              </div>
          </b-col>
        </b-row>
      </div>
      <div class="welcomeContainer">
        <h1 class="title">Bienvenue</h1>
        <p class="textSize">Apneas, un site innovant pour créer un lien entre le patient, ses parents et son médecin.</p>
        <p class="textSize">Ce site vous permet de suivre l’évolution des informations de santé de votre enfant.</p>
        <h1 class="title">Conservation des données</h1>
        <p class="textSize text2">Nous vous informons que vos données personnelles seront conservées le temps nécessaire au suivi, au maximum pour une durée de 4 ans. Elles seront ensuite effacées automatiquement.  Vous pouvez cependant supprimer vous-même votre compte à parti de l’onglet compte.</p>

      </div>
      <b-modal ref="modalLogin" hide-footer title="S'identifier">
        <login />
      </b-modal>
    </div>
    <div>
      <b-modal ref="modalRegister" hide-footer title="S'enregistrer">
        <register />
      </b-modal>
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register'
import Login from '@/components/Login'
import IndexBg from '@/assets/index_bg.png'

export default {
  name: 'Index',
  components: {
    'register': Register,
    'login': Login
  },
  data: () => ({
    indexBg: IndexBg
  }),
  methods: {
    showLogin () {
      this.$refs.modalLogin.show()
    },
    showRegister () {
      this.$refs.modalRegister.show()
    }
  }
}
</script>

<style scoped>
.login {
  border: 2px dashed #fff;
}

.loginBtn {
  font-size: 2em;
  color: #fff !important;
}

.background {
  background-size:100% auto;
  background-repeat: no-repeat;
}

.registerBtn {
  font-size: 1em;
  color: #fff !important;
}

.welcomeContainer {
  margin-top: 20px;
  padding-left: 250px;
  padding-right: 250px;
  margin-bottom: 50px;
}

.textSize {
  font-size: 1.2em;
  line-height: 1.5em;
  margin-bottom: 0 !important;
  color: #000;
}

.text2 {
  margin-left: 270px;
  margin-right: 270px;
}

.title {
  font-weight: bold;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 30px;
  color: #ed553b;
}
</style>
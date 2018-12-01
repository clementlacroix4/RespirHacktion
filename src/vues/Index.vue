<template>
  <div style="display: flex">
    <div>
      <b-btn v-on:click="showLogin">S'identifier</b-btn>
      <b-modal ref="modalLogin" hide-footer title="S'identifier">
        <login />
      </b-modal>
    </div>
    <div>
      <b-btn v-on:click="showRegister">S'enregistrer</b-btn>
      <b-modal ref="modalRegister" hide-footer title="S'enregistrer">
        <register />
      </b-modal>
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register'
import Login from '@/components/Login'

export default {
  name: 'Index',
  components: {
    'register': Register,
    'login': Login
  },
  data () {
    return {
    }
  },
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

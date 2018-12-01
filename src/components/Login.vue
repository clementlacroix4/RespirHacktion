<template>
    <div>
      <b-form @submit="onSubmit">
        <b-form-group id="cmailGroup"
                      label="Adresse mail:"
                      label-for="cmailInput">
          <b-form-input id="cmailInput"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="E-mail">
          </b-form-input>
        </b-form-group>
        <b-form-group id="cpassGroup"
                      label="Mot de passe:"
                      label-for="cpassInput">
          <b-form-input id="cpassInput"
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="Votre mot de passe">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Se connecter</b-button>
      </b-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="lastNameGroup"
                    label="Nom:"
                    label-for="lastNameInput">
        <b-form-input id="lastNameInput"
                      type="text"
                      v-model="form.lastname"
                      required
                      placeholder="Entrer votre nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="nameGroup"
                    label="Prénom:"
                    label-for="nameInput">
        <b-form-input id="nameInput"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Entrer votre prénom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="telGroup"
                    label="Téléphone:"
                    label-for="telInput">
        <b-form-input id="telInput"
                      type="tel"
                      v-model="form.tel"
                      required
                      placeholder="N° de téléphone">
        </b-form-input>
      </b-form-group>
      <b-form-group id="townGroup"
                    label="Ville:"
                    label-for="townInput">
        <b-form-input id="townInput"
                      type="text"
                      v-model="form.town"
                      required
                      placeholder="Entrer votre ville">
        </b-form-input>
      </b-form-group>
        <b-form-group id="mailGroup"
                      label="Adresse mail:"
                      label-for="mailInput">
          <b-form-input id="mailInput"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="E-mail">
          </b-form-input>
        </b-form-group>
      <b-form-group id="passGroup"
                    label="Mot de passe:"
                    label-for="passInput">
        <b-form-input id="passInput"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Entrer un mot de passe">
        </b-form-input>
      </b-form-group>
      <b-form-group id="confirmPassGroup"
                    label="Confirmer mot de passe:"
                    label-for="confirmPassInput">
        <b-form-input id="confirmPassInput"
                      type="password"
                      v-model="form.cpassword"
                      required
                      placeholder="Confirmation">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Envoyer</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        lastname: '',
        name: '',
        tel: '',
        town: '',
        password: '',
        cpassword: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if (this.form.cpassword === this.form.password) {
        alert(JSON.stringify(this.form))
      }
    }
  }
}
</script>

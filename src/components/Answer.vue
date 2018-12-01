<template>
  <div>
    <div v-if="type==='input'">
      <b-row>
        <b-col lg="2">
          <h4>{{ label }}</h4>
        </b-col>
        <b-col>
          <b-form-input :id="'input_' + id" v-model.trim="out.input" :placeholder="inputPlaceholder"></b-form-input>
        </b-col>
      </b-row>
    </div>
    <div v-if="type==='checkbox'">
      <b-row>
        <b-col lg="4">
          <h4>{{ label }}</h4>
        </b-col>
        <b-col>
          <b-form-checkbox :id="'input1_' + id" v-model.trim="out.checked" label="test label"></b-form-checkbox>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  props: ['type', 'inputPlaceholder', 'label', 'out', 'id'],
  data: () => ({
  }),
  methods: {
    log: function () {
      console.log(this.out)
    }
  },
  created: function () {
  }
}
</script>

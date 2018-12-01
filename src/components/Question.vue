<template>
  <b-container class="q-container">
    <collapse :selected="false">
      <div slot="collapse-header">
        <b-row class="w-100">
          <b-col lg="2">
            <label>Question:</label>
          </b-col>
          <b-col lg="10">
            <h4>{{ data.questionText }}</h4>
          </b-col>
        </b-row>
      </div>
      <div slot="collapse-body">
        <div class="answers">
          <b-row>
            <b-col lg="6" class="p-4" :key="element.id" v-for="element in data.answers">
              <answer :type="element.type" :label="element.label" :inputPlaceholder="element.placeholder" :out="element.out" :id="element.id" />
            </b-col>
          </b-row>
        </div>
      </div>
    </collapse>
  </b-container>
</template>

<script>
import Collapse from 'vue-collapse'
import Answer from '@/components/Answer'

export default {
  name: 'Question',
  components: {
    'answer': Answer,
    'collapse': Collapse
  },
  props: ['data'],
  data: () => ({
    form: {
      r: []
    }
  })
}
</script>

<style scoped>
.q-container {
  padding: 30px;
}

.collapse:not(.show) {
  display: block !important;
}
</style>

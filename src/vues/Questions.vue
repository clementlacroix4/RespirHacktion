<template>
  <div>
    <div :key="element.id" v-for="element in data">
      <question :data="element" />
    </div>
  </div>
</template>

<script>
import Question from '@/components/Question'
import { api } from '@/api'

export default {
  name: 'Questions',
  components: {
    'question': Question
  },
  data: () => ({
    data: []
  }),
  created: function () {
    var answers = []
    api.getQuestions(1).then(res => {
      res.data.results
      res.data.results.forEach(rootElement => {
        rootElement.answers.forEach(element => {
          answers = []
          var obj = element
          obj.out = {}
          obj.out.checked = false
          obj.out.input = ''
          answers.push(obj)
        })
        var objRoot = rootElement
        objRoot.answers = answers
        this.data.push(objRoot)
      });
      console.log(this.data)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {

  }
}
</script>

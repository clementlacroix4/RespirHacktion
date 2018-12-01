<template>
  <div>
    <question :data="questionObj" />
  </div>
</template>

<script>
import Question from '@/components/Question'

export default {
  name: 'Questions',
  components: {
    'question': Question
  },
  data: () => ({
    questionObj: {
      questionText: 'Age de l\'enfant ?',
      answers: [
        {
          id: 1,
          type: 'checkbox',
          label: 'check me',
          out: {
            checked: false,
            input: ''
          }
        },
        {
          id: 2,
          type: 'checkbox',
          label: 'check me',
          out: {
            checked: false,
            input: ''
          }
        },
        {
          id: 3,
          type: 'input',
          label: 'fill me',
          placeholder: 'please',
          out: {
            checked: false,
            input: ''
          }
        },
        {
          id: 4,
          type: 'input',
          label: 'fill me',
          placeholder: 'please',
          out: {
            checked: false,
            input: 'azerty'
          }
        }]
    }
  }),
  created: function () {

  },
  methods: {

  }
}
</script>

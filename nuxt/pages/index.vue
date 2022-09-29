<template>
  <div>
    <button @click="throwError">Throw Error</button>
    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tutorial from '~/components/Tutorial.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Tutorial
  },
  methods: {
    throwError () {
      throw new Error('Uh Oh')
    }
  }
})
</script>

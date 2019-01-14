<template>
  <div class="home">
    <HelloWorld msg="hello"/>
    <button @click="getPipelines">getPipelines</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import grapql from '@/graphql'
import gql from 'graphql-tag'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  getPipelines() {
    grapql.query({
      query: gql`
        query findPipelines {
          pipelines {
            id
            confs
          }
        }
      `
    }).then(data => console.log(data))
      .catch(error => console.error)
  }
}
</script>

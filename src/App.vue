<template>
  <div id="app-content">
    <SseEditorApp/>
  </div>
</template>

<script>
import SseEditorApp from '../reactImports/editor/SseEditorApp.jsx'

export default {
  name: 'App',
  components: {
    SseEditorApp
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

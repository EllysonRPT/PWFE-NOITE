<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo de Filmes</h1>
    </header>
    <main>

      <CatalogoDeFilmes />
      <CatalogoDeLivros />
    </main>
  </div>
  <footer>
    <h1>Minha Página com Vue.js</h1>
  </footer>
</template>
  
<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
import CatalogoDeLivros from "./components/CatalogoDeLivros.vue";

export default {
  components: {
    CatalogoDeFilmes,
    CatalogoDeLivros
  },
};
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {

  background-color: #35495e;
  color: #eeafaf;
  padding: 10px 0;
}

footer {
  background-color: #35495e;
  color: #bcebbf;
  padding: 10px 0;
  bottom: 0;
  position: absolute;
  width: 100%;
}
</style>
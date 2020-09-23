<template>
  <div id="app">

      <b-navbar toggleable="md" type="dark" variant="danger">
        <b-container>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href="#">Nav</b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
          
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About</b-nav-item>
              <b-nav-item to="/grid">Grid</b-nav-item>
              <b-nav-item to="/cards">Cards</b-nav-item>
              <b-nav-item to="/formulario">Formulario</b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </b-container>
      </b-navbar>

    <b-container>
      <router-view/>      
    </b-container>  


  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

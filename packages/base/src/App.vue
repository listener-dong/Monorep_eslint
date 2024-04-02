<template>
  <div id="app">
    <div class="hello-world">Hello world</div>
    <div class="hello">ONLY</div>
    <div class="hello-scss">ONLY-SCSS</div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url('./app.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="scss" scoped>
@import url('./views/login.scss');

.hello {
  font-size: 50px;
  font-weight: bold;
  color: green;
}
</style>

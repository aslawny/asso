<template>
  <div id="app">
    <!-- header -->
    <div id="nav">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/tableau">Tableau</router-link>
            </li>
          </ul>
          <img src="./assets/logo.png" />
        </div>
      </nav>
    </div>
    <!-- current page -->
    <div>
      <router-view />
    </div>
    <!-- footer-->
    <nav navbar-expand-lg class="navbar fixed-bottom navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto text-center">
        <li class="nav-item"></li>
      </ul>
      <a class="navbar-brand" href="mailto:'john.smith@toto.com'"> Nous Contacter</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

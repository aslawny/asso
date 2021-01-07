<template>
  <div id="app">
    <!-- header -->
    <div id="nav">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarHeader">
          <ul class="navbar-center navbar-nav mr-auto mt-2 mt-lg-0">
            <li
              class="nav-item"
              v-on:click="setActive('/')"
              :class="{ active: isActive('/') }"
            >
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li
              class="nav-item"
              v-on:click="setActive('contact')"
              :class="{ active: isActive('contact') }"
            >
              <router-link class="nav-link" to="/contact">Reconversion</router-link>
            </li>
            <li
              class="nav-item"
              v-on:click="setActive('coaching')"
              :class="{ active: isActive('coaching') }"
            >
              <router-link class="nav-link" to="/coaching">Coaching</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- current page -->
    <div>
      <br /><br /><br />
      <img src="./assets/logo.png" />
      <br /><br />
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
  data() {
    return { activeItem: "/" };
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    },
  },
};
</script>

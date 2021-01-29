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
              <router-link class="nav-link" to="/contact">Contactez-Moi</router-link>
            </li>
            <li v-if="!admin" class="nav-item">
              <router-link class="nav-link" to="/login">Connexion</router-link>
            </li>
            <li
              v-if="admin"
              class="nav-item"
              v-on:click="setActive('admin')"
              :class="{ active: isActive('admin') }"
            >
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- current page -->
    <div>
      <br /><br /><br />
      <h4>La Shirley Family présente</h4>
      <h1>La Clinique RH</h1>
      <h4>Depuis 2018</h4>
      <router-view />
    </div>
    <!-- footer-->
    <nav navbar-expand-lg class="navbar navbar-bottom fixed-bottom navbar-foot">
      <ul class="navbar-footer-center navbar-nav mr-auto text-center">
        <li class="nav-item">
          <a class="navbar-brand" href=""> Copyright 2018</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",
  components: {},
  data() {
    return { activeItem: "/", user: "", admin: false };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.admin = true;
      }
    });
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

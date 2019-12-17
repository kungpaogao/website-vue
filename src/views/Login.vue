<template>
  <div>
    <button @click="checkAuth">Go</button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    checkAuth() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$router.push({ name: "home" });
        } else {
          this.signIn();
        }
      });
    },
  },
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Update Contact</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="contact.email" required />
        </div>
        <div class="form-group">
          <label>Aide</label>
          <select class="form-control" id="contactAide" v-model="contact.aide" required>
            <option>Reconversion</option>
            <option>Coaching</option>
          </select>
        </div>
        <div class="form-group">
          <label>Domaine</label>
          <select class="form-control" id="contactAide" v-model="contact.aide" required>
            <option>Reconversion</option>
            <option>Coaching</option>
          </select>
        </div>
        <div class="form-group">
          <label>Commentaire</label>
          <textarea
            class="form-control"
            id="contactComment"
            rows="3"
            v-model="contact.comment"
            required
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      contact: {},
    };
  },
  created() {
    let dbRef = db.collection("contacts").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.contact = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("contacts")
        .doc(this.$route.params.id)
        .update(this.contact)
        .then(() => {
          console.log("Contact successfully updated!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

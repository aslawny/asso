<template>
  <div>
    <div class="col-md-12">
      <div class="form-group">
        <input
          type="text"
          name="search"
          v-model="contactSearch"
          placeholder="Search Contact"
          class="form-control"
          v-on:keyup="searchContact"
        />
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Email</th>
            <th>Type d'aide</th>
            <th>Reconversion</th>
            <th>Commentaire</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.key">
            <td>{{ contact.email }}</td>
            <td>{{ contact.aide }}</td>
            <td>{{ contact.domaine }}</td>
            <td>{{ contact.commentaire }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: contact.key } }"
                class="btn btn-primary"
                >Edit
              </router-link>

              <button @click.prevent="deleteContact(contact.key)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      contacts: [],
      contactSearch: "",
    };
  },
  created() {
    this.fetchContact();
  },
  methods: {
    fetchContact: function () {
      db.collection("contacts").onSnapshot((snapshotChange) => {
        this.contacts = [];
        snapshotChange.forEach((doc) => {
          this.contacts.push({
            key: doc.id,
            email: doc.data().email,
            aide: doc.data().aide,
            domaine: doc.data().domaine,
            commentaire: doc.data().commentaire,
          });
        });
      });
    },
    deleteContact(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("contacts")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Contact deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    searchContact: function () {
      if (this.contactSearch == "") {
        this.fetchContact();
      }
      var searchedContact = [];
      for (var i = 0; i < this.contacts.length; i++) {
        var contactEMail = this.contacts[i]["email"].toLowerCase();
        if (contactEMail.indexOf(this.contactSearch.toLowerCase()) >= 0) {
          searchedContact.push(this.contacts[i]);
        }
      }
      this.contacts = searchedContact;
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>

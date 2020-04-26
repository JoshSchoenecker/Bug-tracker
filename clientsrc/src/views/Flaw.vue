<template>

  <div class="flaw container-fluid vh-100">
    <!-- NOTE Flaw Details -->
    <div class="row mt-5 pt-5">
      <div class="card w-75 m-auto shadow">
        <div class="col-6">
          <!-- Flaw Title -->
          <div class="card-title">
            <h4 class="mb-0 mt-4">Flaw</h4>
            <h1 class="pl-2" style="font-size:5rem">{{flaw.title}}</h1>
          </div>
          <!-- User who reported -->
          <div class="card-footer">
            <h5>
              <span class="pr-2" style="text-decoration: underline">Reported By</span>
              <h2 style="text-transform: uppercase">{{flaw.creatorEmail}}</h2>
            </h5>
          </div>
        </div>
        <!-- Status of Flaw -->
        <div class="col-6 text-right align-self-end pr-5">
          <h5>
            <span class="pr-3" style="text-decoration: underline">Status</span>
            <h2 style="text-transform: uppercase">{{flaw.closed}}</h2>
          </h5>
        </div>
        <!-- Description of Flaw -->
        <div class="col-11 border border-dark mb-3 mx-auto shadow">
          <h1>{{flaw.description}}</h1>
        </div>
        <!-- TODO make a button to close(not delete) the flaw -->
      </div>
    </div>

    <!-- NOTE Flaw Notes Header-->
      <div class="row card mx-4 pt-5 offsetMarg">
      <div class="col-12">
        <div class="row">
          <div class="col-2">
            <h2>Name</h2>
          </div>
          <div class="col-8">
            <h2>Message</h2>
          </div>
          <div class="col-2">
            <h2>Delete</h2>
          </div>
        </div>
      </div>

      <!-- Notes  are injected here -->
      <note v-for="note in notes" :noteData="note" :key="note._id" />
    </div>

      <!-- Create Note injected here -->
    <div class="row">
      <div class="col-6 mx-auto my-4 text-center">
        <CreateNote v-if="$auth.isAuthenticated" />
      </div>
      </div>
  </div>

</template>

<script>
import CreateNote from "../components/CreateNote.vue";
import Note from "../components/Note.vue";
export default {
  name: "flaw",
  data() {
    return {};
  },
  computed: {
    flaw() {
      return this.$store.state.activeFlaw;
    },
    notes() {
      return this.$store.state.notes;
      console.log("flawPage computed: ", this.$store.state.notes);
    }
  },
  methods: {},
  components: { Note, CreateNote },
  mounted() {
    this.$store.dispatch("getFlaw", this.$route.params.flawId);
    this.$store.dispatch("getNotes", this.$route.params.flawId);
  }
};
</script>

<style scoped>
.offsetMarg{
  position: ;
  margin-top: ;
}
</style>
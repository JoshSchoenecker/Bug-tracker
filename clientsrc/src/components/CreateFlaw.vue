<template>
  <div class="CreateFlaw">
    <!-- NOTE create a new flaw here -->
    <div class="row container-fluid m-auto">
      <div class="col-sm-12 col-lg-10 mx-auto card mb-5">
        <div class="card-title text-center border-bottom border-dark">
          <h2 class="textShadow">Log A Flaw Here</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="createFlaw">
            <input
              type="text"
              class="form-control"
              placeholder="Flaw Title..."
              v-model="newFlaw.title"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Flaw Description..."
              v-model="newFlaw.description"
            />
            <button
              v-if="$auth.isAuthenticated"
              type="button"
              class="btn btn-sm"
              @click="createFlaw()"
            >Post Flaw</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CreateFlaw",
  data() {
    return {
      newFlaw: {}
    };
  },
  computed: {},
  methods: {
    createFlaw() {
      this.$store.dispatch("createFlaw", this.newFlaw);
      debugger
      this.newFlaw = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
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

    <!-- NOTE Flaw Notes -->
    <div class="row">

    </div>
  </div>

</template>

<script>
export default {
  name: "flaw",
  data() {
    return {};
  },
  computed: {
    flaw() {
      return this.$store.state.activeFlaw;
    }
  },
  methods: {},
  components: {},
  mounted() {
    this.$store.dispatch("getFlaw", this.$route.params.flawId);
  }
};
</script>

<style scoped>
</style>
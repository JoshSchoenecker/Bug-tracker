<template>
  <div class="Flaw col-sm-12 col-lg-4">
    <div class="m-auto text-center">
      <dl>
        <dd>
          <div class="card shadow" @click="selectFlaw()">
            <!-- Flaw Title -->
            <div class="card-title mb-0 mx-5">
              <h4 style="font-family:Nunito Sans">The Flaw</h4>
              <hr />
            </div>
            <div class="card-body pt-0 border-dark">
              <h2>{{flawData.title}}</h2>
            </div>
            <!-- Flaw Creater -->
            <div class="card border border-dark mx-3 shadow-sm">
              <div class="card-title mb-0 mx-5 pt-2">
                <h5>Found By</h5>
                <hr />
              </div>
              <div class="card-body pt-0 shadow=sm border-dark">{{flawData.creatorEmail}}</div>
            </div>
            <!-- Status of Flaw -->
            <div class="row">
              <div class="col-6 border-right">
                <div class="card-title mb-0 mx-5 pt-3">
                  <h5>Status</h5>
                  <hr />
                </div>
                <div class="card-body pt-0 text-capitalize" v-if="flawData.closed == false">
                Open
                </div>
                <div v-else class="card-body pt-0 text-capitalize">
                  Closed
                </div>
              </div>
              <!-- Timestamp -->
              <div class="col-6 border-left">
                <div class="card-title mb-0 mx-5 pt-3">
                  <h5>Last Change</h5>
                  <hr />
                </div>
                <div class="card-body pt-0">{{flawData.updatedAt}}</div>
              </div>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>


<script>
export default {
  name: "Flaw",
  props: ["flawData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectFlaw() {
      this.$store.commit("setActiveFlaw", {});
      this.$router.push({
        name: "flaw",
        params: { flawId: this.flawData._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
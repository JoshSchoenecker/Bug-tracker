<template>
  <div class="note">
    <div class="border-top border-dark">
      <div class="row">
        <div class="col-2">{{noteData.creatorEmail}}</div>
        <div class="col-8">{{noteData.content}}</div>
        <div class="col-2">
          <button class="btn btn-lg" @click="deleteNote()" v-if="$auth.isAuthenticated">
            <span class="text-danger">
              <strong>X</strong>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "note",
  props: ["noteData"],
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    deleteNote(){
      if(confirm("Are you sure you want to remove this Note?")){
      this.$store.dispatch("deleteNote", this.noteData)
      }
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
<template>
  <div class="CreateNote">
    <form @submit.prevent="addNote()">
      <input type="text" class="form-control" placeholder="Add Note" v-model="newNote.content"/>
      <button type="submit" class="btn">Send</button>
  </form>
    </div>
</template>


<script>
export default {
  name: "CreateNote",
  data() {
    return {
      newNote: {}
    };
  },
  computed: {
    activeFlawId() {
      return this.$store.state.activeFlaw._id;
      console.log("activeFlawId: ",this.$store.state.activeFlaw._id);
    }
  },
  methods: {
      addNote(){
          this.newNote.flawId = this.activeFlawId
          this.$store.dispatch("addNote", this.newNote)
          this.newNote = {}
      },
  },
  components: {}
};
</script>


<style scoped>
</style>
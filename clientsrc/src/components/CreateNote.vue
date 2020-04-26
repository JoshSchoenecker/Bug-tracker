<template>
  <div class="CreateNote">
    <div>
      <input type="text" class="form-control" placeholder="Add Note" v-model="newNote.content" />
      <button type="submit" class="btn" @click="addNote()">Send</button>
    </div>
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
      return this.$store.state.activeFlaw.id;
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
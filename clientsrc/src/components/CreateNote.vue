<template>
  <div class="CreateNote">
    <form @submit.prevent="addNote()">
      <div class="form-group">
      <input type="text" class="form-control" placeholder="Add Note" v-model="newNote.content"/>
      </div>
      <span>
      <button type="submit" class="btn">Send</button>
      </span>
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

  },
  methods: {
      addNote(){
          this.newNote.flawId = this.$store.state.activeFlaw.id
          this.$store.dispatch("addNote", this.newNote)
          this.newNote = {}
      },
  },
  components: {}
};
</script>


<style scoped>
</style>
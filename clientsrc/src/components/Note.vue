<template>
  <div class="note">
    <div class="card-body border-top border-dark">
      {{noteData.creatorEmail}}
      {{noteData.content}}
      <!-- TODO delete button for a note -->
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
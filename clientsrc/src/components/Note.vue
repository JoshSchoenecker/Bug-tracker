<template>
    <div class="note">
    <div class="card-body border-top border-dark">
        <div class="row">
            <div class="col-12">
                {{noteData.creatorEmail}}
                {{noteData.content}}
                <!-- TODO delete button for a note -->
            </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    name: 'note',
    props: ["noteData"],
    data(){
        return {}
    },
    mounted(){
        this.$store.dispatch("getNotes", this.$route.params.noteId)
        console.log("getNotes Mounted:", this.$route.params.noteId)
        this.$store.dispatch("getFlaw", this.$route.params.flawId)
        console.log("getFlaw Mounted:", this.$route.params.flawId);
    },
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>
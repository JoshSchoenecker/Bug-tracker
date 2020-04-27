<template>
    <div class="note">
    <div class="card-body border-top border-dark">
        <div class="row">
            <div class="col-12">
                {{note.creatorEmail}}
                {{note.content}}
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
        this.$store.dispatch("getFlaw", this.$route.params.flawId)
    },
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>
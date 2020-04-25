<template>
    <div class="FlawsPage container-fluid">
        <hr/>
        <!-- NOTE create flaw comp -->
   <CreateFlaw v-if="$auth.isAuthenticated"/>
   <!-- NOTE flaws drawn here -->
   <div class="row">
       
           <flaw v-for="flaw in flaws" :flawData="flaw" :key="flaw.id" />
       
   </div>
    </div>
</template>


<script>
import CreateFlaw from '../components/CreateFlaw.vue'
import Flaw from '../components/Flaw.vue'
export default {
    name: 'FlawsPage',
    data(){
        return {
        }
    },
    mounted(){
        this.$store.dispatch('getFlaws')
    },
    computed:{
        flaws(){
            return this.$store.state.flaws
        },
    },
    methods:{
     
    },
    components:{CreateFlaw, Flaw, }
}
</script>


<style scoped>
.textShadow{
    text-shadow: 1px 3px 4px black;
}
</style>
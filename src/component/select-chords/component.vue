<template>
    <div>
        <h3> 
            Select Chords
        </h3> 
        <div>
            <button
                v-for='chord in allChords'
                :value='chord.name'
                @click='selectChord'
            >  
                {{ chord.name }}
            </button>
        </div> 
    </div> 
</template>

<script>
    export default {
        methods:{
            selectChord(e){
                this.$store.dispatch('selectChord', e.target.value )
            }
        },
        computed:{
            allChords(){
                return this.$store.getters.load_chords
            }
        } 
    }
</script>
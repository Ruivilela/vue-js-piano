<template>
    <div>
        <h3>
            Select key
        </h3>
        <div>
            <button
                @click='selectRoot' 
                v-for='note in chromaticScale'
                :value='note'
            >
                {{ note }}
            </button>
        </div>
    </div> 
</template>

<script>     
    export default {
        methods: {
            selectRoot(e){
                this.$store.dispatch('selectRoot', e.target.value)
            }
        },
        computed: { 
            chromaticScale(){
                return this.$store.getters.chromatic_scale
            }
        }
    }
</script>
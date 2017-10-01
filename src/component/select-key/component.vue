<template>
    <div>
        <h3>
            Select key
        </h3>
        <div class="row">
            <div class="col-md-12"> 
                <button
                    @click='selectRoot' 
                    v-for='note in chromaticScale'
                    :value='note'
                >
                    {{ note }}
                </button>
            </div>
        </div>
    </div> 
</template>

<script>     
    export default {
        methods: {
            selectRoot(e){
                this.$store.dispatch('pressKeys', e.target.value)
            }
        },
        computed: { 
            chromaticScale(){
                return this.$store.getters.chromatic_scale
            }
        }
    }
</script>
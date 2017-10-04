<template>
    <div>
        <h3> 
            Select Scale
        </h3>
            <select v-on:change='selectScale'>
                <option
                    v-for='scale in loadScales'
                    :value='scale.name'> 
                    {{ scale.name }}
                </option>
            </select>
        </div>
    </div> 
</template>

<script>
    export default {
        methods:{
            selectScale(e){
                this.$store.dispatch('selectScale', e.target.value )
            }
        },
        computed: {
            loadScales(){
                return this.$store.getters.load_all_scales
            }
        }
    }
</script>
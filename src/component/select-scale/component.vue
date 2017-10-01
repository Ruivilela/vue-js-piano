<template>
    <div>
        <h3> 
            Select Scale
        </h3>
            <select>
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
        computed: {
            loadScales(){
                return this.$store.getters.load_all_scales
            }
        }
    }
</script>
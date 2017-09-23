<template>
    <div v-on:click="play">    
    </div> 
</template>

<script>
    const piano = Synth.createInstrument('piano');

    export default {
        
        methods: {
            play(event) {
                piano.play(
                    event.target.id,
                    4,
                    2
                )
            }
        }
    }
</script>

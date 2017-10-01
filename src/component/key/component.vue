<template>
    <div @click="play">    
    </div> 
</template>

<script>
    const piano = Synth.createInstrument('piano');

    export default {
        props:[
            'pianoKey'
        ],
        methods: {
            play() {
                piano.play(
                    this.$props.pianoKey.note,
                    this.$props.pianoKey.octave,
                    2
                )
            }
        }
    }
</script>

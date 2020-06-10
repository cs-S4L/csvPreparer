<template>
    <div id="comp-textfield" class="input input-text" :class="errorClass" :error="error">
        <label :for="name">{{label}}</label>
        <span class="error">{{error}}</span>
        <div class="input-inner" :class="innerClass">
            <textarea :name="name" :cols="cols" :rows="rows" :value="value"></textarea>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        name :{},
        label :{},
        error :{},
        value :{},
        innerClass :{},
        rows: {default: 10},
        cols: {default: 30},
    },
    components: {},
    computed: {
        errorClass() {
            if (this.error) {
                return 'error';
            } else {
                return '';
            }
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>

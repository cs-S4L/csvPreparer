<template>
    <div id="comp-selectfield" class="input input-select" :class="errorClass" :error="error">
        <label :for="name">{{ label }}</label>
        <span class="error">{{ error }}</span>
        <div class="select-wrapper">
            <select :name="name">
                <option :value="option.value" v-for="option in options">{{ option.name }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {},
        label: {},
        error: {},
        options: {}
    },
    components: {},
    computed: {
        errorClass() {
            if (this.error) {
                return "error";
            } else {
                return "";
            }
        }
    },
    methods: {}
};
</script>

<style></style>

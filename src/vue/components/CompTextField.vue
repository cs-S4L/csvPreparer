<template>
    <div id="comp-textfield" class="input input-text" :class="errorClass" :error="error">
        <label :for="name">{{ label }}</label>
        <span class="error">{{ error }}</span>
        <div class="input-inner" :class="innerClass">
            <input :type="type" :name="name" :value="value" v-on:blur="updateValue($event)" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {},
        label: {},
        type: { default: "text" },
        error: {},
        value: {},
        innerClass: {},
        formatType: {}
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
    methods: {
        updateValue: function(e) {
            var newVal = e.target.value;
            e.target.value = newVal;
            this.$emit("input", newVal);
        }
    }
};
</script>

<style></style>

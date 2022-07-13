<template>
    <div class="footer">
        <p class="p-footer"></p>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "FooterComponent",
    setup() {},
});
</script>

<style scoped lang="scss">
.footer{
    position: absolute;
    bottom: 0;  
    left: 0;
    background-color: $color-principal;
    color: white;
    width: 100%;
}
.p-footer{
    padding: 0.5%;
}
</style>

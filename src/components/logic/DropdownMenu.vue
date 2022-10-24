<!-- This used for dropdown-menu -->
<template>
    <div class="item" @mouseleave="active = false">
        <!-- <div @mouseover="here = true" @mouseleave="here = false"> -->
            <div @mouseover="active = true" class="button">
                <slot name="button"></slot>
            </div>
            <div v-if="active" @mouseleave="active = false" class="dropdown-menu">
                <slot name="dropdown-menu"></slot>
            </div>
        </div>
</template>

<style scoped>
    * {
	--natural: #ffffff;
	--primary: #024F94;
    --menu-active : #005999;
	--accent: #132F66;
	--base: #000000;
    --test: #FF0000;
    }
    
    /* Dropdown menu styles */
    .dropdown-menu {
        border: 0.25vw solid var(--primary);
        width: 10vw;
        position: absolute;
        z-index: 1;
        /* margin-left: 2vw; */
        /* margin-top: 3vw; */
        /* background-color: red; */
        /* padding-left: 0.5vw; */
        text-align: left;
        font-size: 1vw;
        color: var(--menu-active);
        font-weight: 400;
        letter-spacing: 0.025vw;
        transition: 0.25s;
    }

</style>

<script>
    export default {
        data () {
            return {
                active : false,
            }
        }
    }

</script>
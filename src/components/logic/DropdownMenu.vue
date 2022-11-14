<!-- This used for dropdown-menu -->
<template>
    <div class="item" @mouseleave="active = false">
            <div @mouseover="active = true" class="button">
                <slot name="button"></slot>
            </div>
            <div v-if="active" @mouseleave="active = false" class="dropdown-menu fade-in">
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

@keyframes fade-in {
    from {
        opacity : 0;
    } to {
        opacity: 1;
    }
}
.fade-in {
    animation-name: fade-in;
    animation-duration: 0.2s;
}
/* Dropdown menu styles */
.dropdown-menu {
    border: 0.25vw solid var(--primary);
    width: 12vw;
    position: absolute;
    z-index: 2;
    text-align: left;
    font-size: 1.2vw;
    color: var(--menu-active);
    font-weight: 400;
    letter-spacing: 0.025vw;
    transition: 0.25s;
    box-shadow: 0px 0.272vw 1.02vw rgba(0, 0, 0, 0.12), 0px 0.408vw 0.408vw rgba(0, 0, 0, 0.2);
}

@media (max-width: 760px) {
    .dropdown-menu {
        font-size: 2vw;
        width: 15vw;
    }
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
Footer
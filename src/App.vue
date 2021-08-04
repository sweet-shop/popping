<template>
<LeftMenu />
<MdEdit />
</template>
<script>
import LeftMenu from '@component/left-menu';
import MdEdit from '@component/md-edit';
export default {
    name: 'App',
    components: {
        LeftMenu,
        MdEdit
    }
};
</script>

<style lang="scss">
body {
    height: 100vh;
    margin: 0;
    overflow-x: hidden;
}
#app {
    display: flex;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

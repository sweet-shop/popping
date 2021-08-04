<template>
<el-row :gutter="10" class="container">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <LeftMenu />
    </el-col>
</el-row>
</template>
<script>
import LeftMenu from '@component/left-menu';
export default {
    name: 'App',
    components: {
        LeftMenu
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
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .container {
        height: 100%;
    }
}
</style>

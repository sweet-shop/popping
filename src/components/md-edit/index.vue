<template src="./index.tpl.html"></template>
<script>
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';
export default {
    name: 'mdEdit',
    mounted() {
        this.contentEditor = new Vditor('md-edit',
            {
                height: window.innerHeight - 3,
                toolbarConfig: {
                    pin: true
                },
                cache: {
                    enable: false,
                },
                icon: 'material',
                after: () => {
                    const val = 'No No No 👎 还花钱？多么不极客~ 放在第三方？就没想过哪天被删除了？或者不继续运营了？你的知识财富岂不是付之东流😲';
                    this.contentEditor.setValue(val);
                }
            });
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>

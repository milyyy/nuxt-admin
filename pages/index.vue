<template>
    <div :class="['app-wrapper', opend ? 'hideSidebar' : 'openSidebar']">
        <Sidebar class="sidebar-container" />
        <div class="main-container">
            <div :class="{ 'fix-header': isFixed }">
                <Navbar />
            </div>
            <AppMain />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
      console.log(this.$store.state);
    },
    computed: {
        isFixed() {
            return this.$store.state.app.isFixed;
        },
        opend() {
            return this.$store.state.collapse.sidebar.opened;
        }
    },
}
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    clear: both;
}
</style>

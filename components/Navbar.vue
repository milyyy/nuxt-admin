<template>
    <div class="navbar">
        <div class="icon">
            <i class="fold el-icon-s-fold" @click="collapse"></i>
        </div>
        <div class="dropdown-menu">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-avatar
                        class="avatar"
                        shape="square"
                        :size="34"
                        :src="squareUrl"
                    />
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
						<a href="https://github.com/milyyy" target="_blank">Github</a>
					</el-dropdown-item>
                    <el-dropdown-item>注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            squareUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }
    },
    methods: {
        collapse() {
            this.$store.dispatch('collapse/toggleSidebar')
        },
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.icon {
    float: left;
    width: 50px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: rgba(0, 0, 0, 0.025);
    }
}
.dropdown-menu {
    float: right;
    padding-right: 10px;
    .avatar {
        margin-top: 7px;
    }
}
</style>
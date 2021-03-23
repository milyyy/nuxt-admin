// 使用方式 $store.state.app.xxx
const state = () => ({
	isFixed: false
})

const mutations = {
	setFixed(state, val) {
		state.isFixed = val;
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
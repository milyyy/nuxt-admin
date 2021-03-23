// 使用方式 $store.state.app.xxx
const state = () => ({
	user: {
		avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
		token: 'abc',
		username: 'milyyy',
		passworld: '123',
		mobile: '183****990'
	}
})

const mutations = {
	// SET_AVATAR(state, val) {
	// 	state.avatar = val;
	// },
	SET_USER(state, val) {
		state.user = val; // 包括token
	}
}

const actions = {
	login({ commit }, userInfo) {
		const {username, passworld} = userInfo;
		return new Promise((resolve, reject) => {
			this.login({ name: username, pass: passworld}).then(res => {
				const { data } = res;
				commit('SET_USER', data.user);
				resolve();
			}).catch(err => {
				reject(err);
			});
		});
	},
	logout({ commit, state }) {
		return new Promise((resolve, reject) => {
			logout(state.user.token).then(() => {
				Cookies.remove(state.user.token);
			})
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
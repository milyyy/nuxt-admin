// 使用方式 $store.state.collapse.xxx
import Cookies from "js-cookie";

const state = {
	sidebar: {
		opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
	}
}

const getters = {
	opend: state => {
		return state.sidebar.opend;
	}
}

const mutations = {
	TOGGLE_SIDEBAR: state => {
		state.sidebar.opened = !state.sidebar.opened;
		if (state.sidebar.opened) {
			Cookies.set('sidebarStatus', 1)
		} else {
			Cookies.set('sidebarStatus', 0)
		}
	}
}

const actions = {
	toggleSidebar({commit}) {
		commit('TOGGLE_SIDEBAR')
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
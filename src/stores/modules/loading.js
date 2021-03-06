import { RegisterMutation } from "@/stores/action.js"

export default {
  namespaced: true,
  state: () => {
    return {
      loading: false,
    }
  },
  mutations: {
    [RegisterMutation.LOADER.SHOW]: (state) => {
      state.loading = true
    },
    [RegisterMutation.LOADER.HIDE]: (state) => {
      state.loading = false
    },
  }
}

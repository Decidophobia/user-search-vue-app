import mutations from '../mutations';
import api from '../../plugins/axios';

const { GET_USERS } = mutations;

const usersStore = {
  namespaced: true,
  state: {
    users: null,
  },
  getters: {
    getUsers: (state) => state.users
  },
  mutations: {
    [GET_USERS](state, value) {
      state.users = value;
    },
  },
  actions: {
   
    async fetchGetUsers({ commit }, name) {
      const {
        data: { items: users },
      } = await api.get(`search/users?q=${name}`);
      commit(GET_USERS, users);
      return users
    },
  },
};

export default usersStore;

import mutations from '../mutations';
import api from '../../plugins/axios';

const { GET_USERS, SET_USERS } = mutations;

const usersStore = {
  namespaced: true,
  state: {
    users: null,
    usersPrev: [],
  },
  getters: {
    getUsers: (state) => state.users,
    getUsersPrev: (state) => state.usersPrev,
  },
  mutations: {
    [GET_USERS](state, value) {
      state.users = value;
    },
    [SET_USERS](state, value) {
      state.usersPrev = value;
    },
  },
  actions: {
    async fetchGetUsers(
      { commit },
      { name, sortType, order, itemsPerPage, pageNumber }
    ) {
      const {
        data: { items: users },
      } = await api.get(
        `search/users?q=${name} in:login&sort=${sortType}&order=${order}&per_page=${itemsPerPage}&page=${pageNumber}`
      );
      commit(GET_USERS, users);
      const usersPrev = users.map((user) => {
        return {
          avatar: user.avatar_url,
          login: user.login,
          id: user.id,
          gitHub: user.html_url,
        };
      });
      commit(SET_USERS, usersPrev);
      return users;
    },
  },
};

export default usersStore;

import mutations from '../mutations';
import api from '../../plugins/axios';

const { GET_USERS, SET_USERS, GET_TOTAL_RESULTS } = mutations;

const usersStore = {
  namespaced: true,
  state: {
    users: null,
    usersPrev: [],
    totalResults: 0,
  },
  getters: {
    getUsers: (state) => state.users,
    getUsersPrev: (state) => state.usersPrev,
    getTotalResults: (state) => state.totalResults,
  },
  mutations: {
    [GET_USERS](state, value) {
      state.users = value;
    },
    [SET_USERS](state, value) {
      state.usersPrev = value;
    },
    [GET_TOTAL_RESULTS](state, value) {
      state.totalResults = value;
    },
  },
  actions: {
    async fetchGetUsers(
      { commit },
      { name, sortType, order, itemsPerPage, pageNumber }
    ) {
      let {
        data: { items: users, total_count: totalResults },
      } = await api.get(
        `search/users?q=${name} in:login&sort=${sortType}&order=${order}&per_page=${itemsPerPage}&page=${pageNumber}`
      );
      if (totalResults > 1000) totalResults = 1000;
      commit(GET_USERS, users);
      commit(GET_TOTAL_RESULTS, totalResults);
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

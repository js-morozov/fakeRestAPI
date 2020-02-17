export const state = () => ({
    users: []
})

export const getters = {
    users: state => state.users,
    userNames: state => state.users.map(user => user.name)
}

export const actions = {
    async fetchUsers({commit}) {
        try{
            const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
            commit('setUsers', users)
        } catch (e) {
            throw (e)
        }
    },
    getUserIdByName({state}, name) {
        return state.users.filter(user => user.name === name)[0].id
    }
}

export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}
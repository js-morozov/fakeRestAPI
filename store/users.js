export const state = () => ({
    users: []
})

export const getters = {
    users: state => state.users
}

export const actions = {
    async fetchUsers({commit}) {
        try{
            const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
            commit('setUsers', users)
        } catch (e) {
            throw (e)
        }
    }
}

export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}
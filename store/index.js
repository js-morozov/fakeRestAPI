export const actions = {
    async nuxtServerInit({dispatch}) {
        await dispatch('users/fetchUsers')
        await dispatch('posts/fetchPosts')
    }
}
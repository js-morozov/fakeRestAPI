export const state = () => ({
    posts: []
})

export const getters = {
    posts: state => state.posts
}

export const actions = {
    async fetchPosts({commit}) {
        try{
            const posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
            commit('setPosts', posts)
        } catch (e) {
            throw (e)
        }
    }
}

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    addPost(state, post) {
        state.posts.push(post)
    }
}
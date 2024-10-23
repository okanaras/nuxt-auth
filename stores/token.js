export const useTokenStore = defineStore('token', {
    state: () => ({
        token: null,
        loggedIn: false
    }),

    persist: true, // sayfa yenilendiğinde bile verileri tutar

    getters: {
        getToken: (state) => state.token,
        getStatus: (state) => state.loggedIn,
    },

    actions: {
        setToken(token) {
            this.token = token;
            this.loggedIn = true;
        },

        removeToken() {
            this.$reset();
        },
    },
})
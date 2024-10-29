import {useTokenStore} from "~/stores/token.js";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {},
    }),

    persist: {
        paths: ['user'],
    },

    getters: {
        getUser: (state) => state.user,
    },

    actions: {
        async login(formData) {
            try {
                const {data} = await $fetch("https://okanaras.com.tr/api/login", {
                    method: 'POST',
                    body: {...formData},
                });

                this.commonSetter(data);
            } catch (error) {
                throw error;
            }
        },

        async register(formData) {
            try {
                const {data} = await $fetch("https://okanaras.com.tr/api/register", {
                    method: 'POST',
                    body: {...formData},
                });
                this.commonSetter(data);
            } catch (error) {
                throw error;
            }
        },

        async logout() {
            const tokenStore = useTokenStore();
            try {
                const res = await $fetch("https://okanaras.com.tr/api/logout", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${tokenStore.getToken}`,
                    }
                });

                tokenStore.removeToken();
            } catch (error) {
                throw error;
            }
        },

        commonSetter(data) {
            const tokenStore = useTokenStore();
            tokenStore.setToken(data.token);
            this.user = data.user;
            return navigateTo('/dashboard');
        },
    }
});
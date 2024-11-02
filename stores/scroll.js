import {defineStore} from 'pinia';

export const useScrollStore = defineStore('scroll', {
    state: () => ({
        scrolled: false,
    }),

    actions: {
        setScrolled(value) {
            this.scrolled = value;
        },
    },
});

// store.js
import { writable } from 'svelte/store';

export const user = writable({
    email: null,
})

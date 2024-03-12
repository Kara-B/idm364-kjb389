// src/lib/cartStore.js
import { writable } from 'svelte/store';

function getInitialCart() {
    if (typeof window !== 'undefined') {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            return JSON.parse(storedCart);
        }
    }
    return [];
}
const cart = writable(getInitialCart());

if (typeof window !== 'undefined') {
    cart.subscribe((currentCart) => {
        localStorage.setItem('cart', JSON.stringify(currentCart));
    });
}
export { cart };

import { selector, selectorFamily } from 'recoil'

import { authState } from './atom'

export const handleLogin = selector({
    key:'handleLogin',
    get: () => console.log("object"),
    set: async (payload) => ({set}) => {
        console.log(`payload`, payload)
    }
})
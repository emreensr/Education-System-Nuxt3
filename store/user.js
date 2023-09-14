import { defineStore } from "pinia";
import { notify } from 'notiwind'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: null,
            details: null
        }
    },
    actions: {
        setUserToken(payload) {
            this.token = payload
        },
        setUserDetails(payload , isLogin = false , isReset = false) {
            console.log(payload);
            this.details = payload;
            if(isLogin) {
                notify(
                    {
                      group: "central",
                      title: `Hoşgeldiniz, ${payload.first_name}`,
                      text: "Başarıyla giriş yaptınız!",
                    },
                    4000
                  );
            } 
            if(isReset) {
                notify(
                    {
                      group: "central",
                      title: "Das Passwort wurde zurückgesetzt.",
                      text: "Zurücksetzen des Passworts erfolgreich",
                    },
                    4000
                  );
            }
        },
        async signOut() {
            await navigateTo('/')
            this.token = null;
            this.details = null;
        }
    },
    getters: {
        getToken(state) {
            return state.token
        },
        getUserDetails(state) {
            return state.details
        } 
    },
    persist: true
});
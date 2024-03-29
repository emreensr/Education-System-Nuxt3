import { defineStore } from "pinia";
import { notify } from 'notiwind'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: null,
            details: null,
        }
    },
    actions: {
        setUserToken(payload) {
            this.token = payload
        },
        setUserDetails(payload , isLogin = false , isReset = false) {
            this.details = payload;
            if(isLogin) {
                notify(
                    {
                      group: "central",
                      title: `Hoşgeldiniz, ${payload.user.first_name}`,
                      text: "Başarıyla giriş yaptınız!",
                    },
                    4000
                  );
            } 
            if(isReset) {
                notify(
                    {
                      group: "central",
                      title: "Başarılı!",
                      text: "Şifre başarıyla güncellendi!",
                    },
                    4000
                  );
            }
            if (!isLogin && !isReset) {
                notify(
                    {
                      group: "central",
                      title: "Başarılı!",
                      text: "Değişiklikler kaydedildi.",
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
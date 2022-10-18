import { Storage } from '@ionic/storage';

const store = new Storage();
store.create();

const TOKEN_KEY = "access_token";
const USER = "user"
const BUSINESS_ID = "business_id"

const TokenService = {
    async getToken() {
        return await store.get(TOKEN_KEY);
    },
    async getUser() {
        return await store.get(USER);
    },
    async getBusinessID(){
        return await store.get(BUSINESS_ID);
    },
    async updateUserBusiness(business){
        // add user business on registering business
        let user = await store.get(USER)
        business.address = [] // initializing empty address
        user.business.push(business)
        store.remove(USER)
        store.set(USER, user)
        store.set(BUSINESS_ID, business.id)
    },
    async updateAddress(address){
        let user = await store.get(USER)
        user.business[0].address.push(address)
        store.remove(USER)
        store.set(USER, user)
    },
    async saveToken(data) {
        // save token and user data
        await store.set(TOKEN_KEY, data.token);
        await store.set(USER, data.user);
        if (data.user.business.length === 1){
            store.set(BUSINESS_ID, data.user.business[0].id)
        }
    },
    async EraseData() {
        await store.remove(USER);
        await store.remove(TOKEN_KEY);
        await store.remove(BUSINESS_ID);
    }
}

export default TokenService

// const TOKEN_KEY = "access_token";
// const REFRESH_TOKEN_KEY = "refresh_token";
// const USER_ID = "user_id"
// const USER_MOBILE = "mobile_no"
// const USER_BUSINESS = "business"
// // const BUSINESS_DATA = "business_data"
// import { Storage } from '@ionic/storage';

// export default class Storage1 {
//     constructor(private storage: Storage) { }
// }

// const TokenService = {
    
//     getToken() {
//         return localStorage.getItem(TOKEN_KEY);
//     },

//     getUser() {
//         return localStorage.getItem(USER_DATA);
//     },

//     saveToken(data) {
//         console.log(data.user, "daasa")
//         localStorage.setItem(TOKEN_KEY, data.token);
//         localStorage.setItem(USER_DATA, data.user);
//     },

//     removeToken() {
//         localStorage.removeItem(TOKEN_KEY);
//     },

//     getRefreshToken() {
//         return localStorage.getItem(REFRESH_TOKEN_KEY);
//     },

//     saveRefreshToken(refreshToken) {
//         localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
//     },

//     removeRefreshToken() {
//         localStorage.removeItem(REFRESH_TOKEN_KEY);
//     }
// };

// // export default TokenService
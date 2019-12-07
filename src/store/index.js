import Vue from 'vue'
import Vuex from 'vuex'
import {request} from 'network/request'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    currentUser: {
      get voteCode() {
        return localStorage.getItem("voteCode");
      },
      get unitName() {
        return localStorage.getItem("unitName");
      },
      get voteType() {
        return localStorage.getItem("voteType");
      },
      get UserToken() {
        return localStorage.getItem("user_token");
      }
    },
    /*判断登录状态*/
    ifLogin: false
  },
  mutations:{
    setLoginTrue(state) {
      state.ifLogin = true;
    },
    setLoginFalse(state) {
      state.ifLogin = false;
    },
    setUser(state, { voteCode, unitName, voteType, user_token}) {
      // 在这里把用户名和token保存起来
      localStorage.setItem("voteCode", voteCode);
      localStorage.setItem("unitName", unitName);
      localStorage.setItem("voteType", voteType);
      localStorage.setItem("user_token", user_token);
    },
    clearUser(state) {
      localStorage.clear();
    }
  },
  actions:{
    userLogin(context, { voteCode, router }) {
      request({
        method: "post",
        url: "/login",
        params: {
          voteCode: voteCode
        }
      }).then(res => {
        const voteType = res.body.voteTypeName.substring(res.body.voteTypeName.indexOf("("),res.body.voteTypeName.length);
        context.commit("setUser",{
          voteCode: res.body.voteCode,
          unitName: res.body.unitName,
          voteType: voteType,
          user_token: res.body.voteCodeToken,
        })
        router.replace({ path: "/mainPage" });
        context.commit("setLoginTrue")
      }).catch(err => {

      })
     
    },
    loginOUt(context, { router }) {
      request({
        method: "post",
        url: "/loginOut",
        params: {
          voteCode: this.state.currentUser.voteCode
        }
      }).then(res => {
        router.replace({ path: "/" });
        context.commit("clearUser");
      })
    }
  },
  getters:{
    // getSign: state => {
    //   return state.ifSign;
    // },
  },
  modules:{

  }
})

export default store

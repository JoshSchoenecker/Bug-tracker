import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 15000,
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    profile: {},
    flaws: [],
    flaw: {},
    activeFlaw: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setFlaws(state, flaws) {
      state.flaws = flaws;
    },
    setActiveFlaw(state, flaw) {
      state.activeFlaw = flaw;
    },
  },
  actions: {
    // #region -- Flaws --
    async getFlaws({ commit }) {
      try {
        let res = await api.get("flaws");
        commit("setFlaws", res.data);
      } catch (error) {
        console.error("Get Flaws has failed:", error);
      }
    },
    async createFlaw({ dispatch }, flawData) {
      try {
        let res = await api.post(`flaws/${flawData}`);
        console.log("createFlaw", res);
        dispatch("getFlaws");
      } catch (error) {
        console.error("Create Flaw has failed:", error);
      }
    },
    async getFlaw({ commit }, flawId) {
      try {
        let res = await api.get(`flaws/${flawId}`);
        console.log("store-getFlaw: ", res);
        commit("setActiveFlaw", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    // #endregion
    //#region -- Notes --
    
    //#endregion
    // #region -- auth0 --
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion
  },
});

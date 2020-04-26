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
    notes: [],
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
    setNotes(state, notes){
      state.notes = notes
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
        debugger
        await api.post('flaws', flawData);
        dispatch("getFlaws");
      } catch (error) {
        console.error("Create Flaw has failed:", error);
      }
    },
    async getFlaw({ commit }, flawId) {
      try {
        let res = await api.get(`flaws/${flawId}`);
        commit("setActiveFlaw", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    // #endregion
    //#region -- Notes --
    async getNotes({commit}, flawId){
      try {
        let res = await api.get('flaws/', flawId)
        console.log("store-getNotes: ", res);
        commit('setNotes', res.data)
      } catch (error) {
        console.error("Get Notes has failed: ", error);
      }
    },
    async addNote({dispatch}, noteId){
      try {
        // TODO returning weird data
        let res = await api.post('notes/', noteId.data)
        console.log("addNote: ", res);
        dispatch("getNotes", noteId.flawId)
      } catch (error) {
        console.error(error);
      }
    },
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

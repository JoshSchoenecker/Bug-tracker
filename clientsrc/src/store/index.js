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
    setFlaw(state, flaw){
      state.flaw = flaw
    },
    setActiveFlaw(state, flaw) {
      state.activeFlaw = flaw;
    },
    setNotes(state, notes) {
      state.notes = notes;
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
        await api.post("flaws", flawData);
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
    async deleteFlaw({ dispatch }, flawId) {
      try {
        await api.delete('flaws/' + flawId)
        dispatch('getFlaws')
      } catch (error) {
        console.error(error);
      }
    },
    async closeFlaw({ commit, dispatch}, flaw){
      try {
        let res = await api.put('flaws/' + flaw.id)
        commit('setFlaw', res.data)
      } catch (error) {
        console.error();
      }
    },
    // TODO edit now working for some reason backend?
    async editFlaw({commit, dispatch}, flaw){
      try {
        let res = await api.put('flaws/' + flaw.id)
        dispatch('getFlaw', flaw.id)
        commit('setFlaw', res.data)
      } catch (error) {
        console.error(error);
      }
    },
    // #endregion
    //#region -- Notes --
    async getNotes({ commit }, flawId) {
      try {
        let res = await api.get("flaws/" + flawId + "/notes");
        console.log("store-getNotes: ", res.data);
        commit("setNotes", res.data);
      } catch (error) {
        console.error("Get Notes has failed: ", error);
      }
    },
    async addNote({ dispatch }, noteId) {
      try {
        // TODO returning weird data
        debugger
        let res = await api.post("notes/", noteId);
        console.log("addNote: ", res);
        dispatch("getNotes", noteId.flawId);
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

import Vue from "vue";

export const state = () => ({
    company: [],
  })

export const mutations = {
    addNewCompany(state,newCompany) {
        state.company.push(newCompany);
    },
    changeAddress(state,newAddress){
        const index = state.company.findIndex(item => item.id === newAddress.id);
        Vue.set(state.company, index, { ...state.company[index] ,address: newAddress.newAddress  })
    },
    deleteCompany(state,id){
        state.company =  state.company.filter(t=>t.filter !== id)
    }
}
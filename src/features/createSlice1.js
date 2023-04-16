import { createSlice } from "@reduxjs/toolkit";
const KEY_LOCAL = 'resCreate';
const initState=localStorage[KEY_LOCAL]?JSON.parse(localStorage[KEY_LOCAL]) : {
    createRes: []
}

const createSlice1 = createSlice({
    name:'create',
    initialState:initState,
    reducers:{
        addNewRes: (state, action) => {
            state.createRes.push(action.payload.createItem);
            saveToLocal(state);
        },
        // updateRes: (state, action) => {
        //     state.createRes = [];
        //     saveToLocal(state);
        // },
        deleteRes: (state, action) => {
            state.createRes = state.createRes.filter(
                (item) => item.id !== action.payload.delId
            );
            saveToLocal(state);
        }
    }
})

const saveToLocal = (state) => {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(state))
}

export const {addNewRes,deleteRes} = createSlice1.actions
export default createSlice1.reducer
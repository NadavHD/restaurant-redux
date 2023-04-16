import { createSlice } from "@reduxjs/toolkit";
const KEY_LOCAL = 'resCreate';
const initState=localStorage[KEY_LOCAL]?JSON.parse(localStorage[KEY_LOCAL]) : {
    create: []
}

const create = createSlice({
    name:'create',
    initialState:initState,
    reducers:{
        addNewRes: (state, action) => {
            state.create.push(action.payload.createItem);
            saveToLocal(state);
        },
        updateRes: (state, action) => {
            state.create = [];
            saveToLocal(state);
        },
        deleteRes: (state, action) => {
            state.create = state.create.filter(
                (item) => item.id !== action.payload.delId
            );
            saveToLocal(state);
        }
    }
})

const saveToLocal = (state) => {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(state))
}

export const {addNewRes,updateRes,deleteRes} = create.action
export default create.reducer
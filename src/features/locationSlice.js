import {createSlice} from '@reduxjs/toolkit'



export const locationSlice =createSlice({
    name: 'location',
    initialState:{
        value: {lat: 14.59787779519911, lng: 121.04553742532553}
    },
    reducers: {
        changeLocation:(state, action) => {
            state.value = action.payload
        }
    }
})

export const {changeLocation} = locationSlice.actions
export default locationSlice.reducer
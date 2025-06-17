import { createSlice } from '@reduxjs/toolkit'


// storing data in local storage 
const initialState = {
        pastes:localStorage.getItem("pastes") 
        ? JSON.parse(localStorage.getItem("pastes"))
        : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addPaste: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes)) 
      alert("Paste has been created")
      // check for already existing paste is missing 
    },

    removePaste: (state,action) => {
      console.log("hello")
      const paste = action.payload
      console.log(paste)
      const index = state.pastes.findIndex((item) => item._id === paste )
      console.log(index)
      if(index >=0) // index is found 
      {
        state.pastes.splice(index,1)
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
      }

    },

    updatePaste: (state,action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste._id )

      if(index >=0) // index is found 
      {
        state.pastes[index] = paste
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
      }
    },

    resetPastes: (state, action) => {
      state.pastes = []
      localStorage.removeItem("pastes"); // deleting from local storage where key name "pastes" is found
    }
  }
})

// Action creators are generated for each case reducer function
export const { addPaste, updatePaste, resetPastes, removePaste } = pasteSlice.actions

export default pasteSlice.reducer
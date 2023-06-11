import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 2050,
    apiData: {}
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
      setData: (state, action) => {
          return { ...state, apiData: action.payload }
      },
      incrementId: (state, action) => {
          return { ...state, objectId: state.objectId + 1 }
      },
      decrementId: (state, action) => {
          return { ...state, objectId: state.objectId - 1 }
      },
      customId: (state, action) => {
          return { ...state, objectId: action.payload }
      },
      reset: (state, action) => {
          return initialState
      }
  }
})

export const fetchData = () => {
  const dataThunk = async (dispatch, getState) => {
      let state = getState()
      let res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
      let resData = await res.json()
      dispatch(setData(resData))
  }
  return dataThunk
}

export const { setData, incrementId, decrementId, customId, reset } = dataSlice.actions

export default dataSlice.reducer


// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     objectId: 10245,
//     apiData: {}
// }

// export const dataSlice = createSlice({
//     name: 'data',
//     initialState,
//     reducers: {
//         setData: (state, action) => {
//             return {...state, apiData : action.payload}
//         },
//         clearData: () => {
//             return initialState
//         },
//         inputId: (state, action) => {
//             return { ...state, objectId: action.payload }
//         },
//         incrementId: (state) => {
//             return { ...state, objectId: state.objectId + 1 }
//         },
//         decrementId: (state) => {
//             return { ...state, objectId: state.objectId - 1 }
//         }
//     }
// })

// export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions

// export const fetchData = () => {
//     const fetchDataThunk = async (dispatch, getState) => {
//         let state = getState()
//         const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
//         const rData = await response.json()
//         dispatch(setData(rData))
//     }
//     return fetchDataThunk
// }

// export default dataSlice.reducer
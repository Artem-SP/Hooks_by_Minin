// import React, { useReducer } from "react"

// const SHOW_ALERT = 'show'
// const HIDE_ALERT = 'hide'

// const reduser = (state) => {

//   switch(action.type) {
//     case 'SHOW_ALERT': return (...state, visible: true, text: action.text)
//     case 'HIDE-ALERT': return (...state, visible: false)
//     default: return state
//   }
// }

// export const AlertPrivider = ({ children }) => {

//  const [state, dispatch] = useReducer(reduser, {
//     visible: false
//     text: ''
//   })

// const show = text => dispatch({type: 'SHOW_ALERT'})
// const hide = () => dispatch({type: 'HIDE_ALERT'})

//   return (
//     <AlertContext.Provider
//       value={{
//         visible: state.visible,
//         text: state.text,
//         show, hide
//       }}
//     >
//       {children}
//     </AlertContext.Provider>
//   );
// };

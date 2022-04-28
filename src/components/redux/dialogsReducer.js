const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
  dialogs: [
    { id: 1, name: "Renata" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Ilona" },
    { id: 5, name: "Anna" },
    { id: 6, name: "Ilya" }
  ],
  messages: [
    { id: 1, message: "Hi! how are you?" },
    { id: 2, message: "I'm great! Thanks! And you?" },
    { id: 3, message: "Me to! What the weather today?" }
  ],
  newMessageBody: ''
}
const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 4, message: body }]
      }

    default:
      return state
  }
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBody = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer
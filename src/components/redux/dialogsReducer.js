const SEND_MESSAGE = 'SEND-MESSAGE'

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
  ]
}
const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }]
      }

    default:
      return state
  }
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer
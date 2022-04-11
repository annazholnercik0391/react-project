import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 24 },
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: "Renata" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Sveta" },
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default store
window.store = store

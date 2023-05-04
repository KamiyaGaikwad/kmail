export const initialState = {
    mails:[],
    spam:[],
    trash:[],
    appliedFilters:[]
}

export const MailReducer = (state, action) => {
    switch (action.type) {
      case 'GET_MAILS_DATA':
          console.log(state)
        return { ...state,mails:action.payload }
      case 'MARK_AS_SPAM':
        return { ...state, spam: [...state.spam,action.payload],mails:state.mails.filter((mail)=>mail!==action.payload) }
      case 'DELETE_MAIL':
        return { ...state, trash: [...state.trash,action.payload],mails:state.mails.filter((mail)=>mail!==action.payload) }
      case 'FILTERS':
        return { ...state, appliedFilters: state.appliedFilters.includes(action.payload)?state.appliedFilters.filter((item)=>item!==action.payload):[...state.appliedFilters,action.payload]}
      case 'STARRED':
        return { ...state, mails: state.mails.map((mail)=>mail.mId === action.payload?{...mail,isStarred:!mail.isStarred}:mail) }
      case 'UNREAD':
        return { ...state, mails: state.mails.map((mail)=>mail.mId === action.payload?{...mail,unread:!mail.unread}:mail) }
      default:
        return state
    }
  }


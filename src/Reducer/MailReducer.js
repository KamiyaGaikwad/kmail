export const initialState = {
    mails:[],
    spam:[],
    trash:[],
    appliedFilters:[]
}

export const MailReducer = (state, action) => {
    switch (action.type) {
      case 'GET_MAILS_DATA':
        return { ...state,mails:action.payload}
      case 'MARK_AS_SPAM':
        return { ...state, spam: [...state.spam,action.payload],mails:state.mails.filter((mail)=>mail!==action.payload),trash:state.trash.filter((mail)=>mail!==action.payload) }
      case 'DELETE_MAIL':
        return { ...state, trash: [...state.trash,action.payload],mails:state.mails.filter((mail)=>mail!==action.payload),spam:state.spam.filter((mail)=>mail!==action.payload) }
      case 'FILTERS':
        return { ...state, appliedFilters: state.appliedFilters.includes(action.payload)?state.appliedFilters.filter((item)=>item!==action.payload):[...state.appliedFilters,action.payload]}
      case 'STARRED':
        return { ...state, mails: state.mails.map((mail)=>mail.mId === action.payload?{...mail,isStarred:!mail.isStarred}:mail),spam: state.spam.map((mail)=>mail.mId === action.payload?{...mail,isStarred:!mail.isStarred}:mail)}
      case 'UNREAD':
        return { ...state, mails: state.mails.map((mail)=>mail.mId === action.payload?{...mail,unread:!mail.unread}:mail),spam: state.spam.map((mail)=>mail.mId === action.payload?{...mail,unread:!mail.unread}:mail),trash: state.trash.map((mail)=>mail.mId === action.payload?{...mail,unread:!mail.unread}:mail)}
      case 'MARK_AS_NOT_SPAM':
          return { ...state, mails: [...state.mails,action.payload].sort((a,b)=>a.mId.slice(-1) - b.mId.slice(-1)),spam:state.spam.filter((mail)=>mail!==action.payload) }
      case 'RESTORE_MAIL':
          return { ...state, mails: [...state.mails,action.payload].sort((a,b)=>a.mId.slice(-1) - b.mId.slice(-1)),trash:state.trash.filter((mail)=>mail!==action.payload) }
      default:
        return state
    }
  }


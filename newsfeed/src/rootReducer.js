const initState = {
    persons: [{
            "id": 1,
            "name": "test",
            "passwort": "test"
        },
        {
            "id": 2,
            "name": "test2",
            "passwort": "test2"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'LOGIN') {
     //   console.log('login Action: ', state.persons,action);
        
        return {
            persons: [...state.persons],    
            loggedIn: action.user.loggedIn,
            ID: state.id
        }
    }

    if (action.type === 'REGISTER') {
        
        return {
            persons: [...state.persons, action],          
        }
    }

    if (action.type === 'WRITEINDEX') {
        console.log('login Action: ', state, action);
           
         return {
            persons: [...state.persons],  
            loggedIn: state.loggedIn,
           ID: action.id          
        }
   }

    if (action.type === 'LOGOUT') {
        let newLogins = state.users.filter(user => {
            return action.id !== user.id
        })
        return {
            ...state,
            users: newLogins
        }
    }
    return state;
}



export default rootReducer
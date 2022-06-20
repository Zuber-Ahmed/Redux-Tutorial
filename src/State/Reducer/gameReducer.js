export const gameReducer = (
  state = {
    cricketTeam: [],
    footballTeam: [],
    hookeyTeam: [],
    kabbadiTeam: [],
    bulb:false,
  },action) => {
    if(action.type==="bulb"){
        return{
            ...state,
            bulb:!state.bulb,
        }
    }
    if(action.type==="cricketTeam"){
      
        return{
            ...state,
            cricketTeam:[action.payload,...state.cricketTeam]
        };
    }
    if(action.type==="footballTeam"){
        return{
            ...state,
            footballTeam:[action.payload,...state.footballTeam]
        };
    };
    if(action.type==="hookeyTeam"){
        return{
            ...state,
            hookeyTeam:[action.payload,...state.hookeyTeam]
        };
    }
    if(action.type==='kabbadiTeam'){
        return{
            ...state,
            kabbadiTeam:[action.payload,...state.kabbadiTeam]
        };
    }

    return state;

  };

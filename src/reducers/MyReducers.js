import {INCREASE} from "../actions/actions";


export let count = (state=1,action) => {
    switch(action.type){
        case INCREASE:
            // return {counter:state.counter+action.text};
            return state+action.text;
        default:
            return state;
    }
}

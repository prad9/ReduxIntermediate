import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            //Concat return new array. Hence following the rule on not modifying (state.push) the state.
            return [ action.payload.data, ...state ];
    }
    return state;
}
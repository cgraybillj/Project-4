import {SELL_STOCK, BUY_STOCK} from './constants/constants'

const initialState = {
    cash:10000
}

export default function trade (state=initialState, action){
    switch (action.type){
    case BUY_STOCK:
        return [
            ...state,

            {
                cash: state - (shares*selectedStock.price)
            }
        ]
        case SELL_STOCK:
            return[
                ...state,
                {
                    cash: state - (shares*selectedStock.price)
                }
            ]
            default: 
            return state
}
}
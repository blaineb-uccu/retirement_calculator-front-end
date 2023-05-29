
// key:
// allowance = desired monethly allowance in retirement
// ywr = yearly withdrawl rate
// n = years until retirement
// inflation = averate exptected inflation rate
// magicNum = the amount of money you need to retire according to your plan



const initialState = {
    pv: '',
    i: '',
    pmt: '',
    n: '',
    fv: '',
    ywr: '',
    inflation: '',
    allowance: '',
    magicNum : 0,
    expenses: 0,
    salary: 0,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PV': 
            return {
                ...state,
                pv: action.payload,
                fv: ''
            }
        case 'UPDATE_I': 
            return {
                ...state,
                i: action.payload,
                fv: ''
            }
        case 'UPDATE_PMT': 
            return {
                ...state,
                pmt: action.payload,
                fv: ''
            }
        case 'UPDATE_N':
            return {
                ...state,
                n: action.payload,
                fv: ''
            }
        case 'UPDATE_FV':
            return {
                ...state,
                fv: action.payload
            }
        
        case 'UPDATE_YWR':
            return {
                ...state,
                ywr: action.payload
                }

        case 'UPDATE_INFLATION':
            return {
                ...state,
                inflation: action.payload
            }

        case 'UPDATE_ALLOWANCE':
            return {
                ...state,
                allowance: action.payload
                }

        case 'UPDATE_MAGICNUM':
            return {
                ...state,
                magicNum: action.payload
                }

        case 'UPDATE_EXPENSES':
            return {
                ...state,
                expenses: action.payload
                }

        case 'UPDATE_SALARY':
            return {
                ...state,
                expenses: action.payload
                }

        default:
            console.log("something wrong in reducer")
            return state
    }

}

export default Reducer;
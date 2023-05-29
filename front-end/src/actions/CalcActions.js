

export const updatePV = (pv) => {
    return {type: 'UPDATE_PV', payload: pv}
}

export const updateI = (i) => {
    return {type: 'UPDATE_I', payload: i}
}

export const updatePMT = (pmt) => {
    return {type: 'UPDATE_PMT', payload: pmt}
}

export const updateN = (n) => {
    return {type: 'UPDATE_N', payload: n}
}

export const updateAll = (newState) => {
    return {type: 'UPDATE_ALL', payload: newState}
}

export const updateFV = (fv) => {
    return {type: 'UPDATE_FV', payload: fv}
}


// planner actions:

export const updateYwr = (ywr) => {
    return {type: 'UPDATE_YWR', payload: ywr}
}

export const updateInflation = (ywr) => {
    return {type: 'UPDATE_INFLATION', payload: ywr}
}

export const updateAllowance = (ywr) => {
    return {type: 'UPDATE_ALLOWANCE', payload: ywr}
}

export const updateMagicNum = (num) => {
    return {type: 'UPDATE_MAGICNUM', payload: num}
}

export const updateExpenses = (num) => {
    return {type: 'UPDATE_EXPENSES', payload: num}
}

export const updateSalary = (num) => {
    return {type: 'UPDATE_SALARY', payload: num}
}
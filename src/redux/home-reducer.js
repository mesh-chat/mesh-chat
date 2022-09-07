const UPDATE_PHONE_NUMBER = 'UPDATE-PHONE-NUMBER-TEXT'

let initialState = {
    phoneNumber: '0994595049'
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PHONE_NUMBER:
            return updatePhoneNumber(state, action.phoneNumber)
        default:
            return state
    }
}

const updatePhoneNumber = (state, phoneNumber) => {
    return {
        ...state,
        phoneNumber: phoneNumber
    }
}

export const updatePhoneNumberCreator = (phoneNumber) =>
    ({ type: UPDATE_PHONE_NUMBER, phoneNumber: phoneNumber})

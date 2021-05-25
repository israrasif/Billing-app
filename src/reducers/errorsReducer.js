const initialValue = ''

const errorsReducer = (state = initialValue, action) => {

    switch (action.type) {

        case 'ERROR' : {
            return 'error'
        }

        case  'DUPLICATE' : {
            return 'duplicate'
        }

        case 'REGISTER_SUCCESS' : {
            return 'registered'
        }

        case 'RESET_TOKEN' : {
            return ''
        }
        
        default : {
            return state
        }
    }
}

export default errorsReducer
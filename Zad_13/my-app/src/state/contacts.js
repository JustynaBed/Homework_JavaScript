const initialState = {
    data: [
        {
            id: '1',
            name: 'Kazia Butkiewicz',
            phone: '10101000',
            email: 'kazimiera@pw.moc',
            category: 'Rodzina'
        },
        {
            id: '2',
            name: 'Zofia Przesławska',
            phone: '10101080',
            email: 'zoska@pw.moc',
            category: 'Praca'
        },
        {
            id: '3',
            name: 'Buromir Mirobirski',
            phone: '80101000',
            email: 'buro@pw.moc',
            category: 'Nasza Klasa'
        }
    ]
}


export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                data: state.data.concat({
                id: Date.now().toString(32),
                name: action.contactName,
                phone: action.contactPhone,
                email: action.contactEmail,
                category: action.contactCategory
                })
            }
        case 'REMOVE_CONTACT':
            return {
                ...state,
                data: state.data.filter(contact => contact.id !== action.contactId)
                }

        case 'UPDATE_CONTACT':
            return {
                ...state,
                data: state.data.map(
                    contact =>
                        contact.id !== action.contactId
                          ? contact
                           : {
                              ...contact,
                              ...action.updatedContact
                           }
                    )
            }

        default:
            return state
    }
}
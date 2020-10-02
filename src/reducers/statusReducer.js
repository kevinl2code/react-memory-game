const status = {
    selectedCards: [],
    matchedCards: []
}

const handleSelectCard = (state, action) => {
        return {...state, selectedCards: [...state.selectedCards, action.payload.card.key]}
    }


export default (state = status, action) => {
    switch (action.type) {
        case 'SELECT_CARD': return handleSelectCard(state, action);
        case 'CHECK_SELECTED': return action.checkSelected(state);
        case 'RESET' : return status
        default : return state;
    }
}
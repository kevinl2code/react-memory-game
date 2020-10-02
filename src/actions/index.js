import {
    NEW_GAME,
    SHUFFLE,
    SELECT_CARD,
    CHECK_SELECTED,
    RESET,
    GAME_OVER
} from './types'

export const selectCard = (card) => ({
    type: SELECT_CARD,
    payload: {
        card: card
    }
})

export const checkSelected = (state) => ({
    type: CHECK_SELECTED,
    checkSelected(state) {
        if (state.selectedCards.length > 1) {
            if (state.selectedCards[0].charAt(0) === state.selectedCards[1].charAt(0)) {
                return {...state, matchedCards: [...state.matchedCards, state.selectedCards[0], state.selectedCards[1]], selectedCards: []}
            } else if (state.selectedCards[0] !== state.selectedCards[1]) {
                return {...state, selectedCards: []}     
            }
        }
        return {...state} 
    }
})

export const gameOver = () => ({
    type: GAME_OVER
})

export const newGame = (time) => {
    return {
        type: NEW_GAME,
        payload: time -= 1
    }
}

export const reset = () => {
    return {
        type: RESET,
        payload: 60
    }
}

export const shuffle = (deck) => ({
    type: SHUFFLE,
    handleShuffle(deck) {
        let array = deck
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
})
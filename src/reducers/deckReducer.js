import { SHUFFLE, RESET } from '../actions/types'

const deckState = {
    deck: [
        { cardName: 'pizza', key: 'a1', status: 'default', img:'./icon0.png'},
        { cardName: 'pizza', key: 'a2', status: 'default', img:'./icon0.png'},
        { cardName: 'record', key: 'b1', status: 'default', img:'./icon1.png'},
        { cardName: 'record', key: 'b2', status: 'default', img:'./icon1.png'},
        { cardName: 'popper', key: 'c1', status: 'default', img:'./icon2.png'},
        { cardName: 'popper', key: 'c2', status: 'default', img:'./icon2.png'},
        { cardName: 'cheers', key: 'd1', status: 'default', img:'./icon3.png'},
        { cardName: 'cheers', key: 'd2', status: 'default', img:'./icon3.png'},
        { cardName: 'loons', key: 'e1', status: 'default', img:'./icon4.png'},
        { cardName: 'loons', key: 'e2', status: 'default', img:'./icon4.png'},
        { cardName: 'music', key: 'f1', status: 'default', img:'./icon5.png'},
        { cardName: 'music', key: 'f2', status: 'default', img:'./icon5.png'},
        { cardName: 'ccake', key: 'g1', status: 'default', img:'./icon6.png'},
        { cardName: 'ccake', key: 'g2', status: 'default', img:'./icon6.png'},
        { cardName: 'candy', key: 'h1', status: 'default', img:'./icon7.png'},
        { cardName: 'candy', key: 'h2', status: 'default', img:'./icon7.png'},
        { cardName: 'beer', key: 'i1', status: 'default', img:'./icon8.png'},
        { cardName: 'beer', key: 'i2', status: 'default', img:'./icon8.png'},
        { cardName: 'dance', key: 'j1', status: 'default', img:'./icon9.png'},
        { cardName: 'dance', key: 'j2', status: 'default', img:'./icon9.png'}
    ]
}



export default (state = deckState, action) => {
    switch (action.type) {
        case SHUFFLE: return action.handleShuffle(state);
        case RESET: return deckState.deck;
        default: return deckState.deck;
    }
}
import React from 'react'
import { connect } from 'react-redux'
import { checkSelected } from '../../actions/'
import { shuffle } from '../../actions/'
import GameRow from '../GameRow/GameRow'
import Overlay from '../Overlay/Overlay'
import './gameArea.css'

class GameArea extends React.Component {
    render() {
        return (
            <div className="game-area">
                <Overlay />
                <GameRow />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { deck: state.deck, gameStatus: state.status }
}

export default connect(mapStateToProps, {
    shuffle: shuffle,
    checkSelected: checkSelected
})(GameArea)
import './menu.css'
import React from 'react'
import { connect } from 'react-redux'
import { shuffle } from '../../actions/'
import { newGame } from '../../actions/'
import { reset } from '../../actions/'

class Menu extends React.Component {
        
        gameTimer() {
            this.props.shuffle(this.props.deck)
            const countdown = setInterval(() => {
                this.props.newGame(this.props.timer)
                if (this.props.timer === 0) {
                    clearInterval(countdown)
                } else if (this.props.matched.length === 20) {
                    clearInterval(countdown)
                }
            }, 1000)
        }

        render() {
            return (
                <div className="menu">
                    <button className={this.props.timer < 60 ? "menu__button--disabled" : "menu__button"} onClick={() => this.gameTimer()}>START</button>
                    <h1>MEMORY GAME!</h1>
                    <p className="menu__timer">Timer: {this.props.timer}</p>
                </div>
            )
        }
}

const mapStateToProps = (state) => {
    return  {
        timer: state.timer,
        deck: state.deck,
        matched: state.status.matchedCards
    }
}

export default connect(mapStateToProps, { 
    newGame: newGame, shuffle: shuffle, reset: reset
})(Menu)
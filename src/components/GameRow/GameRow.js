import React from 'react'
import { connect } from 'react-redux'
import  { selectCard } from '../../actions/'
import Card from '../Card/Card'
import './gameRow.css'

const GameRow = (props) => {
    const populateRows = () => {
        if (props.deck) {
            return props.deck.map((item) => {
                return (
                        <Card cardData={item} alt="" key={item.key}/>
                )
            })
        }
    }
    console.log(props.deck)
    return (
        <div className={'game-row'}>
            {populateRows()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        deck: state.deck,
        status: state.status,
        time: state.timer
    }
} 

export default connect(mapStateToProps, { selectCard: selectCard })(GameRow)
import React from 'react'
import { selectCard } from '../../actions/'
import { checkSelected } from '../../actions/'
import { connect } from 'react-redux'
import './card.css'

class Card extends React.Component {
    images = () => require.context('../../images', true)

    selectedImageHelper = () => this.props.gameStatus.selectedCards.includes(this.props.cardData.key) ? this.images()(this.props.cardData.img) : this.images()('./defaultCard.png')
    
    divStyling = () => {
        if (this.props.gameStatus.matchedCards.includes(this.props.cardData.key)) {
            return 'memory-card__matched'
        } else if (this.props.gameStatus.selectedCards.includes(this.props.cardData.key)) {
            return "memory-card__selected"
        } else {
            return 'memory-card'
        }
    }

    clickHelper = () => {
        this.props.selectCard(this.props.cardData)
        setTimeout(() => {
            return this.props.checkSelected(this.props.status)
        }, 750)
        
    }

        

    render() {
        return (
            <div 
                className={this.divStyling()}
                onClick={this.clickHelper}
            >
                <img src={this.selectedImageHelper()} className="memory-card__image" alt=""/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.status
    }
}

export default connect(mapStateToProps, { selectCard: selectCard, checkSelected: checkSelected })(Card)
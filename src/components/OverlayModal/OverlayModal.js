import React from 'react'
import { connect } from 'react-redux'
import { reset } from '../../actions/'
import './overlayModal.css'

const OverlayModal = (props) => {

    const clickHelper = () => {
        return props.reset()
    }

    const handleStyle = () => {
        if (props.matched.length === 20) {
            return 'overlay-modal__winner'
        } else {
            return 'overlay-modal__loser'
        }
    }

    const handleMessage = () => {
        if (props.matched.length === 20) {
            return 'CONGRATS YOU MATCHED THEM ALL!'
        } else {
            return 'BETTER LUCK NEXT TIME!'
        }
    }

    return (
        <div className={handleStyle()}>
            <h3 className='overlay-modal__message'>{handleMessage()}</h3>
            <button className='overlay-modal__button' onClick={() => clickHelper()}>NEW GAME</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        time: state.timer,
        matched: state.status.matchedCards
    }
}

export default connect(mapStateToProps, { reset: reset })(OverlayModal)
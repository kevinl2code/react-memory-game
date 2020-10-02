import React from 'react'
import { connect } from 'react-redux'
import OverlayModal from '../OverlayModal/OverlayModal'
import './overlay.css'

class Overlay extends React.Component {
    
    classSelector = () => {
        if  (this.props.matched.length === 20) {
            return 'overlay'
        } else if (this.props.time < 60 && this.props.time > 0) {
            return 'overlay__in-progress'
        } else {
            return 'overlay'
        } 
    }
   
    gameStatus = () => {
        if  (this.props.matched.length === 20 || this.props.time <= 0) {
            return 1
        }
    }

    render() {
        return(
            <div className={this.classSelector()}>
                {this.gameStatus() === 1 ? <OverlayModal /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        time: state.timer,
        matched: state.status.matchedCards
    }
}

export default connect(mapStateToProps)(Overlay)
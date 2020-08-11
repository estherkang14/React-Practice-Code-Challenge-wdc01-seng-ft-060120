import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourItems.map(sushi => <Sushi sushi={sushi} key={sushi.id} 
          chooseSushi={props.chooseSushi}
          moneyRemaining={props.moneyRemaining}
          sushiAlert={props.sushiAlert}/>)
        }
      <MoreButton nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
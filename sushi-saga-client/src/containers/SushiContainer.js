import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourItems.map(sushi => <Sushi sushi={sushi} key={sushi.id} 
          eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>)
        }
      <MoreButton next4Sushi={props.next4Sushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
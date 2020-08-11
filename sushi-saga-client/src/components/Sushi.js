import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
          // { props.moneyRemaining - props.sushi.price < 0 
          // ? onClick=( () => props.chooseSushi(props.sushi))
          // : onClick=alert("You don't have enough money!") } 
          onClick={ () => ( props.moneyRemaining - props.sushi.price >= 0 ? 
                          props.chooseSushi(props.sushi) : props.sushiAlert()) }
      >

            { 
              props.sushi.clicked ?
                null
              :
                <img src={props.sushi.img_url} width="100%" />
            }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
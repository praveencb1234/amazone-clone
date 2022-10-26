import React from 'react'
import CurrencyFormat from 'react-currency-format'
import"./Atm_Card.css"
function Atm_Card() {
  return (
    <div className='card_top'>

<div className="card_data">




<CurrencyFormat className='card' placeholder='card number'   format="#### #### #### ####" mask="_"/>





</div>

    </div>
  )
}

export default Atm_Card
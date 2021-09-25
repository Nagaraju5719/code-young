// Write your code here

import './index.css'

const CurrencyConversion = (props) => (
  const {
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}=props
  <div className="coin-container">
    <div className="coin-row">
      <div className="coin">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <div className="coin-data">
        <p className="coin-price"></p>
        <p className="coin-volume"></p>

        {priceChange < 0 ? (
          <p className="coin-percent red"></p>
        ) : (
          <p className="coin-percent green"></p>
        )}

        <p className="coin-marketcap"></p>
      </div>
    </div>
  </div>
)

export default CurrencyConversion

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [dollars, setDollars] = useState(0);

  const onChange = (event) => {
    setDollars(event.target.value);
  };
  const onClick = () => {
    setCoins([]);
    setFilteredCoins([]);
    coins.map((coin) => {
      if(coin.quotes.USD.price > dollars) {
        setFilteredCoins((current) => [coin, ...current]);
      }
    });
    setCoins(filteredCoins);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, [dollars]);
  useEffect(() => {
    setCoins(filteredCoins);
  }, [filteredCoins]);

  return (
    <div>
        <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
        <hr />
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <div>
            <input type="number" placeholder="USD" value={dollars} onChange={onChange} />
            <button onClick={onClick}>Select</button>
            <br />
            <select>
              {coins.map((coin, index) => (<option key={index} >{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>))}
            </select>
          </div>
        )}
    </div>
  );
}

export default App;
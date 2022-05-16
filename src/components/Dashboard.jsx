import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [symbol, setSymbol] = useState({
    symbol: "",
    industry: "",
    status: true,
    price: "",
    h_price: "",
    l_price: "",
    c_price: "",
    volume: "",
  });
  const [store, setStore] = useState([]);
  const [color, setColor] = useState("");
  const colorgenrator = () => {
    setColor(Math.random().toString(16));
  };
  const userSymbol = (e) => {
    setSymbol({
      ...symbol,
      [e.target.name]: e.target.value,
      price: (Math.random() * 2000).toFixed(2),
      h_price: (Math.random() * 2000).toFixed(2),
      l_price: (Math.random() * 2000).toFixed(2),
      c_price: (Math.random() * 2000).toFixed(2),
      volume: Math.floor(Math.random() * 2000),
    });
  };
  const subscribeSymbol = () => {
    setStore([...store, symbol]);
  };

  return (
    <>
      <h2>dashBoard</h2>
      <div className="dashboard">
        <div className="card1">
          <div>Card TL</div>
          <div>Card BL</div>
        </div>
        <div className="card2">
          <div className="subcard1">
            <h3>Subscribe to Symbol</h3>
            <div className="inp_items">
              <input
                type="text"
                placeholder="Symbol"
                name="symbol"
                value={symbol.symbol}
                onChange={userSymbol}
              />
              <input
                type="text"
                placeholder="Industry"
                name="industry"
                value={symbol.industry}
                onChange={userSymbol}
              />
              <button onClick={subscribeSymbol}>Add</button>
            </div>
            <p>
              <b>subscribed Symbols</b>:RES,INFY,TCS,HDFCBANK,BAJFINANCE,ITC,
              ICICIBANK, AXISBANK
            </p>
          </div>
          <div className="subcard2">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Open Price</th>
                  <th>High Price</th>
                  <th>Low Price</th>
                  <th>Close Price</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {store.map((item) => {
                  let data = item.industry.toLowerCase();
                  let mydata =
                    item.industry.charAt(0).toUpperCase() + data.slice(1);
                  return (
                    <tr>
                      <td>
                        {item.symbol.toUpperCase()}
                        <td style={{ color: `#${color}` }}>{mydata}</td>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card3">
          <div>Card MR</div>
          <div>Card BR</div>
          <div>Card TR</div>
        </div>
      </div>
    </>
  );
};

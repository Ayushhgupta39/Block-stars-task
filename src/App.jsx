import { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";

function App() {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMarketData = async () => {
    const response = await axios.get("http://localhost:8080/prices");
    setMarketData(response.data);
    console.log(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  return (
    <>
      <h1 className="flex justify-center items-center text-3xl font-bold">
        Price Data
      </h1>
      <div className="relative overflow-x-auto">
        {marketData && !loading ? (
          <div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Coin/Token
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Volume
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Supply
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Market Cap
                  </th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((data) => (
                  <tr key={data.id} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      {data.id}
                    </th>
                    <td className="px-6 py-4">
                      ${millify(data.current_price)}
                    </td>
                    <td className="px-6 py-4">{millify(data.total_volume)}</td>
                    <td className="px-6 py-4">{millify(data.total_supply)}</td>
                    <td className="px-6 py-4">{millify(data.market_cap)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex justify-center">Loading...</div>
        )}
      </div>
    </>
  );
}

export default App;

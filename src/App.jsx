import './App.css'
import HistoricCharts from './components/HistoricCharts'
import useMarketData from './Hooks/useMarketData'
import usePriceData from './Hooks/usePriceData'
import { useSelector } from 'react-redux'

function App () {
  const { fetchMarketData } = useMarketData()
  const { fetchPriceData } = usePriceData()

  fetchMarketData()
  fetchPriceData()

  const { currentPriceData, marketData } = useSelector(state => state.dataSlice)

  return (
    <>
      <div className='text-7xl font-bold text-center my-4 mb-10 text-yellow-600'>
        Coin Hunt
      </div>
      <div className='flex justify-center'>
        <div className='relative overflow-x-auto w-[90%]'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  1h %
                </th>
                <th scope='col' className='px-6 py-3'>
                  24h %
                </th>
                <th scope='col' className='px-6 py-3'>
                  7d %
                </th>
                <th scope='col' className='px-6 py-3'>
                  Market Cap
                </th>
                <th scope='col' className='px-6 py-3'>
                  Volume
                </th>
                <th scope='col' className='px-6 py-3'>
                  Circulating Supply
                </th>
                <th scope='col' className='px-6 py-3'>
                  Last 7 Days
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
                onClick={() => setSelectedCoin(marketData.btc.id)}
              >
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2'
                >
                  <img src={marketData.btc.image} alt='...' width={20} />
                  <span>Bitcoin</span>
                </th>
                <td className='px-6 py-4'>{currentPriceData.btcusdt}</td>
                <td
                  className={`px-6 py-4 ${
                    marketData.btc.price_change_percentage_1h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.btc.price_change_percentage_1h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.btc.price_change_percentage_24h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.btc.price_change_percentage_24h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.btc.price_change_percentage_7d_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.btc.price_change_percentage_7d_in_currency.toFixed(
                    3
                  )}
                </td>
                <td className='px-6 py-4'>${marketData.btc.market_cap}</td>
                <td className='px-6 py-4'>${marketData.btc.total_volume}</td>
                <td className='px-6 py-4'>${marketData.btc.total_supply}</td>
                <td className='px-6 py-4'>
                  <HistoricCharts coinId={marketData.btc.id} />
                </td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2'
                >
                  <img src={marketData.eth.image} alt='...' width={20} />
                  <span>Ethereum</span>
                </th>
                <td className='px-6 py-4'>{currentPriceData.ethusdt}</td>
                <td
                  className={`px-6 py-4 ${
                    marketData.eth.price_change_percentage_1h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.eth.price_change_percentage_1h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.eth.price_change_percentage_24h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.eth.price_change_percentage_24h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.eth.price_change_percentage_7d_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.eth.price_change_percentage_7d_in_currency.toFixed(
                    3
                  )}
                </td>
                <td className='px-6 py-4'>${marketData.eth.market_cap}</td>
                <td className='px-6 py-4'>${marketData.eth.total_volume}</td>
                <td className='px-6 py-4'>${marketData.eth.total_supply}</td>
                <td className='px-6 py-4'>
                  <HistoricCharts coinId={marketData.eth.id} />
                </td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2'
                >
                  <img src={marketData.xrp.image} alt='...' width={20} />
                  <span>XRP</span>
                </th>
                <td className='px-6 py-4'>{currentPriceData.xrpusdt}</td>
                <td
                  className={`px-6 py-4 ${
                    marketData.xrp.price_change_percentage_1h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.xrp.price_change_percentage_1h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.xrp.price_change_percentage_24h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.xrp.price_change_percentage_24h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.xrp.price_change_percentage_7d_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.xrp.price_change_percentage_7d_in_currency.toFixed(
                    3
                  )}
                </td>
                <td className='px-6 py-4'>${marketData.xrp.market_cap}</td>
                <td className='px-6 py-4'>${marketData.xrp.total_volume}</td>
                <td className='px-6 py-4'>${marketData.xrp.total_supply}</td>
                <td className='px-6 py-4'>
                  <HistoricCharts coinId={marketData.xrp.id} />
                </td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2'
                >
                  <img src={marketData.ada.image} alt='...' width={20} />
                  <span>Cardano</span>
                </th>
                <td className='px-6 py-4'>{currentPriceData.adausdt}</td>
                <td
                  className={`px-6 py-4 ${
                    marketData.ada.price_change_percentage_1h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.ada.price_change_percentage_1h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.ada.price_change_percentage_24h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.ada.price_change_percentage_24h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.ada.price_change_percentage_7d_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.ada.price_change_percentage_7d_in_currency.toFixed(
                    3
                  )}
                </td>
                <td className='px-6 py-4'>${marketData.ada.market_cap}</td>
                <td className='px-6 py-4'>${marketData.ada.total_volume}</td>
                <td className='px-6 py-4'>${marketData.ada.total_supply}</td>
                <td className='px-6 py-4'>
                  <HistoricCharts coinId={marketData.ada.id} />
                </td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2'
                >
                  <img src={marketData.doge.image} alt='...' width={20} />
                  <span>Doge Coin</span>
                </th>
                <td className='px-6 py-4'>{currentPriceData.dogeusdt}</td>
                <td
                  className={`px-6 py-4 ${
                    marketData.doge.price_change_percentage_1h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.doge.price_change_percentage_1h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.doge.price_change_percentage_24h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.doge.price_change_percentage_24h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.doge.price_change_percentage_7d_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.doge.price_change_percentage_7d_in_currency.toFixed(
                    3
                  )}
                </td>
                <td className='px-6 py-4'>${marketData.doge.market_cap}</td>
                <td className='px-6 py-4'>${marketData.doge.total_volume}</td>
                <td className='px-6 py-4'>${marketData.doge.total_supply}</td>
                <td className='px-6 py-4'>
                  <HistoricCharts coinId={marketData.doge.id} />
                </td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2'
                >
                  <img src={marketData.sol.image} alt='...' width={20} />
                  <span>Solana</span>
                </th>
                <td className='px-6 py-4'>{currentPriceData.solusdt}</td>
                <td
                  className={`px-6 py-4 ${
                    marketData.sol.price_change_percentage_1h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.sol.price_change_percentage_1h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.sol.price_change_percentage_24h_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.sol.price_change_percentage_24h_in_currency.toFixed(
                    3
                  )}
                </td>
                <td
                  className={`px-6 py-4 ${
                    marketData.sol.price_change_percentage_7d_in_currency.toFixed(
                      3
                    ) > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {marketData.sol.price_change_percentage_7d_in_currency.toFixed(
                    3
                  )}
                </td>
                <td className='px-6 py-4'>${marketData.sol.market_cap}</td>
                <td className='px-6 py-4'>${marketData.sol.total_volume}</td>
                <td className='px-6 py-4'>${marketData.sol.total_supply}</td>
                <td className='px-6 py-4'>
                  <HistoricCharts coinId={marketData.sol.id} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App

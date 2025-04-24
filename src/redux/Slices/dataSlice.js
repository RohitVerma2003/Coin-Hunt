import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        marketData: {
            btc: {},
            eth: {},
            xrp: {},
            sol: {},
            doge: {},
            ada: {}
        },
        currentPriceData: {
            btcusdt: 0,
            ethusdt: 0,
            solusdt: 0,
            dogeusdt: 0,
            adausdt: 0,
            xrpusdt: 0,
        }
    },
    reducers: {
        updateMarketData: (state, action) => {
            const data = action.payload;
            const newData = {}

            data.forEach(ele => {
                const symbol = ele.symbol
                newData[symbol] = ele
            });

            state.marketData = newData
        },
        updatePriceData: (state, action) => {
            const { symbol, price } = action.payload
            if (!state.currentPriceData) {
                state.currentPriceData = {};
            }
            state.currentPriceData[symbol] = price;
        }
    },
})

export const { updateMarketData, updatePriceData } = dataSlice.actions

export default dataSlice.reducer
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { updatePriceData } from "../redux/Slices/dataSlice";

const usePriceData = () => {
    const dispatch = useDispatch();
    const coinSymbols = ['btcusdt', 'ethusdt', 'solusdt', 'dogeusdt', 'adausdt', 'xrpusdt'];

    const fetchPriceData = () => {
        useEffect(() => {
            const stream = coinSymbols.map(c => `${c}@trade`).join('/');
            const socket = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${stream}`);

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                const symbol = data.stream.split('@')[0];
                const price = parseFloat(data.data.p).toFixed(2);
                dispatch(updatePriceData({ symbol, price }));
            };

            return () => socket.close();
        }, [dispatch]);
    }

    return { fetchPriceData }
}

export default usePriceData;
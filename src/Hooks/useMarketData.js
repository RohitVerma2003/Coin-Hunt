import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { updateMarketData } from "../redux/Slices/dataSlice";

const useMarketData = () => {
    const dispatch = useDispatch();
    const coins = ['bitcoin', 'ethereum', 'solana', 'dogecoin', 'cardano', 'ripple'];

    const fetchMarketData = () => {
        useEffect(() => {
            axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: coins.join(','),
                    price_change_percentage: '1h,24h,7d',
                },
            })
                .then(res => {
                    dispatch(updateMarketData(res.data))
                })
                .catch(err => console.error(err));
        }, [dispatch]);
    }

    return { fetchMarketData }
}

export default useMarketData;
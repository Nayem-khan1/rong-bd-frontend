import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Verify = () => {

    const {navigate, token, setCartItems, backendUrl} = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if(!token) {
                return null;
            }
            const response = await axios.post(backendUrl + '/api/order/verify-stripe', {success, orderId}, {headers: {token}})
            
            if(response.data.success) {
                setCartItems({})
                navigate('/order')
            } else {
                navigate('/cart')
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=> {
        verifyPayment();
    }, [token])

  return (
    <div>Verify</div>
  )
}

export default Verify
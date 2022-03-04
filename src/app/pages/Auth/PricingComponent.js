import React, {useState} from 'react';
import './styles/Pricing.css'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const PricingComponent = () => {
    const [hover, setHover] = useState(true)

    const config = {
            public_key: 'FLWPUBK-**************************-X',
            tx_ref: Date.now(),
            amount: 100,
            currency: 'NGN',
            payment_options: 'card,mobilemoney,ussd',
            customer: {
            email: 'user@gmail.com',
            phonenumber: '07064586146',
            name: 'joel ugwumadu',
        },
        customizations: {
            title: 'my Payment Title',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return <>
        <section className="m-20 sm:mx-48 md:mx-6 lg:mx-14 xl:mx-20 basis-1/3 cursor-pointer border-first-button scroll-to-section transform-color">
          <div className=" rounded-md shadow-2xl">
            <div className="py-6 text-center ">
              <h1 className="text-2xl font-semibold">BASIC</h1>
              <h1 className="py-6 text-xl">#5000</h1>
            </div>
            <div className="py-6 text-center border-current">
              <h2>4 GB Ram</h2>
            </div>
            <div className="py-6 text-center border-current">
              <h2>7/24 Tech Support</h2>
            </div>
            <div className="py-6 text-center">
              <h2>40 GB SSD Cloud Storage</h2>
            </div>
            <div className="py-6 text-center">
              <button className="bg-green-600 px-10 py-2 text-white rounded-full font-semibold shadow-md" onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                      closePaymentModal() // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
        }}>Apply</button>
            </div>
          </div>
        </section>
    </>
}

export default PricingComponent
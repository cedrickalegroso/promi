"use client";

import Button from "./components/button";
import React, { useState } from "react";
import { SSSData, saveSVG, removeSVG } from "./components/const";

export default function Home() {
  const [pairs, setPairs] = useState(
    Object.entries(SSSData).map(([key, value]) => ({
      key,
      value: Number(value),
    }))
  );

  const addPair = () => {
    setPairs([...pairs, { key: "", value: 0 }]);
  };

  const savePair = (index: number) => {
    const pairToSave = pairs[index];

    console.log("Pair saved:", pairToSave);
  };

  const removePair = (index: number) => {
    setPairs(pairs.filter((_, i) => i !== index));
  };

  const handleChange = (
    index: number,
    side: "key" | "value",
    value: string | number
  ) => {
    const newPairs = [...pairs];
    // Use type assertion to tell TypeScript that newPairs[index][side] can be of type string | number
    (newPairs[index][side] as string | number) = value;
    setPairs(newPairs);
  };

  return (
    <div className="bg-white min-h-screen w-screen p-5   flex flex-col  items-center justify-center">
      <div className="border border-[#F35B04] mx-auto w-full  p-5 rounded  ">
        <div className="flex flex-row  justify-center gap-4 align-center items-center  ">
          <div className="flex w-2/6 ">
            <label
              htmlFor="sss-input"
              className="block text-sm text-[#F35B04] font-medium"
            >
              SSS range
            </label>
          </div>
          <div className="flex w-2/6 ">
            <label
              htmlFor="amount-input"
              className="block text-sm text-[#F35B04] font-medium"
            >
              Amount
            </label>
          </div>
          <div className="flex w-fit  ">
            {/* decoy buttons just to fit the ui? not visible but needs to be here XD */}
            <button
              className="ml-2 p-2 bg-[#080808] border border-gray-600 rounded-md invisible "
              aria-label="Save"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            </button>

            <button
              className="ml-2 p-2 bg-[#080808] border border-gray-600 rounded-md invisible "
              aria-label="Save"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            {/* decoy ends */}
          </div>
        </div>

        {pairs.map((pair, index) => (
          <div
            key={index}
            className="flex flex-row  justify-center gap-4 align-center items-center mt-1"
          >
            <div className="flex w-2/6 ">
              <input
                type="text"
                placeholder="SSS Range"
                value={pair.key}
                onChange={(e) => handleChange(index, "key", e.target.value)}
                className="mt-1 block w-full bg-white   border border-[#F4F4F4] rounded-md py-2 px-4 text-black placeholder-gray-400 focus:border-blue-500"
              />
            </div>

            <div className="flex w-2/6 ">
              <input
                type="text"
                placeholder="Amount"
                value={pair.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                className="mt-1 block w-full bg-white  border border-[#F4F4F4] rounded-md py-2 px-4 text-black placeholder-gray-400 focus:border-blue-500"
              />
            </div>

            <div className="flex w-fit  ">
              <Button
                icon={saveSVG}
                color="text-[#7FC97F]"
                onClick={() => removePair(index)}
              ></Button>
              <Button
                icon={removeSVG}
                color="text-[#FF0000]"
                onClick={() => removePair(index)}
              ></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

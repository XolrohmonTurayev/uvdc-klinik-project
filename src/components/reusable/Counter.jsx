import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
const Counter = ({ count }) => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(true);
  }, []);

  return (
    <div className="flex bg-gray-100 text-main tem">
      {startCount && (
        <div className="flex gap-1 text-[20px] font-bold text-blue-600 md:text-2xl 2xl:text-4xl">
          <CountUp start={0} end={count} duration={3} />
          <span>+</span>
        </div>
      )}
    </div>
  );
};

export default Counter;

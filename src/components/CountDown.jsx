import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 50,
    seconds: 6
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Biggest Deal of the Year
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Get lifetime access to all current and future courses with one easy payment.
        </p>

        {/* Countdown Timer Section */}
        <div className="mb-10">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
            Offer Ends in:
          </h2>
          
          {/* Countdown Grid */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {/* Days */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-gray-800">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm md:text-base font-medium text-gray-600 mt-2">
                Days
              </div>
            </div>
            
            {/* Hours */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-gray-800">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm md:text-base font-medium text-gray-600 mt-2">
                Hours
              </div>
            </div>
            
            {/* Minutes */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-gray-800">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm md:text-base font-medium text-gray-600 mt-2">
                Minutes
              </div>
            </div>
            
            {/* Seconds */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-gray-800">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm md:text-base font-medium text-gray-600 mt-2">
                Seconds
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
          Grab Your Deal
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-01-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[450px] md:max-h-screen flex items-center justify-center bg-black text-white p-6 mt-[120px]">
      <div className="text-center p-10  rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 font-out">Countdown to Jan 15 (Starting Now)</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center my-8">
          <div className=" rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition flex flex-col items-center justify-center cursor-pointer">
            <p className="text-5xl font-bold text-red-400">{timeLeft.days}</p>
            <p className="uppercase text-sm mt-2">Days</p>
          </div>
          <div className=" rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition flex flex-col items-center justify-center cursor-pointer">
            <p className="text-5xl font-bold text-green-500">{timeLeft.hours}</p>
            <p className="uppercase text-sm mt-2">Hours</p>
          </div>
          <div className=" rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition flex flex-col items-center justify-center cursor-pointer">
            <p className="text-5xl font-bold text-orange-500">{timeLeft.minutes}</p>
            <p className="uppercase text-sm mt-2">Minutes</p>
          </div>
          <div className=" rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition flex flex-col items-center justify-center cursor-pointer">
            <p className="text-5xl font-bold text-white">{timeLeft.seconds}</p>
            <p className="uppercase text-sm mt-2">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

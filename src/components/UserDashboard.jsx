import { useState } from "react";

const UserDashboard = () => {
  const [investment, setInvestment] = useState("");
  const [months, setMonths] = useState(6);
  const [growthRate] = useState(0.08); // 8% return rate example
  const [projectedAmount, setProjectedAmount] = useState(null);

  const calculateGrowth = () => {
    const amount = parseFloat(investment);
    if (!isNaN(amount)) {
      const growth = amount * Math.pow(1 + growthRate, months / 12);
      setProjectedAmount(growth.toFixed(2));
    }
  };

  return (
    <div className="bg-white min-h-screen">
   

      <section className="bg-[#047056] text-white py-10 px-6 shadow-md mt-20 ">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Member! 👋</h1>
        <p className="text-lg">Manage your Chamas, contributions & savings all in one place.</p>
      </section>

      <section className="p-6 max-w-4xl mx-auto mt-8">
        <div className="bg-[#fef9ec] rounded-lg shadow-lg p-6 border border-yellow-300">
          <h2 className="text-2xl font-semibold text-[#047056] mb-4">📈 Investment Growth Calculator</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#047056]">Amount (KES)</label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#EDC14A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#047056]">Investment Duration (Months)</label>
              <select
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#EDC14A]"
              >
                {[3, 6, 9, 12, 18, 24].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={calculateGrowth}
                className="w-full bg-[#EDC14A] text-[#047056] font-bold py-2 rounded-md hover:bg-yellow-400 transition duration-200"
              >
                Calculate
              </button>
            </div>
          </div>

          {projectedAmount && (
            <div className="mt-4 text-lg font-semibold text-[#047056]">
              Your investment will grow to <span className="text-[#EDC14A]">KES {projectedAmount}</span> in {months} months.
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-8 px-6 pb-12">
        <h2 className="text-xl font-semibold text-[#047056] mb-3">Your Chamas</h2>
        <div className="bg-gray-100 p-4 rounded-md text-gray-600">
          <p>You haven’t joined any Chama yet. Use your invite link or search for a Chama to join.</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;

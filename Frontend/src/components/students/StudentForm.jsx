import { useEffect, useState } from "react";
import { getSeats } from "../../services/seatService";

const StudentForm = ({ initialData = {}, onSubmit, loading = false }) => {
  const [availableSeats, setAvailableSeats] = useState([]);

  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    admissionDate: initialData.admissionDate
      ? initialData.admissionDate.split("T")[0]
      : new Date().toISOString().split("T")[0],
    address: initialData.address || "",

    seatId: "",
    planType: "",

    amount: "",
    paymentMethod: "",
    transactionId: "",
  });

  useEffect(() => {
    const loadSeats = async () => {
      try {
        const res = await getSeats();

        const available = res.data.seats.filter(
          (seat) => seat.status === "Available",
        );

        setAvailableSeats(available);
      } catch (error) {
        console.log(error);
      }
    };
    loadSeats();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
    bg-white
    rounded-3xl
    shadow-xl
    border
    border-slate-100
    p-8
  "
    >
      <div className="mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-bold">Student Enrollment</h2>

          <p className="text-indigo-100 mt-2">
            Assign seat, select membership plan and collect payment.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        />

        <input
          type="date"
          name="admissionDate"
          value={formData.admissionDate}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        />

        {/* Seat Selection */}

        <select
          name="seatId"
          value={formData.seatId}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        >
          <option value="">Select Available Seat</option>

          {availableSeats.map((seat) => (
            <option key={seat._id} value={seat._id}>
               {seat.seatNumber}
            </option>
          ))}
        </select>

        {/* Plan Selection */}

        <select
          name="planType"
          value={formData.planType}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        >
          <option value="">Select Plan</option>

          <option value="Hourly Pass">Hourly Pass</option>

          <option value="Daily Pass">Daily Pass</option>

          <option value="Monthly Pass">Monthly Pass</option>

          <option value="Yearly Pass">Yearly Pass</option>
        </select>
        {/* Amount */}

        <input
          type="number"
          name="amount"
          placeholder="Amount Paid"
          value={formData.amount}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        />

        {/* Payment Method */}

        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="
w-full
px-4
py-3
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
focus:border-indigo-500
transition-all
duration-300
"
          required
        >
          <option value="">Payment Method</option>

          <option value="Cash">Cash</option>

          <option value="UPI">UPI</option>

          <option value="Card">Card</option>
        </select>

        {/* Transaction */}
      </div>

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="
w-full
mt-6
px-4
py-4
rounded-2xl
border
border-slate-200
bg-slate-50
focus:outline-none
focus:ring-2
focus:ring-indigo-500
resize-none
"
        rows={4}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="
mt-8
bg-gradient-to-r
from-indigo-600
to-violet-600
text-white
font-semibold
px-8
py-3
rounded-2xl
shadow-lg
hover:shadow-xl
hover:scale-105
transition-all
duration-300
"
      >
        {loading ? "Saving..." : "Enroll Student"}
      </button>
    </form>
  );
};

export default StudentForm;

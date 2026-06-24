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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
          required
        />

        <input
          type="date"
          name="admissionDate"
          value={formData.admissionDate}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
          required
        />

        {/* Seat Selection */}

        <select
          name="seatId"
          value={formData.seatId}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
          required
        >
          <option value="">Select Available Seat</option>

          {availableSeats.map((seat) => (
            <option key={seat._id} value={seat._id}>
              Seat {seat.seatNumber}
            </option>
          ))}
        </select>

        {/* Plan Selection */}

        <select
          name="planType"
          value={formData.planType}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
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
          className="border rounded-lg px-4 py-3"
          required
        />

        {/* Payment Method */}

        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
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
        className="w-full border rounded-lg px-4 py-3 mt-5"
        rows={4}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="
          mt-6
          bg-indigo-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-indigo-700
        "
      >
        {loading ? "Saving..." : "Create Admission"}
      </button>
    </form>
  );
};

export default StudentForm;

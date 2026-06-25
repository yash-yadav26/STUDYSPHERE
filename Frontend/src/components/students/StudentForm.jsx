import { useEffect, useState } from "react";
import { getSeats } from "../../services/seatService";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Armchair,
  Wallet,
  CreditCard,
  BadgeIndianRupee,
} from "lucide-react";

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

    totalFees: "",
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
        border-slate-200
        overflow-hidden
      "
    >
      {/* Header */}

      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-8">
        <h2 className="text-3xl font-bold text-white">Student Enrollment</h2>

        <p className="text-indigo-100 mt-2">
          Register a new student, assign a seat and collect membership fees.
        </p>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Name */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <User size={18} />
              Student Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={formData.name}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            />
          </div>

          {/* Email */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <Mail size={18} />
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            />
          </div>

          {/* Phone */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <Phone size={18} />
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            />
          </div>

          {/* Admission Date */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <Calendar size={18} />
              Admission Date
            </label>

            <input
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            />
          </div>

          {/* Seat */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <Armchair size={18} />
              Available Seat
            </label>

            <select
              name="seatId"
              value={formData.seatId}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            >
              <option value="">Select Seat</option>

              {availableSeats.map((seat) => (
                <option key={seat._id} value={seat._id}>
                  Seat {seat.seatNumber}
                </option>
              ))}
            </select>
          </div>

          {/* Plan */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <Wallet size={18} />
              Membership Plan
            </label>

            <select
              name="planType"
              value={formData.planType}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            >
              <option value="">Select Plan</option>

              <option value="Hourly Pass">Hourly Pass</option>

              <option value="Daily Pass">Daily Pass</option>

              <option value="Monthly Pass">Monthly Pass</option>

              <option value="Yearly Pass">Yearly Pass</option>
            </select>
          </div>
          {/* Total Fees */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <BadgeIndianRupee size={18} />
              Total Fees
            </label>

            <input
              type="number"
              name="totalFees"
              placeholder="Enter Total Fees"
              value={formData.totalFees}
              onChange={handleChange}
              min="0"
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            />
          </div>

          {/* Paid Amount */}

          <div>
            <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
              <CreditCard size={18} />
              Paid Amount
            </label>

            <input
              type="number"
              name="amount"
              placeholder="Enter Paid Amount"
              value={formData.amount}
              onChange={handleChange}
              min="0"
              max={formData.totalFees || undefined}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            />

            {Number(formData.amount) > Number(formData.totalFees) &&
              formData.totalFees !== "" && (
                <p className="text-red-500 text-sm mt-2">
                  Paid amount cannot be greater than Total Fees.
                </p>
              )}
          </div>

          {/* Remaining Amount */}

          <div>
            <label className="font-medium text-slate-700 mb-2">
              Remaining Amount
            </label>

            <input
              type="number"
              value={Math.max(
                Number(formData.totalFees || 0) - Number(formData.amount || 0),
                0,
              )}
              readOnly
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-100
                text-slate-700
                px-4
                py-3
                cursor-not-allowed
                font-semibold
              "
            />
          </div>

          {/* Payment Method */}

          <div>
            <label className="font-medium text-slate-700 mb-2">
              Payment Method
            </label>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                focus:outline-none
              "
              required
            >
              <option value="">Select Payment Method</option>

              <option value="Cash">Cash</option>

              <option value="UPI">UPI</option>

              <option value="Card">Card</option>
            </select>
          </div>
        </div>

        {/* Address */}

        <div className="mt-6">
          <label className="font-medium text-slate-700 mb-2 flex items-center gap-2">
            <MapPin size={18} />
            Address
          </label>

          <textarea
            name="address"
            placeholder="Enter Complete Address"
            value={formData.address}
            onChange={handleChange}
            rows={4}
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-4
              resize-none
              focus:ring-2
              focus:ring-indigo-500
              focus:outline-none
            "
            required
          />
        </div>

        {/* Button */}

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={
              loading || Number(formData.amount) > Number(formData.totalFees)
            }
            className="
              px-10
              py-3.5
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              font-semibold
              shadow-lg
              hover:shadow-2xl
              hover:scale-105
              transition-all
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Saving..." : "Enroll Student"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;

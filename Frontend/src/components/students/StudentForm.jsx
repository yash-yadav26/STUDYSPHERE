import { useState } from "react";

const StudentForm = ({
  initialData = {},
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    gender: initialData.gender || "",
    address: initialData.address || "",
    status: initialData.status || "ACTIVE",
  });

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
      className="bg-white p-6 rounded-xl shadow"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
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
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
        >
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>
      </div>

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-3 mt-5"
        rows={4}
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
        {loading ? "Saving..." : "Save Student"}
      </button>
    </form>
  );
};

export default StudentForm;
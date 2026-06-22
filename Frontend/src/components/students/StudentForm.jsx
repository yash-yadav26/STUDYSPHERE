import { useState } from "react";

const StudentForm = ({ initialData = {}, onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    admissionDate: initialData.admissionDate
      ? initialData.admissionDate.split("T")[0]
      : "",
    address: initialData.address || "",
    status: initialData.status || "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          placeholder="Phone"
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

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
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
        {loading ? "Saving..." : "Save Student"}
      </button>
    </form>
  );
};

export default StudentForm;

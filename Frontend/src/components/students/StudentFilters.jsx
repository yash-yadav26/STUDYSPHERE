// StudentFilters.jsx

export default function StudentFilters({
  membership,
  setMembership,
}) {
  
  return (
    <select
      value={membership}
      onChange={(e) =>
        setMembership(e.target.value)
      }
      className="border rounded-lg px-4 py-2"
    >
      <option value="">All Memberships</option>
      <option value="Daily">Daily</option>
      <option value="Monthly">Monthly</option>
      <option value="Quarterly">Quarterly</option>
    </select>
  );
}
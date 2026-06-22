import { Search } from "lucide-react";

const StudentSearch = ({ search, setSearch }) => {
  return (
    <div className="relative w-full md:w-80">
      <Search
        size={18}
        className="absolute left-3 top-3 text-gray-400"
      />

      <input
        type="text"
        value={search}
        placeholder="Search students..."
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          pl-10
          pr-4
          py-2
          border
          rounded-lg
          outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />
    </div>
  );
};

export default StudentSearch;
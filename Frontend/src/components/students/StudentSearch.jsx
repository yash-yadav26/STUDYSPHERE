import { Search } from "lucide-react";
const StudentSearch = () => {
  return (
   <div className="relative">
  <Search
    size={18}
    className="absolute left-3 top-3 text-gray-400"
  />

  <input
    type="text"
    placeholder="Search student..."
    className="pl-10 border rounded-lg w-full py-2"
  />
</div>
  );
};

export default StudentSearch;
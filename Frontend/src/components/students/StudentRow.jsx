import { useNavigate } from "react-router-dom";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import StatusBadge from "../common/StatusBadge";

export default function StudentRow({ student ,onDelete,}) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{student.name}</td>
      
      <td>{student.membership}</td>
      <td>{student.slot}</td>
      <td>{student.seatNumber}</td>

      <td>
        <StatusBadge
          status={student.paymentStatus}
        />
      </td>

      <td>
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              navigate(`/students/${student.id}`)
            }
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Eye size={18}/>
          </button>

          <button
            onClick={() =>
              navigate(`/students/edit/${student.id}`)
            }
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Pencil size={18} />
          </button>
          <button
  onClick={() => onDelete(student.id)}
  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
>
  <Trash2 size={18} />
</button>
        </div>
      </td>
    </tr>
  );
}
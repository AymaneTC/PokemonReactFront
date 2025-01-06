import { useContext, useEffect, useState } from "react";
import DresseurRoute from "../../Routes/DresseurRoute.tsx";
import { Boxe } from "../../Classes/Boxe.tsx";
import { NavLink } from "react-router-dom";
import { getBoxes } from "../../services/Boxe.tsx";
import React from "react";

export default function BoxesMain() {
  const { trainerData } = useContext(DresseurRoute);
  const [boxes, setBoxes] = useState<Boxe[]>([]);

  useEffect(() => {
    const boxesFetch = async () => {
      try {
        const data = await getBoxes(trainerData);
        if (data && data.codeStatus === 200 && Array.isArray(data.boxes)) {
          const boxes = data.boxes as Boxe[];
          setBoxes(boxes);
        } else {
          console.error("Invalid response format:", data);
        }
      } catch (error) {
        console.error("Error fetching boxes:", error);
      }
    };
    boxesFetch();
  }, [trainerData]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Boxes</h2>
        <NavLink to="/new-box">
          <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md flex items-center gap-2">
            Create New Box
          </button>
        </NavLink>
      </div>

      {/* BoxesMain Table */}
      {boxes.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Box Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {boxes.map((boxe) => (
                <tr key={boxe.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {boxe.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">Box</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <NavLink 
                      to={`/boxes/${boxe.id}`}
                      className="text-green-600 hover:text-green-900 transition-colors duration-300"
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">No boxes found. Create your first box to get started!</p>
        </div>
      )}
    </div>
  );
}
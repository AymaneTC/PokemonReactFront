import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import DresseurRoute from "../Routes/DresseurRoute.tsx";
import { createBoxe } from "../services/Boxe.tsx";
import React from "react";

export default function CreateNewBoxe() {
  const navigate = useNavigate();
  const [newBoxe, setNewBoxe] = useState("");
  const { trainerData } = useContext(DresseurRoute);

  async function handleCreate(e: { preventDefault: () => void }) {
    e.preventDefault();
    const result = await createBoxe(trainerData, newBoxe);
    if (result.codeStatus == 201) {
      navigate("/");
    } else {
      console.error("Error during creation of the boxe")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create New Box</h2>
          <p className="mt-2 text-sm text-gray-600">Enter a name for your new box</p>
        </div>

        <form onSubmit={handleCreate} className="mt-8 space-y-6">
          <table className="table-auto w-full border-collapse border border-green-200">
            <tbody>
              <tr>
                <td className="px-4 py-2 text-sm font-medium text-gray-700">Box Name</td>
                <td className="px-4 py-2">
                  <input
                    value={newBoxe}
                    name="box"
                    type="text"
                    id="box"
                    onChange={(e) => setNewBoxe(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                    placeholder="Enter box name"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Create Box
          </button>
        </form>
      </div>
    </div>
  );
}

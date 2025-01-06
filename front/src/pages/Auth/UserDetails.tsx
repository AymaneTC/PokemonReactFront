import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DresseurRoute from "../../Routes/DresseurRoute.tsx";

export default function UserDetailsPage() {
    const { trainerData } = useContext(DresseurRoute);
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        login: "",
        birthDate: ""
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (trainerData.trainerId) {
                const storedUserData = localStorage.getItem("loginData");
                if (storedUserData) {
                    const parsedData = JSON.parse(storedUserData);
                    setUserDetails({
                        firstName: parsedData.firstName || "N/A",
                        lastName: parsedData.lastName || "N/A",
                        login: parsedData.login || "N/A",
                        birthDate: parsedData.birthDate || "N/A"
                    });
                }
            }
        };

        fetchUserDetails();
    }, [trainerData]);

    if (!trainerData || !trainerData.trainerId) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg font-semibold">No user data available. Please register first.</p>
                <Link to="/register" className="text-blue-500 underline ml-2">Go to Register</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
                <h2 className="text-2xl font-bold text-center">User Details</h2>
                <ul className="space-y-4">
                    <li><strong>Trainer ID:</strong> {trainerData.trainerId}</li>
                    <li><strong>First Name:</strong> {userDetails.firstName}</li>
                    <li><strong>Last Name:</strong> {userDetails.lastName}</li>
                    <li><strong>Email:</strong> {userDetails.login}</li>
                    <li><strong>Birth Date:</strong> {userDetails.birthDate}</li>
                </ul>
                <div className="flex justify-center mt-6">
                    <Link to="/" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">Return Home</Link>
                </div>
            </div>
        </div>
    );
}

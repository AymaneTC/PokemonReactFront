import { useContext } from "react"
import DresseurRoute from "./DresseurRoute.tsx"
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

    const { trainerData } = useContext(DresseurRoute);

    if (!trainerData.accessToken || !trainerData.trainerId || trainerData.trainerId === 0 || trainerData.accessToken === "") {
        return <Navigate to="/login" replace/>
    }

    return <Outlet />
}
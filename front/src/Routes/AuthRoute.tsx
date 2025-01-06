import { useContext } from "react";
import DresseurRoute from "./DresseurRoute.tsx";

export default function AuthRoute() {
    const { trainerData } = useContext(DresseurRoute);

    if (!trainerData.trainerId || !trainerData.accessToken || trainerData.accessToken === "" || trainerData.trainerId === 0) {
        return false;
    } else {
        return true;
    }
}
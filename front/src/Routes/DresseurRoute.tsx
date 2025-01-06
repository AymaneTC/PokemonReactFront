import { ReactNode, createContext, useState } from "react";
import { TrainerType } from "../Classes/Dresseur.tsx";

export const defaultTrainerData: TrainerType = {
    accessToken: "",
    trainerId: 0
}

const DresseurRoute = createContext<{
    trainerData: TrainerType;
    setTrainerData: (data: TrainerType) => void;
}>({
    trainerData: defaultTrainerData,
    setTrainerData: () => undefined
});

export const TrainerContextProvider = ({ children }: { children: ReactNode }) => {
    const [trainerData, setTrainerData] = useState(defaultTrainerData);
    return (
        <DresseurRoute.Provider value={{trainerData, setTrainerData}}>
            {children}
        </DresseurRoute.Provider>
    )
}

export default DresseurRoute
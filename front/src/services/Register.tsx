import {RegisterInterface} from "./Auth.tsx";

export const Register = async (
    firstName:string,
    lastName: string,
    login: string,
    birthDate: string,
    password: string
    ) : Promise<RegisterInterface> => {
        const url = "http://localhost:8000/register";
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                login,
                birthDate,
                password
            })
        };

        try {
            const result = await fetch(url, options);
            const data = await result.json();

            if (data.accessToken) {
                return {
                    accessToken: data.accessToken,
                    trainerId: data.trainerId,
                    codeStatus: 201
                }
            } else {
                return {
                    codeStatus: 400,
                    message: "Your request doesn't have the fields expected"
                }
            }
        } catch (error) {
            return {
                codeStatus: 404
            }
        }
}
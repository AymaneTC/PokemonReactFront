import { LoginInterface } from "./Auth.tsx";

export const Login = async (
    login: string,
    password: string
): Promise<LoginInterface> => {
    const url = "http://localhost:8000/login";
    const requestPayload = {
        login,
        password
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestPayload)
    };

    const handleResponse = (response: Response): Promise<LoginInterface> => {
        return response.json().then(data => {
            if (data.accessToken) {
                return {
                    accessToken: data.accessToken,
                    trainerId: data.trainerId,
                    codeStatus: 200
                };
            }
            return {
                codeStatus: 400,
                message: "Incorrect credentials, try again please"
            };
        });
    };

    const handleError = (): LoginInterface => ({
        codeStatus: 404
    });

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            return handleError();
        }
        return await handleResponse(response);
    } catch (error) {
        return handleError();
    }
};

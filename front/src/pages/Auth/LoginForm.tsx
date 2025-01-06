import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Login } from "../../services/Login.tsx"
import { TrainerType } from "../../Classes/Trainer.tsx"
import TrainerRoute from "../../Routes/TrainerRoute.tsx"

export default function LoginForm() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()
  const { setTrainerData } = useContext(TrainerRoute)

  useEffect(() => {
    const storedLoginData = localStorage.getItem("loginData")
    if (storedLoginData) {
      const parseData: TrainerType = JSON.parse(storedLoginData)
      setTrainerData(parseData)
      navigate("/")
    }
  })

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const result = await Login(login, password)

    if (result.codeStatus == 200) {
      const data: TrainerType = {
        accessToken: result.accessToken || "",
        trainerId: result.trainerId || 0,
      }
      localStorage.setItem("loginData", JSON.stringify(data))
      setTrainerData(data)
      navigate("/my-boxes")
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Bienvenue</h2>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label htmlFor="login" className="block text-sm font-medium text-gray-700">
            Nom d’utilisateur/ Email
            </label>
            <input
              id="login"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de Passe
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">Wrong Login or Password!</p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  )
}
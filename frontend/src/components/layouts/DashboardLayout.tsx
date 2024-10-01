import { useEffect } from "react"
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"

const DashboardLayout = () => {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    console.log("test", userId);

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in")
        }
    }, [isLoaded])

    if (!isLoaded) {
        "Loading..."
    }

    return (
        <Outlet />
    )
}

export default DashboardLayout
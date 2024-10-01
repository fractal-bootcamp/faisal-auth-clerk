import { Link } from "react-router-dom";

const DashboardPage = () => {
    return (
        <div>
            <h1>
                Dashboard page
            </h1>
            <p>
                This is a protected page.
            </p>
            <ul>
                <li>
                    <Link to="/dashboard/invoices">Invoices</Link>
                </li>
                <li>
                    <Link to="/">Return to Index page</Link>
                </li>
            </ul>
        </div>
    )
}

export default DashboardPage
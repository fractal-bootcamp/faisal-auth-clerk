import { Link } from "react-router-dom";

const InvoicesPage = () => {
    return (
        <div>
            <h1>
                Invoices Page
            </h1>
            <p>
                This is a protected page.
            </p>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/">Retunr to Index Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default InvoicesPage
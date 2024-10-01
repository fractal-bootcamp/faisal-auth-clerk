import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>
                This is a public page meant to containt a contant.
            </p>
            <ul>
                <li>
                    <Link to="/">Return to Index page</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}
export default ContactPage
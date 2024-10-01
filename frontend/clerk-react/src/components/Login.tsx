import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Login = () => {
    return (
        <nav>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}

export default Login
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './components/layouts/RootLayout'
import DashboardLayout from './components/layouts/DashboardLayout'

import IndexPage from './components/routes'
import ContactPage from './components/routes/Contact'
import DashboardPage from './components/routes/Dashboard'
import InvoicesPage from './components/routes/Invoices'
import SignInPage from './components/routes/Signin'
import SignUpPage from './components/routes/Signout'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
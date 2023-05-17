import App from './App'
import { DisableButtonPattern } from './pages/DisableButtonPattern'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/disable-button-pattern',
        element: <DisableButtonPattern />,
    },
])

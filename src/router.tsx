import App from './App'
import { DisableButtonPattern } from './pages/DisableButtonPattern'
import { SidePanelPage } from './pages/SidePanel'
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
    {
        path: '/side-panel',
        element: <SidePanelPage />,
    },
])

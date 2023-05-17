import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { DisableButtonPattern } from './pages/DisableButtonPattern'
import { SidePanelPage } from './pages/SidePanelPage'
import { EditableBoxPage } from './pages/EditableBoxPage'

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
    {
        path: '/editable-box',
        element: <EditableBoxPage />,
    },
])

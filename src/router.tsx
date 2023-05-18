import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { DisableButtonPattern } from './pages/DisableButtonPattern'
import { ButtonWhenLoading } from './pages/ButtonWhenLoading'
import { SelectMenu } from './pages/SelectMenu'
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
        path: '/button-when-loading',
        element: <ButtonWhenLoading />,
    },
    {
        path: '/select-menu',
        element: <SelectMenu />,
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

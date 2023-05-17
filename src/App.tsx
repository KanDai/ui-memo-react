import { Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/disable-button-pattern">
                        非活性ボタンのパターン
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default App

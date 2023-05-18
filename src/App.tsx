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
                <li>
                    <Link to="/button-when-loading">通信時のボタン</Link>
                </li>
                <li>
                    <Link to="/select-menu">セレクトメニュー</Link>
                </li>
                <li>
                    <Link to="/side-panel">サイドパネル</Link>
                </li>
                <li>
                    <Link to="/editable-box">編集可能なボックス</Link>
                </li>
            </ul>
        </div>
    )
}

export default App

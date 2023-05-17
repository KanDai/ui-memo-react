import { Button } from 'src/components/Button'

export const DisableButtonPattern = () => {
    return (
        <div>
            <div>
                <p>通常のボタン</p>
                <Button theme="primary" onClick={() => console.log('click')}>
                    ボタン
                </Button>
            </div>
            <div>
                <p>CSSで見た目変更 + pointer-events: none</p>
                <Button
                    theme="primary"
                    status="disabled"
                    onClick={() => console.log('click')}
                >
                    ボタン
                </Button>
            </div>
            <div>
                <p>tabIndex="-1" を追加</p>
                <Button
                    theme="primary"
                    status="disabled"
                    tabIndex={-1}
                    onClick={() => console.log('click')}
                >
                    ボタン
                </Button>
            </div>
            <div>
                <p>disabled属性</p>
                <Button
                    theme="primary"
                    disabled
                    onClick={() => console.log('click')}
                >
                    ボタン
                </Button>
            </div>
        </div>
    )
}

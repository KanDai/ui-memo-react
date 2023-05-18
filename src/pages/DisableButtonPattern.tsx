import { Button } from 'src/components/Button'

export const DisableButtonPattern = () => {
    return (
        <div
            style={{
                padding: '48px',
            }}
        >
            <div>
                <p>通常のボタン</p>
                <Button onClick={() => console.log('click')}>ボタン</Button>
            </div>
            <div>
                <p>CSSで見た目変更 + pointer-events: none</p>
                <Button status="disabled" onClick={() => console.log('click')}>
                    ボタン
                </Button>
            </div>
            <div>
                <p>tabIndex="-1" を追加</p>
                <Button
                    status="disabled"
                    tabIndex={-1}
                    onClick={() => console.log('click')}
                >
                    ボタン
                </Button>
            </div>
            <div>
                <p>disabled属性</p>
                <Button disabled onClick={() => console.log('click')}>
                    ボタン
                </Button>
            </div>
        </div>
    )
}

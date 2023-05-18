import { useCallback, useState } from 'react'
import { Button } from 'src/components/Button'

export const ButtonWhenLoading = () => {
    const [isLoading, setIsLoading] = useState(false)

    const save = useCallback(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [setIsLoading])

    return (
        <div
            style={{
                padding: '48px',
            }}
        >
            <div>
                <Button onClick={save} disabled={isLoading}>
                    保存
                </Button>
            </div>
            {isLoading && <div>保存中...</div>}
        </div>
    )
}

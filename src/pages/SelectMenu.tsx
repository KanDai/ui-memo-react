import { useCallback, useState } from 'react'
import { Select } from 'src/components/Select'

export const SelectMenu = () => {
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
                <Select onClick={save} disabled={isLoading}>
                    セレクト
                </Select>
            </div>
        </div>
    )
}

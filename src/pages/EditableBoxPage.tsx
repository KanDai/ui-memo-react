import { EditableBox } from 'src/components/EditableBox'
import { Button } from 'src/components/Button'
import { useRef, useState } from 'react'

export const EditableBoxPage = () => {
    const [items, setItems] = useState<string[]>([''])
    const [isScrollable, setIsScrollable] = useState(false)
    const itemAreaRef = useRef<HTMLDivElement>(null)

    const addItem = () => {
        setItems([...items, ''])

        setTimeout(() => {
            itemAreaRef.current?.scrollTo({
                top: itemAreaRef.current.scrollHeight,
                behavior: 'smooth',
            })

            if (
                itemAreaRef.current &&
                itemAreaRef.current.scrollHeight >
                    itemAreaRef.current.clientHeight
            ) {
                setIsScrollable(true)
            }
        }, 0)
    }

    return (
        <div
            style={{
                display: 'flex',
                gap: '16px',
                padding: '48px',
            }}
        >
            <p>
                <Button theme="primary" onClick={addItem}>
                    追加
                </Button>
            </p>
            <div
                ref={itemAreaRef}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    // padding: isScrollable ? '16px 8px 16px 16px' : '16px',
                    padding: '16px',
                    backgroundColor: '#eee',
                    height: '500px',
                    width: '440px',
                    overflow: 'auto',
                }}
            >
                {items.map((_, i) => (
                    <EditableBox key={i} />
                ))}
            </div>
        </div>
    )
}

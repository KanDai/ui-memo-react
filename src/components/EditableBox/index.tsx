import clsx from 'clsx'
import styles from './styles.module.scss'
import { useCallback, useRef, useState } from 'react'
import { Button } from '../Button'

type Props = {}

export const EditableBox = ({}: Props) => {
    const textarea = useRef<HTMLTextAreaElement>(null)
    const [isSelected, setIsSelected] = useState(false)
    const [isEditable, setIsEditable] = useState(false)
    const [composing, setComposition] = useState(false)

    const [value, setValue] = useState('')

    const resize = () => {
        if (!textarea.current) return

        textarea.current.style.height = ''
        const style = window.getComputedStyle(textarea.current)
        const height = parseFloat(style.height)
        const scrollHeight = textarea.current.scrollHeight

        if (scrollHeight <= height) return

        textarea.current.style.height = `${scrollHeight}px`
    }

    const onKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key == 'Enter') {
                event.preventDefault()
                if (composing) {
                    return
                }
                setIsSelected(false)
                setIsEditable(false)
            }
        },
        [composing]
    )

    return (
        <div className={styles.wrapper}>
            <div
                className={clsx(
                    styles.textAreaWrapper,
                    isSelected && styles.selected
                )}
            >
                {isEditable ? (
                    <textarea
                        ref={textarea}
                        className={styles.textarea}
                        onCompositionStart={() => setComposition(true)}
                        onCompositionEnd={() => setComposition(false)}
                        maxLength={200}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                            resize()
                        }}
                        onFocus={(e) => {
                            e.currentTarget.setSelectionRange(200, 200)
                            setTimeout(resize, 0)
                        }}
                        onKeyDown={onKeyDown}
                        autoFocus
                    />
                ) : (
                    <div
                        className={styles.text}
                        onClick={() => setIsSelected(true)}
                        onDoubleClick={() => setIsEditable(true)}
                    >
                        {value.length > 0 ? (
                            <span>{value}</span>
                        ) : (
                            <span className={styles.placeholder}>
                                入力してください
                            </span>
                        )}
                    </div>
                )}
            </div>
            {isSelected && !isEditable && (
                <Button onClick={() => setIsEditable(true)}>編集する</Button>
            )}
            {isSelected && isEditable && (
                <Button
                    onClick={() => {
                        setIsEditable(false)
                        setIsSelected(false)
                    }}
                >
                    更新
                </Button>
            )}
        </div>
    )
}

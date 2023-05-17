import styles from './styles.module.scss'
import { useCallback, useMemo, useState } from 'react'

type Props = {
    initialWidth?: number
    min?: number
    max?: number
    children: React.ReactNode
}

export const SidePanel = ({
    initialWidth = 300,
    min = 150,
    max = 450,
    children,
}: Props) => {
    const [width, setWidth] = useState(initialWidth)

    const onPressResize = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            document.body.style.cursor = 'col-resize'
            const start = e.pageX
            const currentWidth = width

            const resizePanel = (e: MouseEvent) => {
                const move = e.pageX - start
                setWidth(currentWidth + move)
            }
            document.addEventListener('mousemove', resizePanel)

            document.addEventListener(
                'mouseup',
                () => {
                    document.body.style.cursor = ''
                    document.removeEventListener('mousemove', resizePanel)
                },
                { once: true }
            )
        },
        [width, setWidth]
    )

    const styleVars = useMemo(() => {
        return {
            '--width': `${width}px`,
            '--min': `${min}px`,
            '--max': `${max}px`,
        } as React.CSSProperties
    }, [width, min, max])

    return (
        <div className={styles.wrapper} style={styleVars}>
            <div className={styles.panel}>{children}</div>
            <div className={styles.handle} onMouseDown={onPressResize} />
        </div>
    )
}

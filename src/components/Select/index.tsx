import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { useOutsideClick } from 'src/hooks/useOutsideClick'

export const Select = () => {
    const [value, setValue] = useState('')
    const [isShowMenu, setIsShowMenu] = useState(false)
    const input = useRef<HTMLInputElement>(null)
    const menu = useRef<HTMLUListElement>(null)
    const wrapper = useOutsideClick(() => {
        setIsShowMenu(false)
    })

    const handleKeyDownInput = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setIsShowMenu(!isShowMenu)
        }

        if (event.key === 'ArrowDown' && isShowMenu) {
            const first = menu.current?.firstElementChild
            const menuButton = first?.firstElementChild as HTMLButtonElement
            menuButton?.focus()
        }

        if (event.key === 'ArrowUp' && isShowMenu) {
            const last = menu.current?.lastElementChild
            const menuButton = last?.firstElementChild as HTMLButtonElement
            menuButton?.focus()
        }
    }

    const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setValue(event.currentTarget.value)
        setIsShowMenu(false)
    }

    const handleKeyDownMenu = (
        event: React.KeyboardEvent<HTMLButtonElement>
    ) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setValue(event.currentTarget.value)
        }

        if (event.key === 'ArrowDown') {
            const parent = event.currentTarget.parentElement
            const next = parent?.nextElementSibling

            if (next) {
                const menuButton = next.firstElementChild as HTMLButtonElement
                menuButton?.focus()
            } else {
                input.current?.focus()
            }
        }

        if (event.key === 'ArrowUp') {
            const parent = event.currentTarget.parentElement
            const prev = parent?.previousElementSibling

            if (prev) {
                const menuButton = prev.firstElementChild as HTMLButtonElement
                menuButton?.focus()
            } else {
                input.current?.focus()
            }
        }
    }

    return (
        <div className={styles.wrapper} ref={wrapper}>
            <input
                ref={input}
                className={styles.input}
                type="text"
                value={value}
                readOnly
                onClick={() => setIsShowMenu(!isShowMenu)}
                onKeyDown={handleKeyDownInput}
            />
            {isShowMenu && (
                <ul className={styles.menu} ref={menu}>
                    <li className={styles.menuItem}>
                        <button
                            type="button"
                            onClick={handleClickMenu}
                            onKeyDown={handleKeyDownMenu}
                            value="メニュー1"
                        >
                            メニュー1
                        </button>
                    </li>
                    <li className={styles.menuItem}>
                        <button
                            type="button"
                            onClick={handleClickMenu}
                            onKeyDown={handleKeyDownMenu}
                            value="メニュー2"
                        >
                            メニュー2
                        </button>
                    </li>
                    <li className={styles.menuItem}>
                        <button
                            type="button"
                            onClick={handleClickMenu}
                            onKeyDown={handleKeyDownMenu}
                            value="メニュー3"
                        >
                            メニュー3
                        </button>
                    </li>
                </ul>
            )}
        </div>
    )
}

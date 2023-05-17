import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './styles.module.scss'

type Props = {
    theme?: 'default' | 'primary'
    status?: 'normal' | 'disabled'
} & React.ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
    { className, theme = 'default', status = 'normal', ...props },
    ref
) {
    return (
        <button
            {...props}
            ref={ref}
            className={clsx(className, styles.button)}
            data-status={status}
            data-theme={theme}
        />
    )
})

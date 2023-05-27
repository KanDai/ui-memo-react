import { useEffect, useRef } from 'react'

export const useOutsideClick = <T extends HTMLElement>(
    callback: () => void,
    options?: AddEventListenerOptions
) => {
    const ref = useRef<T | null>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }

        document.addEventListener('click', handleClick, options)
        return () => document.removeEventListener('click', handleClick, options)
    }, [callback, options])

    return ref
}

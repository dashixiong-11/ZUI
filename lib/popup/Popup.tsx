import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ReactDOM from "react-dom";
import './Popup.scss'

type Props = {
    title: string,
    content: string,
    trigger?: 'click' | 'hover',
    placement: 'top' | 'bottom' | 'right' | 'left'
}

type Table = {
    top: object,
    bottom: object,
    left: object,
    right: object,
}

export const Popup: React.FC<Props> = props => {
    const div = useRef<HTMLDivElement>(null)
    const contentWrapper = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const {title, content, placement, trigger} = props
    const boundingClientRect = useMemo(() =>
        div.current && div.current.getBoundingClientRect()
        , [div.current, window.scrollY])

    const left = useMemo(() => {
        return boundingClientRect && boundingClientRect.left || 0
    }, [div.current, window.scrollY, window.scrollX])
    const top = useMemo(() => {
        return boundingClientRect && boundingClientRect.top || 0
    }, [div.current, window.scrollY, window.scrollX])
    const width = useMemo(() => {
        return boundingClientRect && boundingClientRect.width || 0
    }, [div.current])
    const height = useMemo(() => {
        return boundingClientRect && boundingClientRect.height || 0
    }, [div.current])

    const style = useMemo<object>(() => {

        const table: Table = {
            top: {
                top: `${top + window.scrollY - 10}px`,
                left: `${left + window.scrollX + width / 2}px`,
                transform: `translate(-50%,-100%)`
            },
            left: {
                top: `${top + window.scrollY + height / 2}px`,
                left: `${left + window.scrollX - 10}px`,
                transform: `translate(-100%,-50%)`
            },
            right: {
                top: `${top + window.scrollY + height / 2}px`,
                left: `${left + window.scrollX + width + 10}px`,
                transform: `translate(0,-50%)`
            },
            bottom: {
                top: `${top + window.scrollY + height + 10}px`,
                left: `${left + window.scrollX + width / 2}px`,
                transform: `translate(-50%,0)`
            },
        }
        return table[placement]
    }, [placement, div.current, window.scrollY, window.scrollX])

    const open: EventListener = useCallback(
        () => {
            setVisible(true)
        }, [window.scrollY]
    )

    const close: EventListener = useCallback(
        () => {
            setVisible(false)
            document.removeEventListener('click', onClickDocument)
        }, [window.scrollY]
    )

    const onClick = () => {
        setVisible(true)

        setTimeout(() => {
            document.addEventListener('click', onClickDocument)
        }, 1)
    }

    const onClickDocument: EventListener | EventListenerObject = (e: any) => {
        if (contentWrapper.current && contentWrapper.current.contains(e.target)) return
        if (div.current && div.current.contains(e.target)) return
        close(e)
    }

    useEffect(() => {
        if (div.current) {
            if (trigger === 'click') {
                div.current.addEventListener('click', onClick)
            } else if (trigger === 'hover') {
                div.current.addEventListener('mouseenter', open)
                div.current.addEventListener('mouseleave', close)
            }

        }
    }, [div])
    const node = visible ? <>
            {/*
            <div className="orz-popup-mask" onClick={() => setVisible(false)}/>
*/}
            <div ref={contentWrapper} className={`orz-popup orz-popup-${placement}`} style={style}>
                <span className="orz-popup-close">
                    {title && title}
                </span>
                <div className="orz-popup-content">
                    {content}
                </div>
            </div>
        </>
        : null


    return <div>
        <div ref={div} className='orz-popup-wrapper'> {props.children} </div>

        {ReactDOM.createPortal(node, document.body)}
    </div>
}

Popup.defaultProps = {
    placement: 'top',
    trigger: 'click'
}
export default Popup


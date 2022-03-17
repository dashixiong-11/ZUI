import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ReactDOM from "react-dom";
import './Popup.scss'

type Props = {
    title?: string,
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
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const GetBoundingClientRect = () => {
        const {width, height, top, left} = div.current && div.current.getBoundingClientRect() || {
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }
        setTop(top)
        setLeft(left)
        setWidth(width)
        setHeight(height)

    }

    const style = useMemo<object>(() => {

        const table: Table = {
            top: {
                top: `${top - 10}px`,
                left: `${left + width / 2}px`,
                transform: `translate(-50%,-100%)`
            },
            left: {
                top: `${top + height / 2}px`,
                left: `${left - 10}px`,
                transform: `translate(-100%,-50%)`
            },
            right: {
                top: `${top + height / 2}px`,
                left: `${left + width + 10}px`,
                transform: `translate(0,-50%)`
            },
            bottom: {
                top: `${top + height + 10}px`,
                left: `${left + width / 2}px`,
                transform: `translate(-50%,0)`
            },
        }
        return table[placement]
    }, [top, left, width, height])

    const open: EventListener = () => setVisible(true)

    useEffect(() => {
        GetBoundingClientRect()
        window.addEventListener('scroll', e => {
            GetBoundingClientRect()
        }, true)
    }, [])


    const close: EventListener = useCallback(
        () => {
            setVisible(false)
            document.removeEventListener('click', onClickDocument)
        }, []
    )

    const onClick = () => {
        setVisible(true)
        setTimeout(() => {
            document.addEventListener('click', onClickDocument)
        }, 1)
    }

    const onClickDocument: EventListener | EventListenerObject = (e) => {
        if (contentWrapper.current && e.target instanceof Node && contentWrapper.current.contains(e.target)) return
        if (div.current && e.target instanceof Node && div.current.contains(e.target)) return
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
            <div ref={contentWrapper} className={`orz-popup orz-popup-${placement}`} style={style}>
                {title && <span className="orz-popup-close">
                    {title} </span>}
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


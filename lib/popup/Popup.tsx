import React from 'react';
import ReactDOM from "react-dom";
import './Popup.scss'

type Props = {
    show: boolean,
    height?: string,
    position?: 'top' | 'bottom',
    title?: string,
    onMaskClose?: boolean,
    onClose: () => void
}
export const Popup: React.FC<Props> = props => {
    const {show, height, position, title, onMaskClose, onClose} = props
    const close: React.MouseEventHandler = () => {
        onMaskClose && onClose()
    }

    const node = show ?
        <>
            <div className="orz-popup-mask" onClick={close}/>
            <div className="orz-popup" style={{[`${position}`]: 0}}>
                    <span className="orz-popup-close" onClick={onClose}>
                        {title && title}
                    </span>
                <div className="orz-popup-content" style={{height: height && height}}>
                    {props.children}
                </div>
            </div>
        </>
        : null
    return ReactDOM.createPortal(node, document.body)
}

Popup.defaultProps = {
    position: 'bottom'
}
export default Popup


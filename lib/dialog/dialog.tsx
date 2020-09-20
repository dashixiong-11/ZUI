import React, {Fragment, ReactElement, ReactNode} from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassNameMaker} from "../classes";


interface Props {
    visible: boolean,
    buttons?: ReactElement[],
    title?: ReactNode,
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean,
    closeButton?: boolean
}

interface IButton {
    text: string,
    callBack: () => void
}

const sc = scopedClassNameMaker('orz-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = e => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = e => {
        if (props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    const x = props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={onClickMask}></div>
            <div className={sc()}>
                <header className={sc('header')}>
                    {
                        props.closeButton && <div className={sc('icon')} onClick={onClickClose}>
                            <Icon name='close'/>
                        </div>
                    }
                    <span> {props.title && props.title} </span>
                </header>
                <main className={sc('main')}>{props.children}</main>
                {props.buttons && props.buttons.length > 0 && <footer className={sc('footer')}>
                    {props.buttons.map((button, index) => (
                        React.cloneElement(button, {key: index})
                    ))}
                </footer>}
            </div>
        </Fragment>
        : null
    return (
        ReactDOM.createPortal(x, document.body)
    )
}
Dialog.defaultProps = {closeOnClickMask: true, closeButton: false}

const modal = (title: ReactNode, content: ReactNode, buttons?: ReactElement[]) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog visible={true} closeButton={true} title={title} buttons={buttons} onClose={onClose}> {content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose
}


const alert = (title: ReactNode, content: ReactNode, buttons?: IButton[]) => {

    const yes = () => {
        onClose()
        buttons && buttons[0].callBack()
    }
    const buttonsNode = [
        <div className="orz-dialog-footer-confirm">
            <button onClick={yes}>{buttons && buttons[0].text || '确定'}</button>
        </div>
    ]
    const onClose = modal(title, content, buttonsNode)
}

const confirm = (title: ReactNode, content: ReactNode, buttons?: IButton[]) => {
    const onYes = () => {
        onClose()
        buttons && buttons.length > 0 && buttons[0].callBack()
    }
    const onNo = () => {
        onClose()
        buttons && buttons.length > 0 && buttons[1].callBack()
    }
    const buttonsNode = [
        <div className="orz-dialog-footer-confirm">
            <button onClick={onYes}>{buttons && buttons[0].text || '确定'}</button>
            <button onClick={onNo}>{buttons && buttons[1].text || '取消'}</button>
        </div>
    ]
    const onClose = modal(title, content, buttonsNode)
}


export {alert, confirm, modal}
export default Dialog
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
    closeOnClickMask?: boolean
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
                <div className={sc('icon')} onClick={onClickClose}>
                    <Icon name='close'/>
                </div>
                <header className={sc('header')}>
                    {props.title && props.title}
                </header>
                <main className={sc('main')}>{props.children}</main>
                {
                    props.buttons && props.buttons.length > 0 && <footer className={sc('footer')}>
                        {props.buttons.map((button, index) => (
                            React.cloneElement(button, {key: index})
                        ))}
                    </footer>
                }

            </div>
        </Fragment>
        : null
    return (
        ReactDOM.createPortal(x, document.body)
    )
}
Dialog.defaultProps = {closeOnClickMask: false}

const modal = (title: ReactNode, content: ReactNode, buttons?: ReactElement[]) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog visible={true} title={title} buttons={buttons} onClose={onClose}> {content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose
}

const alert = (title: ReactNode, content: ReactNode, buttons: ReactElement[]) => {
    modal(title, content, buttons)
}

const confirm = (title:ReactNode,content: ReactNode, yes?: () => void, no?: () => void) => {

    const onYes = () => {
        onClose()
        yes && yes()
    }
    const onNo = () => {
        console.log('no');
        onClose()
        no && no()
    }
    const buttons = [<div onClick={onYes}>确定</div>, <div onClick={onNo}>关闭</div>]
    const onClose  = modal(title,content,buttons)
}


export {alert, confirm, modal}
export default Dialog
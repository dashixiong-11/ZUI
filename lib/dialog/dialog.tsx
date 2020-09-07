import React, {Fragment, ReactElement} from 'react'
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassNameMaker} from "../classes";


interface Props {
    visible: boolean,
    buttons: ReactElement[],
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean
}


const sc = scopedClassNameMaker('orz-dialog')

const dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = e => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = e => {
        if (props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    return (
        props.visible ?
            <Fragment>
                <div className={sc('mask')} onClick={onClickMask}></div>
                <div className={sc()}>
                    <div className={sc('icon')} onClick={onClickClose}>
                        <Icon name='close'/>
                    </div>
                    <header className={sc('header')}>
                        title
                    </header>
                    <main className={sc('main')}>{props.children}</main>
                    <footer className={sc('footer')}>
                        {props.buttons.map((button, index) => (
                            React.cloneElement(button, {key: index})
                        ))}
                    </footer>
                </div>
            </Fragment>
            : null
    )
}
dialog.defaultProps = {closeOnClickMask: false}

export default dialog
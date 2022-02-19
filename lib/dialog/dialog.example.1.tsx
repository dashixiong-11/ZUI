import React, {useState} from 'react'
import Dialog from '../dialog/dialog'
import ORZButton from "../Button/Button";

const DialogExample: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)

    return <div>
        <ORZButton onClick={() => {
            setVisible(!visible)
        }}> 自定义按钮
        </ORZButton>
        <ORZButton onClick={() => {
            setVisible2(!visible2)
        }}> 无按钮
        </ORZButton>
        <ORZButton onClick={() => {
            setVisible3(!visible3)
        }}> 默认有按钮
        </ORZButton>
        <ORZButton onClick={() => {
            setVisible4(!visible4)
        }}> 带标题的dialog
        </ORZButton>
        <Dialog visible={visible} closeOnClickMask buttons={[
            <button onClick={() => setVisible(false)}>cancel</button>,
            <button onClick={() => setVisible(false)}>ok</button>
        ]} onClose={() => {
            setVisible(false)
        }}>
            <div>dialog1</div>
        </Dialog>
        <Dialog visible={visible2} closeButton closeOnClickMask buttons={null}
                onClose={() => {
                    setVisible2(false)
                }}>
            <div>dialog2</div>
        </Dialog>
        <Dialog visible={visible3} closeOnClickMask onOk={() =>
            setVisible3(false)}
                onCancel={() => setVisible3(false)}
                onClose={() => {
                    setVisible3(false)
                }}>
            <div>dialog3</div>
        </Dialog>
        <Dialog visible={visible4} closeButton title='这是标题'
                closeOnClickMask buttons={null} onClose={() => {
            setVisible4(false)
        }}>
            <div>带标题的dialog</div>
        </Dialog>
    </div>
}

export default DialogExample
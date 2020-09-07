import React, {useState} from 'react'
import Dialog from '../dialog/dialog'

const DialogDemo: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    return <div>
        <button onClick={() => {
            setVisible(!visible)
        }}> 确定
        </button>
        <Dialog visible={visible} buttons={[
            <button>cancel</button>,
            <button>ok</button>
        ]} onClose={() => {
            setVisible(false)
        }}>
            <div>props</div>
        </Dialog>
    </div>
}

export default DialogDemo
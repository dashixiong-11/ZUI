import React, {useState} from 'react'
import Dialog,{alert,confirm} from '../dialog/dialog'

const DialogDemo: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)


    return <div>
        <button onClick={() => {
            setVisible(!visible)
        }}> 确定
        </button>
        <Dialog visible={visible} closeOnClickMask buttons={[
            <button>cancel</button>,
            <button>ok</button>
        ]} onClose={() => {
            setVisible(false)
        }}>
            <div>props</div>
        </Dialog>
        <button onClick={()=>{ alert('标题','内容',[<div>1</div>,<div>2</div>])}}>alert</button>
        <button onClick={()=>{ confirm('标题','内容')}}>confirm</button>
    </div>
}

export default DialogDemo
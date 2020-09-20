import React, {useState} from 'react'
import Dialog, {alert,confirm,modal} from '../dialog/dialog'

const DialogDemo: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)

    const content = <div style={{height:'400px',overflow:'auto'}}>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
    </div>

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

        <button onClick={()=>{ alert('标题','内容',[{text:'知道了',callBack:()=>{ console.log('知道了！')}}])}}>alert</button>
        <br/>
        <button onClick={()=>{ confirm('标题',content)}}>confirm</button>
        <br/>
        <button onClick={()=>{ modal('标题','内容')}}>modal</button>
    </div>
}

export default DialogDemo
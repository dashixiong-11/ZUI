import React from 'react'
import {alert, confirm} from './dialog'
import ORZButton from "../Button/Button";

const DialogExample: React.FunctionComponent = () => {

    const content = <div style={{height: '400px', overflow: 'auto'}}>
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
        <ORZButton onClick={() => {
            alert('标题', '内容', [{
                text: '知道了', callBack: () => {
                    console.log('知道了！')
                } }]) }}>
            alert
        </ORZButton>
        <ORZButton onClick={() => {
            confirm('标题', content, [{
                text: '确定', callBack: () => {
                    console.log('确定')
                }
            }, {
                text: '取消', callBack: () => {
                    console.log('取消')
                }
            }])
        }}>confirm
        </ORZButton>
    </div>
}

export default DialogExample
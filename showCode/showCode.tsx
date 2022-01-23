import React from 'react'
import ReactDOM from "react-dom";
import './showCode.scss'
import Demo from "../demo";

type Props = {
    codeList: CodeList
}
const ShowCode: React.FunctionComponent<Props> = (props) => {
    const {codeList} = props

    const x = <div>
        {codeList.map(data =>
            <div>
                <h3 style={{lineHeight: 2}}>{data.title}</h3>
                {data.example}
            </div>
        )}
    </div>
    return (
        <div className="show-code-wrapper">
            <div className="show-code-list">
                {codeList.map((data) => <Demo code={data.code} describe={data.describe} title={data.title}/>)}
            </div>
            <iframe className='show-code' width={375} height={600}>
            </iframe>
            {
                ReactDOM.createPortal(x, document.body)
            }
        </div>
    )
}

export default ShowCode

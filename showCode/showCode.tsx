import * as React from 'react'
import './showCode.scss'
import Demo from "../demo";

type Props = {
    codeList: CodeList
}
const ShowCode: React.FunctionComponent<Props> = (props) => {
    const {codeList} = props

    return (
        <div className="show-code-wrapper">
            <div className="show-code-list">
                {codeList.map((data) => <Demo code={data.code} describe={data.describe} title={data.title}/>)}
            </div>
            <div className='show-code'>
                {codeList.map(data =>
                    <div>
                        <h3 style={{lineHeight:2}}>{data.title}</h3>
                        {data.example}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShowCode

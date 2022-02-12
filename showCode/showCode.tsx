import React from 'react'
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
                {codeList.map((data) => <Demo example={data.example} code={data.code} describe={data.describe}
                                              title={data.title}/>)}
            </div>
        </div>
    )
}

export default ShowCode

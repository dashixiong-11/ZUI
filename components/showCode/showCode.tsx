import React from 'react'
import './showCode.scss'
import Demo from "../Demo/demo";
import ApiTable from "../ApiTable/ApiTable";

type Props = {
    codeList: CodeList,
    apiDocList:apiDoc[],
    title: string,
    desc: string
}
const ShowCode: React.FunctionComponent<Props> = (props) => {
    const {codeList, title, desc,apiDocList} = props

    return (
        <div className="show-code-wrapper">
            <h2 className="show-code-title">{title}</h2>
            <div className="show-code-desc">
                <span> {desc} </span>
            </div>
            <h3 className="show-code-title">基本使用</h3>
            <div className="show-code-list">
                {codeList.map((data, i) =>
                    <Demo key={i} example={data.example} code={data.code}
                          describe={data.describe}
                          title={data.title}/>)}
            </div>
            <h3 className="api-table-title">API</h3>
            <div className="api-table">
                <ApiTable apiDocList={apiDocList} />
            </div>
        </div>
    )
}

export default ShowCode

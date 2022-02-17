import React from "react";
import './ApiTable.scss'

type Props = {
    apiDocList: apiDoc[]
}

const ApiTable: React.FC<Props> = ({apiDocList}) => {

    return <div className='api-table'>
        <span className="api-table-name">123</span>
        <table>
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            {apiDocList.map((item, i) =>
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.explain}</td>
                    <td>{item.type}</td>
                    <td> {item.default}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
}

export default ApiTable
import * as React from 'react'
import './showCode.scss'
import Demo from "../demo";

type Props = {
    codeList: String[]
}
const ShowCode: React.FunctionComponent<Props> = (props) => {
    const {codeList} = props

    return (
        <div className="show-code-wrapper">
            {codeList.map((code: string) => <Demo code={code}/>)}
            <div className='show-code'>
                {props.children}
            </div>
        </div>
    )
}

export default ShowCode

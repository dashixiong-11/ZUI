import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";
import './demo.scss'


interface Props {
    code: string;
    title: string;
    describe: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    console.log(theme);
    const code = (
        <Highlight {...defaultProps} theme={theme} code={props.code} language="jsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
              {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                          <span {...getTokenProps({token, key})} />
                      ))}
                  </div>
              ))}
            </pre>
            )}
        </Highlight>
    );
    return (
        <div className='show-source-code'>
            <div className='code-title-desc'>
                <span className="code-title">{props.title}</span>
                <span className="code-describe">{props.describe}</span>
            </div>
            <div className='code-wrapper'>
                {code}
            </div>
        </div>
    );
};

export default Demo;
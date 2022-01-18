import React from 'react';
import IconExample1 from './icon.example.1';
import ShowCode from "../../showCode/showCode";
import IconExample2 from './icon.example.2';

const IconDemo = () => {
    return (
        <div>
            <ShowCode codeList={[
                require('!!raw-loader!./icon.example.1.tsx').default,
                require('!!raw-loader!./icon.example.2.tsx').default,
            ]}>
                <IconExample1/>
                <IconExample2/>
            </ShowCode>
            {/*
      <Demo code={require('!!raw-loader!./icon.example.1.tsx').default}>
      </Demo>
      <Demo code={require('!!raw-loader!./icon.example.2.tsx').default}>
      </Demo>
*/}
        </div>
    );
};

export default IconDemo;

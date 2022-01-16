import React from 'react';
import './tree.scss';
import TreeItem from './tree-item';

interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[];
}

type TreeProps = {
    sourceData: SourceDataItem[],
} & ({
    multiple: true,
    selected: string[],
    onChange: (values: string[]) => void
} | {
    multiple?: false,
    selected: string,
    onChange: (values: string) => void
})

const Tree: React.FC<TreeProps> = (props) => {
    const onItemChange = (values: string[] | string) => {
        if (props.multiple) {
            props.onChange(Array.from(new Set(values)) as string[]);
        } else {
            props.onChange(values as string);
        }
    };
    return (
        <div>
            {props.sourceData && props.sourceData.map(item =>
                <TreeItem onItemChange={onItemChange} key={item.value} treeProps={props} item={item} level={1}/>
            )}
        </div>
    );
};

export default Tree;

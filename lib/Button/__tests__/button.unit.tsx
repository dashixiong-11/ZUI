import * as renderer from 'react-test-renderer'
import {mount, shallow} from 'enzyme'
import ORZButton from "../Button";
import React from 'react'

describe('button', () => {
    it('render', () => {
        const json = renderer.create(<ORZButton/>).toJSON()
        expect(json).toMatchSnapshot()
    })

    it('接受 theme 属性', () => {
        const c = shallow(<ORZButton theme='text'/>)
        expect(c.find('button').hasClass('text')).toEqual(true);
        expect(c.find('button').hasClass('xxx')).toEqual(false);
    })

    it('theme 属性 默认值 default size 属性 默认值 normal', () => {
        const c = shallow(<ORZButton/>)
        expect(c.find('button').hasClass('default')).toEqual(true);
        expect(c.find('button').hasClass('normal')).toEqual(true);
    })

    it('接受 size 属性', () => {
        const c = shallow(<ORZButton theme='text' size='normal'/>)
        expect(c.find('button').hasClass('normal')).toEqual(true);
        expect(c.find('button').hasClass('xxx')).toEqual(false);
    })

    it('接受 disabled 属性', () => {
        const c = shallow(<ORZButton disabled={true}/>)
        expect(c.find('button').prop('disabled')).toEqual(true)
    })

    it('disabled 属性 默认 false', () => {
        const c = shallow(<ORZButton />)
        expect(c.find('button').prop('disabled')).toEqual(false)
    })

    it('onClick', () => {
        const fn = jest.fn()
        const c = mount(<ORZButton name='alipay' onClick={fn}/>)
        c.find('button').simulate('click')
        expect(fn).toBeCalled()
    })
    /*
        it('接受 disabled 属性', () => {
            const c = mount(<ORZButton disabled={true}/>)
            expect(c.find('button').getDOMNode().getAttribute('disabled')).toEqual(true)
        })
    */
    /*
        it('接受 name 属性', () => {
            const c = mount(<Icon name='alipay'/>)
            expect(c.find('use').getDOMNode().getAttribute('xlink:href')).toEqual('#alipay')
        })

        it('不传 name 属性 默认 undefined', () => {
            const c = mount(<Icon/>)
            expect(c.find('use').getDOMNode().getAttribute('xlink:href')).toEqual('#undefined')
        })

        it('接受 color 属性', () => {
            const c = mount(<Icon name='alipay' color='red'/>)
            expect(c.find('svg').getDOMNode().getAttribute('color')).toEqual('red')
        })
        it('不传 color 默认 #009688', () => {
            const c = mount(<Icon name='alipay'/>)
            expect(c.find('svg').getDOMNode().getAttribute('color')).toEqual('#009688')
        })

        it('接受 size 属性', () => {
            const c = mount(<Icon name='alipay' size={20}/>)
            expect(c.find('svg').get(0).props.style.fontSize).toEqual('20px')
        })

        it('size 属性 默认值', () => {
            const c = mount(<Icon name='alipay'/>)
            expect(c.find('svg').get(0).props.style.fontSize).toEqual('15px')
        })

        it('onClick', () => {
            const fn = jest.fn()
            const c = mount(<Icon name='alipay' onClick={fn}/>)
            c.find('svg').simulate('click')
            expect(fn).toBeCalled()
        })
    */
})

import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
    it('render', () => {
        const json = renderer.create(<Icon name='wechat'/>).toJSON()
        expect(json).toMatchSnapshot()
    })

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
})


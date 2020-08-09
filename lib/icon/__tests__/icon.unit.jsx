import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
   it('render', () => {
      const json = renderer.create(<Icon/>).toJSON()
      expect(json).toMatchSnapshot()
   })

   it('onClick', () => {
      const fn = jest.fn()
      const c = mount(<Icon name='alipay' onClick={ fn } />)
      c.find('svg').simulate('click')
      expect(fn).toBeCalled()
   })
})


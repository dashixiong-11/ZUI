import classes, {scopedClassNameMaker} from "../classes"

describe('classes', () => {
   it('接受 1个 参数', () => {
      let result = classes('a')
      expect(result).toEqual('a')
   })

   it('接受 2个 参数', () => {
      let result = classes('a', 'b')
      expect(result).toEqual('a b')
   })

   it('接受 奇奇怪怪的 参数', () => {
      let result = classes('a', 'b', '中文', false, undefined, null)
      expect(result).toEqual('a b 中文')
   })
})

describe('scopedClassMaker',()=>{
   it('接手字符串或对象',()=>{
      const sc = scopedClassNameMaker('text')
      expect(sc('')).toEqual('orz-text')
      expect(sc('x')).toEqual('orz-text-x')
      expect(sc({y:true,z:false})).toEqual('orz-text-y')
      expect(sc({y:true,z:true},{extra:'r'})).toEqual('orz-text-y orz-text-z r')
   })
})

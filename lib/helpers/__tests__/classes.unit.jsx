import classes from "../classes"

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

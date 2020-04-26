import eaze, { linear } from '../src'
// easeIn, easeOut, easeInOut

describe('eaze', () => {
  test('linear', () => {
    const values = eaze(2, {
      value: 1,
      easing: linear,
    })

    expect(values.length).toBe(2)
    expect(values[0][0]).toBe(0.5)
    expect(values[1][0]).toBe(1)
  })
})

import makeEasingFn from 'bezier-easing'

type Easing = [number, number, number, number]

interface Config {
  value: number
  easing: Easing
  reverse?: boolean
}

type Step = number[]
type Result = Step[]

const eaze = (count: number, ...configs: Config[]): Result => {
  const steps = []

  for (
    let index = 1, reverseIndex = count;
    index <= count;
    index++, reverseIndex--
  ) {
    const values = configs.map(({ value, easing, reverse = false }) => {
      const easingFn = makeEasingFn(...easing)
      const fraction = reverse ? reverseIndex / count : index / count

      const easedValue = easingFn(fraction)

      return easedValue * value
    })

    steps.push(values)
  }

  return steps
}

export default eaze

export const linear: Easing = [0, 0, 1, 1]
export const ease: Easing = [0.25, 0.1, 0.25, 1]
export const easeIn: Easing = [0.42, 0, 1, 1]
export const easeOut: Easing = [0, 0, 0.58, 1]
export const easeInOut: Easing = [0.42, 0, 0.58, 1]
export const easeInSine: Easing = [0.47, 0, 0.745, 0.715]
export const easeOutSine: Easing = [0.39, 0.575, 0.565, 1]
export const easeInOutSine: Easing = [0.445, 0.05, 0.55, 0.95]
export const easeInCubic: Easing = [0.55, 0.055, 0.675, 0.19]
export const easeOutCubic: Easing = [0.215, 0.61, 0.355, 1]
export const easeInOutCubic: Easing = [0.645, 0.045, 0.355, 1]
export const easeInQuint: Easing = [0.755, 0.05, 0.855, 0.06]
export const easeOutQuint: Easing = [0.23, 1, 0.32, 1]
export const easeInOutQuint: Easing = [0.86, 0, 0.07, 1]
export const easeInCirc: Easing = [0.6, 0.04, 0.98, 0.335]
export const easeOutCirc: Easing = [0.075, 0.82, 0.165, 1]
export const easeInOutCirc: Easing = [0.785, 0.135, 0.15, 0.86]
export const easeInQuad: Easing = [0.55, 0.085, 0.68, 0.53]
export const easeOutQuad: Easing = [0.25, 0.46, 0.45, 0.94]
export const easeInOutQuad: Easing = [0.455, 0.03, 0.515, 0.955]
export const easeInQuart: Easing = [0.895, 0.03, 0.685, 0.22]
export const easeOutQuart: Easing = [0.165, 0.84, 0.44, 1]
export const easeInOutQuart: Easing = [0.77, 0, 0.175, 1]
export const easeInExpo: Easing = [0.95, 0.05, 0.795, 0.035]
export const easeOutExpo: Easing = [0.19, 1, 0.22, 1]
export const easeInOutExpo: Easing = [1, 0, 0, 1]

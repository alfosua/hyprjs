import type { Window } from './types'

export const focus = (args: { window: Window }): string => {
  const propKeyValues = []
  propKeyValues.push(`window = "address:${args.window.address}"`)
  const props = propKeyValues.join(', ')
  return `hl.dsp.focus({ ${props} })`
}

type MoveArgs = {
  workspace: string
  follow?: boolean
  window: Window
}

type FloatArgs = {
  action: 'set' | 'unset' | 'toggle' | undefined
  window: Window
}

export const window = {
  move: (args: MoveArgs): string => {
    const propKeyValues = []
    propKeyValues.push(`workspace = "${args.workspace}"`)
    if (args.follow !== undefined) {
      propKeyValues.push(`follow = ${args.follow}`)
    }
    propKeyValues.push(`window = "address:${args.window.address}"`)
    const props = propKeyValues.join(', ')
    return `hl.dsp.window.move({ ${props} })`
  },
  tag: (args: { tag: string; window: Window }): string => {
    const propKeyValues = []
    propKeyValues.push(`tag = "${args.tag}"`)
    propKeyValues.push(`window = "address:${args.window.address}"`)
    const props = propKeyValues.join(', ')
    return `hl.dsp.window.tag({ ${props} })`
  },
  float: (args: FloatArgs): string => {
    const propKeyValues = []
    propKeyValues.push(`action = "${args.action}"`)
    propKeyValues.push(`window = "address:${args.window.address}"`)
    const props = propKeyValues.join(', ')
    return `hl.dsp.window.float({ ${props} })`
  },
}

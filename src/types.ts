export type KnownQuery =
  | 'activewindow'
  | 'activeworkspace'
  | 'clients'
  | 'workspaces'
  | 'monitors'

export interface Workspace {
  id: number
  name: string
  monitor: string
  monitorID: number
  windows: number
  hasfullscreen: boolean
  lastwindow: string
  lastwindowtitle: string
  ispersistent: boolean
  tiledLayout: string
}

export interface WorkspaceRef {
  id: number
  name: string
}

export interface Window {
  address: string
  mapped: boolean
  hidden: boolean
  visible: boolean
  acceptsInput: boolean
  at: [number, number] // [x, y] coordinates
  size: [number, number] // [width, height] dimensions
  workspace: WorkspaceRef
  floating: boolean
  monitor: number
  class: string
  title: string
  initialClass: string
  initialTitle: string
  pid: number
  xwayland: boolean
  pinned: boolean
  pinFullscreened: boolean
  fullscreen: 0 | 1 | 2 | number // 0: none, 1: maximize, 2: fullscreen
  fullscreenClient: 0 | 1 | 2 | number
  fullscreenHandler: string
  allowedOverFullscreen: boolean
  grouped: string[] // Array of window addresses (e.g., "0x55648a6b0440")
  tags: string[]
  swallowing: string
  focusHistoryID: number
  inhibitingIdle: boolean
  xdgTag: string
  xdgDescription: string
  contentType: 'none' | 'photo' | 'video' | 'game' | string
  tearingHint: boolean
  stableId: string
}

import { send } from './net'
import type { KnownQuery, Window, Workspace } from './types'

export function dispatch(action: string): Promise<string> {
  return send(`dispatch ${action}`.trim())
}

export function dispatchBatch(dispatches: string[]): Promise<string> {
  const dispatchesJoin = dispatches.map((c) => `dispatch ${c}`).join('; ')
  const command = `[[BATCH]]${dispatchesJoin}`
  return send(command)
}

export function setKeyword(
  key: string,
  value: string | number
): Promise<string> {
  return send(`keyword ${key} ${value}`)
}

export async function query<T = unknown>(endpoint: KnownQuery): Promise<T> {
  return JSON.parse(await send(`j/${endpoint}`))
}

export function getActiveWindow(): Promise<Window> {
  return query<Window>('activewindow')
}

export function getWindows(): Promise<Window[]> {
  return query<Window[]>('clients')
}

export async function getWindow(selector: {
  address: string
}): Promise<Window | undefined> {
  const windows = await getWindows()
  return windows.find((w) => w.address === selector.address)
}

export function getActiveWorkspace(): Promise<Workspace> {
  return query<Workspace>('activeworkspace')
}

export function getWorkspaces(): Promise<Workspace[]> {
  return query<Workspace[]>('workspaces')
}

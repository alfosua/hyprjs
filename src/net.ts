import { createConnection } from 'node:net'

export function getHyprlandSignature(): string | undefined {
  return process.env.HYPRLAND_INSTANCE_SIGNATURE
}

export function getSocketPath(name: '.socket.sock' | '.socket2.sock') {
  return `${process.env.XDG_RUNTIME_DIR}/hypr/${getHyprlandSignature()}/${name}`
}

export function send(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let res = ''
    const socket = getSocketPath('.socket.sock')
    console.log('COMMAND: ' + command)
    const client = createConnection(socket, () => client.write(command))
    client.on('data', (chunk) => (res += chunk))
    client.on('end', () => {
      console.log('RESULT: ' + res)
      resolve(res)
    })
    client.on('error', reject)
  })
}

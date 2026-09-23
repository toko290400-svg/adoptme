const LINK_KEY = 'AdoptMeLinkKey__2026!XOR'

const ROBLOX_LINK_ENCODED =
  'KRAbAAd3SmMeGRxlFxY9M11IHFVONWE/NEsIERkoFmNQXFt+XU5tbAUfAAJpdQ42LhQbXTkoWjwbBx0qERwMOkBGV0RtMSE5AgsLFUl7V3xdX1N9XE9oaAcAAA4ZYXxieFZbSEB5UnVYXlxyVA=='

export function decodeProtectedLink(encodedValue: string, key = LINK_KEY): string {
  if (!encodedValue) return ''

  const binary = atob(encodedValue)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  const keyBytes = new TextEncoder().encode(key)

  const decoded = new Uint8Array(bytes.length)
  for (let index = 0; index < bytes.length; index += 1) {
    decoded[index] = bytes[index] ^ keyBytes[index % keyBytes.length]
  }

  return new TextDecoder().decode(decoded)
}

export const ROBLOX_PLAY_LINK = decodeProtectedLink(ROBLOX_LINK_ENCODED)

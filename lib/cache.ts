type CacheItem<T> = {
  value: T
  expiry: number
}

export class SimpleCache {
  private cache: Record<string, CacheItem<any>> = {}

  set<T>(key: string, value: T, ttlSeconds = 3600): void {
    const expiry = Date.now() + ttlSeconds * 1000
    this.cache[key] = { value, expiry }
  }

  get<T>(key: string): T | null {
    const item = this.cache[key]

    if (!item) {
      return null
    }

    if (Date.now() > item.expiry) {
      delete this.cache[key]
      return null
    }

    return item.value as T
  }

  has(key: string): boolean {
    return this.get(key) !== null
  }

  clear(): void {
    this.cache = {}
  }
}

export const globalCache = new SimpleCache()

// Simple in-memory rate limiter
const rateMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(ip: string, limit = 3, windowMs = 60 * 60 * 1000): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateMap.get(ip);

  // Clean up old entries periodically
  if (rateMap.size > 10000) {
    for (const [key, val] of rateMap) {
      if (now > val.resetTime) rateMap.delete(key);
    }
  }

  if (!entry || now > entry.resetTime) {
    rateMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0 };
  }

  entry.count++;
  return { success: true, remaining: limit - entry.count };
}

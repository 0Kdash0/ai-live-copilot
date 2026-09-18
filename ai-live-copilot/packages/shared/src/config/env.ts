/**
 * Parse a string environment variable.
 * Throws if the value is empty or whitespace-only.
 */
export function parseEnvString(
  value: string | undefined,
  key: string,
): string {
  if (value === undefined || value.trim() === '') {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value.trim();
}

/**
 * Parse an optional string environment variable.
 * Returns undefined if not set.
 */
export function parseEnvStringOptional(
  value: string | undefined,
): string | undefined {
  if (value === undefined || value.trim() === '') {
    return undefined;
  }
  return value.trim();
}

/**
 * Parse an integer environment variable.
 */
export function parseEnvInt(
  value: string | undefined,
  key: string,
  defaultValue?: number,
): number {
  if (value === undefined || value.trim() === '') {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Missing required environment variable: ${key}`);
  }
  const parsed = parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    throw new Error(`Environment variable ${key} must be a valid integer, got: ${value}`);
  }
  return parsed;
}

/**
 * Parse a boolean environment variable (accepts "true"/"false", case-insensitive).
 */
export function parseEnvBool(
  value: string | undefined,
  key: string,
  defaultValue?: boolean,
): boolean {
  if (value === undefined || value.trim() === '') {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Missing required environment variable: ${key}`);
  }
  const lower = value.trim().toLowerCase();
  if (lower === 'true') return true;
  if (lower === 'false') return false;
  throw new Error(`Environment variable ${key} must be "true" or "false", got: ${value}`);
}

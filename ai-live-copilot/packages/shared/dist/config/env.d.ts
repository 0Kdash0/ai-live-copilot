/**
 * Parse a string environment variable.
 * Throws if the value is empty or whitespace-only.
 */
export declare function parseEnvString(value: string | undefined, key: string): string;
/**
 * Parse an optional string environment variable.
 * Returns undefined if not set.
 */
export declare function parseEnvStringOptional(value: string | undefined): string | undefined;
/**
 * Parse an integer environment variable.
 */
export declare function parseEnvInt(value: string | undefined, key: string, defaultValue?: number): number;
/**
 * Parse a boolean environment variable (accepts "true"/"false", case-insensitive).
 */
export declare function parseEnvBool(value: string | undefined, key: string, defaultValue?: boolean): boolean;
//# sourceMappingURL=env.d.ts.map
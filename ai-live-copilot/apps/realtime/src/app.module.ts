import type { HealthResponse } from '@ai-live-copilot/contracts';

export function healthResponse(): HealthResponse {
  return { status: 'ok' };
}

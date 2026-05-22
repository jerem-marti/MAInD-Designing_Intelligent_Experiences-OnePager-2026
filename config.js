// WeMatch — runtime configuration.
//
// Single source of truth for the live-agent URL the §05 CTA points at.
// Per `prompt-2-implementation.md`: this is where the team replaces the
// placeholder with the real hosted-agent URL once available.
//
// No build step. No env var. One line, one change.

export const WEMATCH_AGENT_URL =
  "https://maind-wematch.vercel.app/";

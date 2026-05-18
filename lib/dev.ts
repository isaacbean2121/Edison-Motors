export const isDevAuth = () =>
  process.env.SKIP_EMAIL_VERIFICATION === "true" ||
  !process.env.RESEND_API_KEY;

export async function registerInscription(data) {
  const body = new URLSearchParams(data);
  const response = await fetch(
    import.meta.env.VITE_GOOGLE_SCRIPT_URL,
    {
      method: "POST",
      body,
    }
  );
  const text = await response.text();
  return text;
} 
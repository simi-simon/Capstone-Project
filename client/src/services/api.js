const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export async function getProjects() {
  const response = await fetch(`${API_BASE}/projects`);
  if (!response.ok) throw new Error('Could not load projects');
  return response.json();
}
export async function sendContact(payload) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Message could not be sent');
  return data;
}

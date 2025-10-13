const BASE = "https://collectionapi.metmuseum.org/public/collection/v1";

async function http(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Network error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function fetchDepartments() {
  const data = await http(`${BASE}/departments`);
  return data.departments || [];
}

export async function searchObjects({ query, departmentId }) {
  const params = new URLSearchParams({ hasImages: "true", q: query });
  if (departmentId && departmentId !== "all") params.set("departmentId", departmentId);
  const data = await http(`${BASE}/search?${params.toString()}`);
  return data.objectIDs?.slice(0, 24) || [];
}

export async function fetchObject(objectId) {
  return http(`${BASE}/objects/${objectId}`);
}

export async function fetchObjectsBulk(ids) {
  const tasks = ids.map((id) => fetchObject(id).catch(() => null));
  const results = await Promise.all(tasks);
  return results.filter(Boolean);
}

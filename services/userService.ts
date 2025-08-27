export const getUsers = async () => {
  const res = await fetch("/api/users", { cache: "no-store" });
  return res.json();
};

export const getUserById = async (id: string) => {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
};

export const createUser = async (data: any) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateUser = async (id: string, data: any) => {
  const res = await fetch(`/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteUser = async (id: string) => {
  await fetch(`/api/users/${id}`, { method: "DELETE" });
};


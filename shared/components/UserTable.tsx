"use client";
import React, { useEffect, useState } from "react";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  address?: {
    city?: string;
  };
  status?: string;
  createdAt?: string;
};

type ApiResponse = {
  success: boolean;
  users?: User[];
  error?: string;
};

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const res = await fetch("/api/users");
        const data: ApiResponse = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.error || "Failed to fetch users");
        }

        setUsers(data.users || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center py-4">Loading users...</p>;
  if (error) return <p className="text-center text-red-500 py-4">{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Created</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="text-center hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {user.firstName} {user.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.phoneNumber || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.address?.city || "Unknown"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.status || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-500 mr-2 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="border border-gray-300 px-4 py-4 text-center"
              >
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

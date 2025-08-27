import React from "react";
import { Typography } from "@/shared/components/ui/Typography";
import UserTable from "@/shared/components/UserTable";
import dbConnect from "@/lib/mongoose";
import IUser from "@/lib/models/user";

// Type for serialized user data
type SerializedUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  address: {
    city: string;
  };
  status?: string;
  createdAt: string;
};

// Server-side data fetching
async function getUsers(): Promise<SerializedUser[]> {
  await dbConnect();
  try {
    const users = await IUser.find().sort({ createdAt: -1 });
    // Serialize MongoDB objects to plain objects
    return users.map(user => ({
      _id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: {
        city: user.address?.city || "",
      },
      status: user.status,
      createdAt: user.createdAt?.toISOString() || "",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export default async function HomePage() {
  // Fetch users on the server
  const users = await getUsers();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Typography as="h1" className="text-3xl font-bold">
          User Management System
        </Typography>
        <a
          href="/add-user"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New User
        </a>
      </div>

      <UserTable users={users} />
    </div>
  );
}

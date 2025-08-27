"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as userService from "@/services/userService";
import UserForm from "@/shared/components/UserForm";
import { Typography } from "@/shared/components/ui/Typography";

export default function EditUserPage() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (id) {
      userService.getUserById(id as string).then(setUser);
    }
  }, [id]);

  const handleSubmit = async (data: any) => {
    await userService.updateUser(id as string, data);
    router.push("/users");
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      <Typography as="h1" className="mb-4">Edit User</Typography>
      {user && <UserForm user={user} onSubmit={handleSubmit} onCancel={() => router.push("/users")} />}
    </div>
  );
}

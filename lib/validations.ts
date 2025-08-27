import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(5, "Phone number required"),
  address: z.object({
    city: z.string().min(1, "City is required").optional().or(z.literal("")),
  }),
});

export const userUpdateSchema = userSchema.partial();

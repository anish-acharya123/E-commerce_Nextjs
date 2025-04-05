import axiosInstance from "@/routes/axiosInstance";
import { UserSignupSchemaType } from "@/schema/UserForm.schema";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUserSignup = () => {
  return useMutation({
    mutationFn: async (formData: UserSignupSchemaType) => {
      await axiosInstance.post("/signup", formData);
    },
    onSuccess: () => {
      toast.success("User signed up successfully");
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || "User signup failed";
      toast.error(errorMessage);
    },
  });
};

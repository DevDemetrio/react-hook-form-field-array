import { useForm } from "react-hook-form";

export function useTraningNew() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  return{
    control,
    handleSubmit,
    register,
    errors,
  }
}

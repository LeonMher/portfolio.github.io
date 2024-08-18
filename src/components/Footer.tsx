import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";

import * as yup from "yup";
type Inputs = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col gap-10 md:flex-row justify-center items-center">
      <div className="w-full">
        <p className="text-5xl">Hire Me</p>
      </div>

      <form
        className="flex flex-col gap-4 border w-full border-gray-200 rounded-lg p-5 md:w-0.5/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Name"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Message"
          {...register("message")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";

function TextFieldElement(
  props: Omit<TextFieldProps, "name"> & {
    name: string;
  }
) {
  const { register } = useFormContext();
  return <TextField {...register(props.name)} {...props} />;
}

export default TextFieldElement;

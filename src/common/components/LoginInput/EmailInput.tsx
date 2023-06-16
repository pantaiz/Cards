import React from "react";
import {FormControl, TextField} from "@mui/material";
import {useFormContext} from "react-hook-form";

type LoginInputPropsType = {
    label: string;
};

export const EmailInput: React.FC<LoginInputPropsType> = ({label}) => {
    const {
        register,
        formState: {errors},
    } = useFormContext<{ email: string }>();

    return (
        <FormControl variant="standard">
            <TextField
                type={"email"}
                variant={"standard"}
                label={label}
                sx={{width: '100%'}}
                color={errors.email ? "error" : "primary"}
                {...register("email", {
                    required: "email is required",
                })}
                helperText={errors.email && errors.email?.message}
            />
        </FormControl>
    )
}
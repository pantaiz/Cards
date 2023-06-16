import React from "react";
import {FormControl, IconButton, InputAdornment, TextField} from "@mui/material";
import {useFormContext} from "react-hook-form";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type PasswordInputPropsType = {
    label: string;
};

export const PasswordInput: React.FC<PasswordInputPropsType> = ({label}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const {
        register,
        formState: {errors},
    } = useFormContext<{ password: string }>();

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    return (
        <FormControl variant="standard">
            <TextField
                type={showPassword ? "text" : "password"}
                variant={"standard"}
                label={label}
                sx={{width:'100%'}}
                color={errors.password ? "error" : "primary"}
                {...register("password", {
                    required: "password is required",
                })}
                helperText={errors.password && errors.password?.message}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </FormControl>
    )
}
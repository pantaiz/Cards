import {useAppDispatch} from "../../../app/hooks";
import s from './styles.module.css'
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {Button, Paper, Typography} from "@mui/material";
import {CreateNewPasswordType} from "../auth.api";
import {Navigate, useParams} from "react-router-dom";
import {PasswordInput} from "../../../common/components/PasswordInput/PasswordInput";
import {authThunks} from "../auth.slice";


type CreateNewPasswordFormType = {
    password: string
}

export const CreateNewPassword = () => {
    let {token} = useParams();
    const dispatch = useAppDispatch();
    const methods = useForm<CreateNewPasswordFormType>();
    const onSubmit: SubmitHandler<CreateNewPasswordFormType> = (data) => {
        const payload: CreateNewPasswordType = {
            newPassword: data.password,
            resetPasswordToken: token === undefined ? '' : token,
        }
        dispatch(authThunks.createNewPassword(payload));
        methods.reset();
    };
    return (

        <div className={s.container}>
            <Paper elevation={3} sx={{p: 3, m: 2, mx: 'auto'}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Create new password
                </Typography>
                <FormProvider {...methods}>
                    <form className={s.container} onSubmit={methods.handleSubmit(onSubmit)}>
                        <PasswordInput label={"Password"}/>
                        <Typography variant="inherit" align="center" gutterBottom>
                            Create new password and we will send you further instructions to email
                        </Typography>

                        <Button type="submit" variant="contained" color="primary">
                            Create new password
                        </Button>
                    </form>
                </FormProvider>
            </Paper>
        </div>
    );
};
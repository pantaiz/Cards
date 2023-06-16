import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import s from './styles.module.css'
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {Button, Paper, Typography} from "@mui/material";
import {ArgLoginType} from "../auth.api";
import {MESSAGE} from "../../../common/utils/Messge";
import {EmailInput} from "../../../common/components/LoginInput/EmailInput";
import {Link} from "react-router-dom";

type ForgotPasswordFormType = {
    email: string
}


export const ForgotPassword = () => {
    const dispatch = useAppDispatch();
    const forgotPasswordHandler = (data: ForgotPasswordFormType) => {
        const payload = {
            email: data.email,
            from: "front dev ivan",
            message: MESSAGE,
        }
        dispatch(authThunks.forgotPassword(payload));
    };
    const methods = useForm<ArgLoginType>();
    const onSubmit: SubmitHandler<ForgotPasswordFormType> = (data) => {
        forgotPasswordHandler(data);
    };
    return (
        <div className={s.container}>
            <Paper elevation={3} sx={{p: 3, m: 2, mx: 'auto'}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Forgot your password?
                </Typography>
                <FormProvider {...methods}>
                    <form className={s.container} onSubmit={methods.handleSubmit(onSubmit)}>
                        <EmailInput label={'Email'}/>
                        <Typography variant="inherit" align="center" gutterBottom>
                            Enter your email address and we will send you further instructions
                        </Typography>
                        <Button type="submit" variant="contained" color="primary">
                            Send Instructions
                        </Button>
                    </form>
                </FormProvider>
                <div className={s.signUp}>
                    <Typography variant="subtitle1" gutterBottom>
                        Did you remember your password?
                    </Typography>
                    <Link to={"/login"}>
                        <Typography variant="subtitle1" gutterBottom>
                            Try logging in
                        </Typography>
                    </Link>
                </div>
            </Paper>
        </div>
    );
};
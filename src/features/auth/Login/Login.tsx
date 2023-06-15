import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import s from './styles.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Checkbox, FormControlLabel, Paper, TextField, Typography} from "@mui/material";
import {ArgLoginType} from "../auth.api";

export const Login = () => {
    const dispatch = useAppDispatch();
    const loginHandler = (data: ArgLoginType) => {
        dispatch(authThunks.login(data));
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ArgLoginType>();
    const onSubmit: SubmitHandler<ArgLoginType> = (data) => {
        loginHandler(data);
    };
    return (
        <div className={s.container}>
            <Paper elevation={3} sx={{p: 3, m: 2, maxWidth: 400, mx: 'auto'}}>
                <Typography variant="h5" align="center" gutterBottom>
                    Вход в аккаунт
                </Typography>
                <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('email', {required: true})}
                        label="email"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email ? 'Введите email' : ''}
                    />
                    <TextField
                        {...register('password', {required: true})}
                        label="Пароль"
                        variant="outlined"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password ? 'Введите пароль' : ''}
                    />
                    <FormControlLabel control={<Checkbox {...register('rememberMe')} name="rememberMe"/>}
                                      label="Запомнить меня"/>
                    <Button type="submit" variant="contained" color="primary">
                        Войти
                    </Button>
                </form>
            </Paper>
        </div>
    );
};
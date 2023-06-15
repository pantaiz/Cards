import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import s from './styles.module.css'
import {Button, Checkbox, FormControlLabel, Paper, TextField, Typography} from "@mui/material";
import {ArgLoginType, ArgRegisterType} from "../auth.api";
import {SubmitHandler, useForm} from "react-hook-form";

export const Register = () => {
  const dispatch = useAppDispatch();
  const registerHandler = (data:ArgRegisterType) => {
    dispatch(authThunks.register(data));
  };

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ArgRegisterType>();
    const onSubmit: SubmitHandler<ArgRegisterType> = (data) => {
        registerHandler(data);
    };

  return (
      <div className={s.container}>
          <Paper elevation={3} sx={{p: 3, m: 2, maxWidth: 400, mx: 'auto'}}>
              <Typography variant="h5" align="center" gutterBottom>
                  Регистрация аккаунта
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
                  <Button type="submit" variant="contained" color="primary">
                      Войти
                  </Button>
              </form>
          </Paper>
      </div>
  );
};
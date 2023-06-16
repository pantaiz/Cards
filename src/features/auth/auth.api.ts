import {instance, instanceHerocu} from "../../common/api/common.api";


export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('/auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        //TODO
        return instance.post<ProfileType>('/auth/login', arg)
    },
    forgotPassword: (arg: ForgotPasswordType) => {
        return instanceHerocu.post<ForgotPasswordResponseType>('/auth/forgot', arg)
    },
    createNewPassword: (arg: CreateNewPasswordType) => {
        return instanceHerocu.post<CreateNewPasswordResponseType>('/auth/set-new-password', arg)
    }
}

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

export type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

export type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'>;
}

export type ForgotPasswordType = {
    email: string,
    from?: string,
    message: string,
}
export type CreateNewPasswordType = {
    newPassword: string,
    resetPasswordToken: string,
}

export type CreateNewPasswordResponseType = {
	error: string;
	resetPasswordToken: boolean;
	in: string;
}

export type ForgotPasswordResponseType = {
    info: string;
    success: boolean;
    answer: boolean;
    html: boolean;
}

export type ProfileType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;

    token: string;
    tokenDeathTime: number;
}
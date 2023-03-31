import { UserData, UserLoginProps } from '../model/UserData';

//Mock data as we doesen't have an API
export const getUserData = async ({ login, password }: UserLoginProps): Promise<UserData> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (login === 'demo' && password === 'demo') {
                resolve({ id: 0, username: 'demo' });
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000);
    });
};

import { randomBytes } from "crypto";
import argon2 from "argon2";

export const hashPassword = async (
    password: string
): Promise<any> => {
    const salt = randomBytes(16);
    const hash = await argon2.hash(password, { salt });
    const passwordObject = {
        hash,
        salt: salt.toString("hex"),
    };
    return passwordObject;
};

export const validatePassword = async (
    hashPassword: string,
    inputPassword: string
): Promise<boolean> => {
    return argon2.verify(hashPassword, inputPassword);
};
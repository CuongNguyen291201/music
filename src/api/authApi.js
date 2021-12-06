import { auth } from '../firebase';

export const registerUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            console.log(user);
            return user
        })
        .catch((error) => {
            return error.code;
        });
}

export const loginUser = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            console.log(user);
            return user;
        })
        .catch((error) => {
            return error.code;
        });
}

export const logoutUser = () => {
    auth.signOut().then(() => {

    }).catch((error) => {
        return error.code;
    });
}
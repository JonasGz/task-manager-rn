import { auth } from "@/FirebaseConfig";
import { Router, router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Alert } from "react-native";

type AuthFirebaseProps = {
  email: string;
  password: string;
  router: Router;
};

export const signUp = async ({
  email,
  password,
  router,
}: AuthFirebaseProps) => {
  try {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    if (regex.test(password)) {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        router.replace("/(tabs)/dashboard");
      }
    } else {
      return Alert.alert("Senha fraca!");
    }
  } catch (error) {
    console.error("Erro ao cadastrar", error);
  }
};

export const signIn = async ({
  email,
  password,
  router,
}: AuthFirebaseProps) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      router.replace("/(tabs)/dashboard");
    }
  } catch (error) {
    console.error("Erro ao logar", error);
  }
};

export const logOut = async (router: Router) => {
  try {
    await signOut(auth);
    router.replace("/(tabs)");
  } catch (error) {
    console.error("Erro ao deslogar", error);
  }
};

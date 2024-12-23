import { ButtonGroup, ButtonText, Button } from "@/components/ui/button";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { logOut, signIn, signUp } from "@/services/firebase-service";
import {
  ContainerScreen,
  FormContainer,
  TitleContainer,
} from "@/styles/auth-screen/style";
import { router } from "expo-router";
import { Home } from "lucide-react-native";
import React, { useState } from "react";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };
  const handleChangePassword = (text: string) => {
    setPassword(text);
  };

  return (
    <ContainerScreen>
      <TitleContainer>
        <Home color="#000" /> Welcome!
      </TitleContainer>
      <FormContainer>
        <Input style={{ width: "60%", height: 40 }}>
          <InputField
            type="text"
            onChangeText={handleChangeEmail}
            placeholder="Email"
          />
        </Input>
        <Input style={{ width: "60%", height: 40 }}>
          <InputField
            type="password"
            onChangeText={handleChangePassword}
            placeholder="Password"
          />
        </Input>

        <ButtonGroup>
          <Button onPress={() => signUp({ email, password, router })}>
            <ButtonText>Register</ButtonText>
          </Button>
          <Button action="secondary" onPress={() => router.push("/(tabs)")}>
            <ButtonText>Sign in</ButtonText>
          </Button>
        </ButtonGroup>
      </FormContainer>
    </ContainerScreen>
  );
}

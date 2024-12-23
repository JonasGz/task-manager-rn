import React, { useState } from "react";
import {
  ContainerScreen,
  TitleContainer,
  FormContainer,
} from "../../styles/auth-screen/style";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { Button, ButtonText, ButtonGroup } from "@/components/ui/button";
import { Home } from "lucide-react-native";
import { signIn, signUp } from "@/services/firebase-service";
import { useRouter } from "expo-router";
import { useTheme } from "@emotion/react";

export default function HomeScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };
  const handleChangePassword = (text: string) => {
    setPassword(text);
  };

  return (
    <ContainerScreen>
      <TitleContainer>
        <Home color={theme.colors.text} /> Welcome!
      </TitleContainer>
      <FormContainer>
        <Input style={{ width: "60%", height: 40 }}>
          <InputField onChangeText={handleChangeEmail} placeholder="Email" />
        </Input>
        <Input style={{ width: "60%", height: 40 }}>
          <InputField
            onChangeText={handleChangePassword}
            placeholder="Password"
          />
        </Input>

        <ButtonGroup>
          <Button onPress={() => signIn({ email, password, router })}>
            <ButtonText>Sign in</ButtonText>
          </Button>
          <Button
            action="secondary"
            onPress={() => router.push("/(tabs)/register")}
          >
            <ButtonText>Register</ButtonText>
          </Button>
        </ButtonGroup>
      </FormContainer>
    </ContainerScreen>
  );
}

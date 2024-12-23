import styled from "@emotion/native";

export const ContainerScreen = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const TitleContainer = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const FormContainer = styled.View`
  margin-top: 60px;
  gap: 16px;
`;

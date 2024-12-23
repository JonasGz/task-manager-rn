import styled from "@emotion/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 10px;
  overflow: scroll;
`;

export const ContainerItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => (props.theme.dark == true ? "#333" : "#ddd")};
  margin: 10px 0;
  padding: 4px 8px;
  border-radius: 20px;
  width: 100%;
`;

import { ButtonText, Button } from "@/components/ui/button";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import {
  ActionType,
  TaskContext,
  TasksDispatchContext,
} from "@/stores/TaskStore";
import { ContainerItem } from "@/styles/dashboard-screen/style";
import { Container, FormContainer } from "@/styles/task-screen/style";
import { useTheme } from "@emotion/react";
import { Plus } from "lucide-react-native";
import { useContext, useReducer, useState } from "react";
import { List } from "react-native-paper";

export default function TaskScreen() {
  const [taskName, setTaskName] = useState("");
  const { colors } = useTheme();

  const tasks = useContext(TaskContext);
  const dispatch = useContext(TasksDispatchContext);

  const handleChangeName = (text: any) => {
    setTaskName(text);
  };

  const handleAdd = (name: string) => {
    dispatch({ type: ActionType.Add, task: { name: name } });
  };
  return (
    <Container>
      <FormContainer>
        <Input style={{ width: "60%" }}>
          <InputField
            type="text"
            onChangeText={handleChangeName}
            placeholder="Task"
          />
          <InputSlot>
            <InputIcon>{}</InputIcon>
          </InputSlot>
        </Input>

        <Button onPress={() => handleAdd(taskName)}>
          <ButtonText>
            <Plus color="#fff" />
          </ButtonText>
        </Button>
      </FormContainer>

      <List.Section
        style={{
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          paddingTop: 20,
          overflow: "scroll",
        }}
      >
        {tasks?.map((task, index) => (
          <ContainerItem key={task.id}>
            <List.Item
              titleStyle={{
                color: colors.text,
                fontWeight: "bold",
              }}
              borderless={true}
              title={task.name}
            />
          </ContainerItem>
        ))}
      </List.Section>
    </Container>
  );
}

import { logOut } from "@/services/firebase-service";
import { Container, ContainerItem } from "@/styles/dashboard-screen/style";
import { useQuery } from "@apollo/client";
import { useTheme } from "@emotion/react";
import { useRouter } from "expo-router";
import { Alert, Button, Image, Text, View } from "react-native";
import { ActivityIndicator, List } from "react-native-paper";
import INFO_PERSON from "../../querys/index";
import { auth } from "@/FirebaseConfig";
import { useEffect } from "react";

type Person = {
  name: string;
  species: string;
  gender: string;
  image: string;
};

type QueryData = {
  characters: {
    results: Person[];
  };
};

export default function DashboardScreen() {
  const { colors } = useTheme();

  const { loading, error, data } = useQuery<QueryData>(INFO_PERSON);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Um erro ocorreu!</Text>
      </View>
    );
  }

  return (
    <Container>
      <List.Section
        style={{
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          paddingTop: 70,
          overflow: "scroll",
        }}
      >
        {data?.characters.results.map((person, index) => (
          <ContainerItem
            onPress={() => Alert.alert(`${person.name}`, `${person.gender}`)}
            key={index}
          >
            <Image
              source={{ uri: person.image }}
              style={{ width: 50, height: 50, borderRadius: 10 }}
            />
            <List.Item
              titleStyle={{
                color: colors.text,
                fontWeight: "bold",
              }}
              borderless={true}
              title={person.name}
              description={person.species}
            />
          </ContainerItem>
        ))}
      </List.Section>
    </Container>
  );
}

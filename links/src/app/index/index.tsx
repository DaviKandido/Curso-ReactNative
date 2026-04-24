import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Modal,
  Text,
} from "react-native";
import { colors } from "../../styles/colors";
import { categories as CategoriasArray } from "../utils/categories";
import { styles } from "./styles";

import { Categories } from "../components/Categories";
import { Link } from "../components/link";
import { Options } from "../components/options";

export default function Index() {
  const categorias = CategoriasArray;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        ></Image>
        <TouchableOpacity activeOpacity={0.3}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Google"
            url="https://www.google.com"
            onDetails={() => {}}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent animationType="slide" visible={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Google</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Rocketseat</Text>
            <Text style={styles.modalUrl}>https://rocketseat.com.br</Text>

            <View style={styles.modalFooter}>
              <Options name="Excluir" icon="delete" variant="secondary" />
              <Options name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

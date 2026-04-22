import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  ilustation: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  subtitle: {
    fontSize: 16,
  },
  form: {
    marginTop: 24,
    gap: 12,
  },
  footerText: {
    marginTop: 24,
    textAlign: "center",
  },
  fontLink: {
    color: "#3366FF",
    fontWeight: 600,
  },
});

export default function Signup() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.view}>
          <Image
            source={require("@/assets/img2.png")}
            style={styles.ilustation}
          />
          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>Crie sua conta para acessar.</Text>
          <View style={styles.form}>
            <Input
              placeholder="Nome"
              placeholderTextColor="#DCDCDC"
            />
            <Input
              placeholder="E-mail"
              placeholderTextColor="#DCDCDC"
              keyboardType="email-address"
            />
            <Input
              placeholder="senha"
              placeholderTextColor="#DCDCDC"
              secureTextEntry
            />
            <Input
              placeholder="Confirmar senha"
              placeholderTextColor="#DCDCDC"
              secureTextEntry
            />
            <Button title="Cadastrar" onPress={() => {}} />
          </View>

          <Text style={styles.footerText}>
            Já tem uma conta?{" "}
            <Link style={styles.fontLink} href="/">
              Entrar
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

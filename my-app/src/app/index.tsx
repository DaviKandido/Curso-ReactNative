import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
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

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert("Preencha todos os campos", "E-mail e senha são obrigatórios!");
      return;
    }

    Alert.alert("Login realizado com sucesso! 😀");
  }

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
            source={require("@/assets/img1.png")}
            style={styles.ilustation}
          />
          <Text style={styles.title}>Entrar {email && "com " + email}</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta com e-mail e senha.
          </Text>
          <View style={styles.form}>
            <Input
              placeholder="E-mail"
              placeholderTextColor="#DCDCDC"
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            <Input
              placeholder="senha"
              placeholderTextColor="#DCDCDC"
              secureTextEntry
              onChangeText={setSenha}
            />
            <Button title="Entrar" onPress={handleLogin} />
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta?{" "}
            <Link style={styles.fontLink} href="/signup">
              Cadastre-se aqui
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

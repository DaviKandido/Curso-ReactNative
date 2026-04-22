import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#3366FF",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 600,

  }
});

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.4}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

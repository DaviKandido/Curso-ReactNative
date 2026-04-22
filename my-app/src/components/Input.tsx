import { StyleSheet, TextInput, TextInputProps } from "react-native";

const syles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    paddingLeft: 12,
  },
});

interface InputProps extends TextInputProps {

}

export function Input(props: InputProps) {
  return (
    <TextInput
      style={syles.input}
      {...props}
    />
  );
}

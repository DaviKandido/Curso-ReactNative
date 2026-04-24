import { MaterialIcons } from "@expo/vector-icons";

export type Category = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  { id: "1", name: "projetos", icon: "code" },
  { id: "2", name: "site", icon: "language" },
  { id: "3", name: "video", icon: "movie" },
  { id: "4", name: "music", icon: "music-note" },
  { id: "5", name: "podcast", icon: "podcasts" },
  { id: "6", name: "livro", icon: "book" },
  { id: "7", name: "jogo", icon: "gamepad" },
];

import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";

import { icons } from "../constants";
import { useState } from "react";
import { router, usePathname } from "expo-router";

interface FormFieldProps {
  value?: string;
  handleChangeText?: (event: string) => void;
  initialQuery?: string | string[];
  refetch?: () => void;
}

const SearchInput = ({ initialQuery, refetch }: FormFieldProps) => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#cdcde0"
        onChangeText={(event) => setQuery(event)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert("Please enter a search query");
          }

          if (pathname === "/search") {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

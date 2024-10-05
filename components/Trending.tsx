import React from "react";

import { FlatList, Text, View } from "react-native";

interface TrendingProps {
  posts: Array<{ id: number }>;
}

const Trending = ({ posts }: TrendingProps) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="bg-black-100 rounded-2xl p-4 mb-4">
          <Text className="text-white">Trending Video</Text>
        </View>
      )}
      horizontal={true}
    />
  );
};

export default Trending;

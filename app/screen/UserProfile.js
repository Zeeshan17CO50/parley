import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppScreen from "../components/AppScreen";
import AppListItemDeleteAction from "../components/AppListItemDeleteAction";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";

function UserProfile(props) {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/abdul.jpg")} />
        <Icon
          backgroundColor={colors.black}
          name="reply"
          size={30}
          style={styles.icon}
        />
      </View>
      <View style={styles.container1}>
        <ListItem
          backgroundColor={colors.white}
          title="Zeeshan Siddique"
          subTitle="India"
          image={require("../assets/abdul.jpg")}
          renderRightActions={() => (
            <AppListItemDeleteAction onPress={() => console.log("Delete")} />
          )}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    overflow: "hidden",
  },
  container1: {
    flex: 0.5,
  },
  icon: {
    margin: 20,
    position: "absolute",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
});

export default UserProfile;

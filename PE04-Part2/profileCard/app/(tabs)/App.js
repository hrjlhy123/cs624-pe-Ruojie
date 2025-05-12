import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";

const userImage = require("../../assets/images/user.png");

const data = [
  {
    image: userImage,
    name: "John Doe",
    occupation: "React Native Developer",
    description:
      "John is a really great Javascript developer. " +
      "He loves using JS to build React Native applications " +
      "for iOS and Android",
    showThumbnail: true,
  },
  {
    image: userImage,
    name: "John Doe",
    occupation: "React Native Developer",
    description:
      "John is a really great Javascript developer. " +
      "He loves using JS to build React Native applications " +
      "for iOS and Android",
    showThumbnail: true,
  },
  {
    image: userImage,
    name: "John Doe",
    occupation: "React Native Developer",
    description:
      "John is a really great Javascript developer. " +
      "He loves using JS to build React Native applications " +
      "for iOS and Android",
    showThumbnail: true,
  },
  {
    image: userImage,
    name: "John Doe",
    occupation: "React Native Developer",
    description:
      "John is a really great Javascript developer. " +
      "He loves using JS to build React Native applications " +
      "for iOS and Android",
    showThumbnail: true,
  },
  {
    image: userImage,
    name: "John Doe",
    occupation: "React Native Developer",
    description:
      "John is a really great Javascript developer. " +
      "He loves using JS to build React Native applications " +
      "for iOS and Android",
    showThumbnail: true,
  },
  {
    image: userImage,
    name: "John Doe",
    occupation: "React Native Developer",
    description:
      "John is a really great Javascript developer. " +
      "He loves using JS to build React Native applications " +
      "for iOS and Android",
    showThumbnail: true,
  },
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } =
    props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.PropTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data,
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } },
      }),
    });
  };

  render() {
    const rows = [];
    for (let i = 0; i < this.state.data.length; i += 2) {
      rows.push(
        <View key={`row-${i}`} style={styles.row}>
          <ProfileCard
            image={this.state.data[i].image}
            name={this.state.data[i].name}
            occupation={this.state.data[i].occupation}
            description={this.state.data[i].description}
            onPress={this.handleProfileCardPress.bind(this, i)}
            showThumbnail={this.state.data[i].showThumbnail}
          />
          {this.state.data[i + 1] && (
            <ProfileCard
              image={this.state.data[i + 1].image}
              name={this.state.data[i + 1].name}
              occupation={this.state.data[i + 1].occupation}
              description={this.state.data[i + 1].description}
              onPress={this.handleProfileCardPress.bind(this, i + 1)}
              showThumbnail={this.state.data[i + 1].showThumbnail}
            />
          )}
        </View>
      );
    }

    return <View style={styles.container}>{rows}</View>;
  }
}

const profileCardColor = "dodgerblue";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignItems: "center",
    paddingVertical: 20,
  },
  cardContainer: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImageContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: "black",
        elevation: 15,
      },
    }),
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 30,
    textShadowColor: "black",
    textShadowOffset: {
      height: 5,
      width: 5,
    },
    textShadowRadius: 3,
  },
  cardOccupationContainer: {
    borderColor: "black",
    borderBottomWidth: 3,
  },
  cardOccupation: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: "italic",
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },
  cardThumbnail: {
    transform: [{ scale: 0.5 }],
  },
});

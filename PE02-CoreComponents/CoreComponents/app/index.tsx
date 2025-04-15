import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

const courses = {
  core: [
    {
      id: "CS504",
      name: "Software Engineering",
    },
    {
      id: "CS506",
      name: "Programming for Computing",
    },
    {
      id: "CS519",
      name: "Cloud Computing Overview",
    },
    {
      id: "CS533",
      name: "Computer Architecture",
    },
    {
      id: "CS547",
      name: "Secure Systems and Programs",
    },
    {
      id: "CS622",
      name: "Discrete Math and Algorithms for Computing",
    },
    {
      id: "DS510",
      name: "Artificial Intelligence for Data Science",
    },
    {
      id: "DS620",
      name: "Machine Learning & Deep Learning",
    },
  ],
  depth: [
    {
      id: "CS624",
      name: "Full-Stack Development - Mobile App",
    },
    {
      id: "CS628",
      name: "Full-Stack Development - Web App",
    },
  ],
  capstone: [
    {
      id: "CS687",
      name: "Computer Science Capstone",
    },
  ],
};

const Courses = ({ category, courseList }) => {
  let num_index = courseList.length;

  return (
    <View>
      <Text style={styles.title}>
        {/* Uppercase initials “abc” -> "Abc" */}
        {category.charAt(0).toUpperCase() + category.slice(1)} Requirements (
        {num_index * 3} credits)
      </Text>
      <ScrollView>
        {courseList.map((course, index) => {
          return (
            <Text key={index}>
              {/* Add space between alphanumerics “CS123” -> “CS 123” */}
              {course.id.replace(/([A-Za-z]+)(\d+)/, "$1 $2")} {course.name}
            </Text>
          );
        })}
      </ScrollView>
      <Text>{"\n"}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require(`../assets/images/icon.png`)}
        style={styles.image}
      />
      <Text>{"\n"}</Text>
      <Text>Which course did you like?</Text>
      <TextInput defaultValue="ex. CS624" style={styles.input} />
      <Text>{"\n"}</Text>
      {Object.keys(courses).map((category) => (
        <Courses category={category} courseList={courses[category]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: `center`,
    // alignItems: `center`,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: `bold`,
    backgroundColor: `#ff0`,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

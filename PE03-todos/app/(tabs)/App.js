import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Input from "./Input";
import Submit from "./Submit";
import Heading from "./Heading";
import TodoList from "./TodoList";
import TabBar from "./TabBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All",
    };
  }

  inputChange(inputValue) {
    console.log(" Input Value: ", inputValue);
    this.setState({ inputValue });
  }

  submitChange = () => {
    if (this.state.inputValue) {
      this.setState(
        (prevState) => ({
          inputValue: "",
          todos: [
            ...prevState.todos,
            {
              title: prevState.inputValue,
              todoIndex: prevState.todos.length,
              complete: false,
            },
          ],
        }),
        () => {
          const todos = this.state.todos;
          console.log("State: ", this.state);
        }
      );
    }
  };

  deleteChange = (todoIndex) => {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex != todoIndex);
    this.setState({ todos });
  };

  toggleComplete = (todoIndex) => {
    let todos = this.state.todos.map((todo) =>
      todo.todoIndex === todoIndex
        ? { ...todo, complete: !todo.complete }
        : todo
    );
    this.setState({ todos });
  };

  render() {
    const { inputValue, todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteChange={this.deleteChange}
            todos={todos}
            type={this.state.type}
          />
          <Submit onSubmit={this.submitChange} />

        </ScrollView>
        <TabBar
            type={this.state.type}
            setType={(type) => this.setState({ type })}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

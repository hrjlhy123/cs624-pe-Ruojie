# Input
The app begins with a simple input field where the user can type in any task they want to track. When the user finishes typing and taps the `Submit` button, the input is stored in the component state. (Empty input is ignored to avoid invalid entries.) The input value is managed through `this.state.inputValue`, and each task gets added to a dynamic `todos` list.

# Process
When the user submits a task, a new object is created with its title, a unique index, and a `complete` flag. The task is then added to the state. Each todo includes a `Complete` button (which changes to `Done` once tapped) and a `Delete` button. I also implemented a tab bar that lets the user filter todos: All, Active, or Complete. 

# Output
Todos are rendered on the screen according to the selected filter. Completed tasks appear green and labeled `Done`. Active tasks stay gray. Each change will logs the updated state to the terminal.
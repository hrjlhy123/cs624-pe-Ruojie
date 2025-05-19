# Input
Users can input city and country names using the AddCity and AddCountry screens. After selecting a city or country from the list, users can also input detailed location names and descriptions. All input is captured through TextInput fields and managed via local component state.

# Process
The app uses class-based components and React Navigation to manage multiple screens. The bottom tab navigator switches between cities and countries, while stack navigators manage navigation between list and detail views. User input is passed upward through props (addCity, addCountry, addLocation) to update the global state in App.js. Locations are dynamically added to their corresponding city or country using immutable update patterns.

# Output
The app displays dynamic lists of cities and countries, each containing locations. Added data is displayed in real-time using ScrollView, and fallback messages appear when lists are empty. The app provides a structured, responsive UI for entering and browsing hierarchical geographic data.

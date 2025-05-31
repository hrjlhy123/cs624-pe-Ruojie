# Input
Users can input city and country names through the AddCity and AddCountry screens. After selecting a city or country from the respective list (Cities or Countries), users can input detailed currency information such as name and description. All input is handled via TextInput fields and managed through local component state.

# Process
The app uses class-based React Navtive components along with React Navigation to manage multiple screens.
 · A bottom tab navigator switches between the main sections: Cities, Countries, and their respoective Add screens.
 · Each of the CitiesNav and CountriesNav tabs is backed by a stack navigator, enabling drill-down from a list view (e.g., Countries) to a detail view (e.g., Country)
 · User input (e.g., addCity, addCountry, addCurrency) is passed upward via props to update global state in App.js.
 · Each currency or location is added using an immutable update pattern.
 · Recent bugs related to currencies.length and state refresh on navigation have been addressed.

# Output
The app displays dynamic lists of cities and countries. Each list item links to a detail screen showing associated locations (for cities) or currencies (for countries). Data is displayed in real time through ScrollView with fallback messages (via CenterMessage) when lists are empty.

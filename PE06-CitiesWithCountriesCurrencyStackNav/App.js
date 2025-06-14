import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component } from "react";
import { LogBox } from "react-native";

import AddCity from "./src/AddCity/AddCity";
import AddCountry from "./src/AddCountry/AddCountry";
import Cities from "./src/Cities/Cities";
import City from "./src/Cities/City";
import Countries from "./src/Countries/Countries";
import Country from "./src/Countries/Country";
import { colors } from "./src/theme";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({
  navigation,
  route,
  cities,
  addCity,
  addLocation,
}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Cities"
        children={(props) => (
          <Cities
            {...props}
            cities={cities}
            addCity={addCity}
            addLocation={addLocation}
          />
        )}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
          <City
            {...props}
            cities={cities}
            addCity={addCity}
            addLocation={addLocation}
          />
        )}
      />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({
  navigation,
  route,
  countries,
  addCountry,
  addCurrency,
}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Countries"
        children={(props) => (
          <Countries
            {...props}
            countries={countries}
            addCountry={addCountry}
            addCurrency={addCurrency}
          />
        )}
      />
      <Stack.Screen
        name="Country"
        children={(props) => (
          <Country
            {...props}
            countries={countries}
            addCountry={addCountry}
            addCurrency={addCurrency}
          />
        )}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, currencies: [] }],
    }));
  };

  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, { ...country, currencies: [] }],
    }));
  };
  addLocation = (location, regionName, region) => {
    switch (regionName) {
      case "country": {
        const index = this.state.countries.findIndex(
          (item) => item.id === region.id
        );
        const updatedCountry = {
          ...this.state.countries[index],
          currencies: [...this.state.countries[index].currencies, location],
        };

        const countries = [
          ...this.state.countries.slice(0, index),
          updatedCountry,
          ...this.state.countries.slice(index + 1),
        ];

        this.setState({ countries });
        break;
      }

      case "city": {
        const index = this.state.cities.findIndex(
          (item) => item.id === region.id
        );
        const updatedCity = {
          ...this.state.cities[index],
          currencies: [...this.state.cities[index].currencies, location],
        };

        const cities = [
          ...this.state.cities.slice(0, index),
          updatedCity,
          ...this.state.cities.slice(index + 1),
        ];

        this.setState({ cities });
        break;
      }

      default:
        break;
    }
  };

  addCurrency = (currency, regionName, region) => {
    switch (regionName) {
      case "country": {
        const index = this.state.countries.findIndex(
          (item) => item.id === region.id
        );
        const updatedCountry = {
          ...this.state.countries[index],
          currencies: [...this.state.countries[index].currencies, currency],
        };

        const countries = [
          ...this.state.countries.slice(0, index),
          updatedCountry,
          ...this.state.countries.slice(index + 1),
        ];

        this.setState({ countries });
        break;
      }

      case "city": {
        const index = this.state.cities.findIndex(
          (item) => item.id === region.id
        );
        const updatedCity = {
          ...this.state.cities[index],
          currencies: [...this.state.cities[index].currencies, currency],
        };

        const cities = [
          ...this.state.cities.slice(0, index),
          updatedCity,
          ...this.state.cities.slice(index + 1),
        ];

        this.setState({ cities });
        break;
      }

      default:
        break;
    }
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCity"
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="CountriesNav"
            children={(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          />
          <Tab.Screen
            name="AddCountry"
            children={(props) => (
              <AddCountry
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Category from "./components/category/category";
import NutritionFacts from "./components/nutrition-facts/NutritionFacts";
import CaloriesGoal from "./components/calories-goal/CaloriesGoal";

const foodData = {
  proteins: [
    {
      name: "steak",
      calories: 300,
      totalFat: 5.73,
      saturatedFat: 2.183,
      transFat: 0.182,
      protein: 29.44,
      carbohydrate: 0.0,
    },
    {
      name: "ground beef",
      calories: 200,
      totalFat: 13.1,
      saturatedFat: 5.3,
      transFat: 0.6,
      protein: 15.18,
      carbohydrate: 0.0,
    },
    {
      name: "chicken",
      calories: 100,
      totalFat: 9.3,
      saturatedFat: 2.5,
      transFat: 0.1,
      protein: 27.14,
      carbohydrate: 0.0,
    },
    {
      name: "fish",
      calories: 80,
      totalFat: 6.34,
      saturatedFat: 1.0,
      transFat: 0.0,
      protein: 19.84,
      carbohydrate: 0.0,
    },
    {
      name: "soy",
      calories: 50,
      totalFat: 19.94,
      saturatedFat: 2.884,
      transFat: 0.0,
      protein: 36.49,
      carbohydrate: 30.16,
    },
  ],
  fruits: [
    {
      name: "orange",
      calories: 300,
      totalFat: 1.0,
      saturatedFat: 1.0,
      transFat: 0.0,
      protein: 0.0,
      carbohydrate: 5.0,
    },
    {
      name: "banana",
      calories: 200,
      totalFat: 1.2,
      saturatedFat: 1.2,
      transFat: 0.0,
      protein: 2.0,
      carbohydrate: 6.0,
    },
    {
      name: "pineapple",
      calories: 100,
      totalFat: 1.2,
      saturatedFat: 1.2,
      transFat: 0.0,
      protein: 0.5,
      carbohydrate: 12.0,
    },
    {
      name: "grapes",
      calories: 80,
      totalFat: 0.0,
      saturatedFat: 0.0,
      transFat: 0.0,
      protein: 0.0,
      carbohydrate: 4.0,
    },
    {
      name: "blueberries",
      calories: 50,
      totalFat: 0.0,
      saturatedFat: 0.0,
      transFat: 0.0,
      protein: 0.0,
      carbohydrate: 3.0,
    },
  ],
  vegetables: [
    {
      name: "romaine",
      calories: 30,
      totalFat: 1.2,
      saturatedFat: 1.2,
      transFat: 0.0,
      protein: 2.0,
      carbohydrate: 3.0,
    },
    {
      name: "green beans",
      calories: 40,
      totalFat: 2.4,
      saturatedFat: 2.4,
      transFat: 0.0,
      protein: 6.0,
      carbohydrate: 4.0,
    },
    {
      name: "squash",
      calories: 100,
      totalFat: 1.2,
      saturatedFat: 1.2,
      transFat: 0.0,
      protein: 3.0,
      carbohydrate: 6.0,
    },
    {
      name: "spinach",
      calories: 50,
      totalFat: 0.0,
      saturatedFat: 0.0,
      transFat: 0.0,
      protein: 7.0,
      carbohydrate: 3.0,
    },
    {
      name: "kale",
      calories: 10,
      totalFat: 0.0,
      saturatedFat: 0.0,
      transFat: 0.0,
      protein: 4.0,
      carbohydrate: 1.0,
    },
  ],
  dairy: [
    {
      name: "milk",
      calories: 300,
      totalFat: 12.1,
      saturatedFat: 8.6,
      transFat: 2.5,
      protein: 7.0,
      carbohydrate: 13.0,
    },
    {
      name: "yoghurt",
      calories: 200,
      totalFat: 6.2,
      saturatedFat: 6.2,
      transFat: 0.0,
      protein: 11.0,
      carbohydrate: 8.0,
    },
    {
      name: "cheddar cheese",
      calories: 200,
      totalFat: 12.1,
      saturatedFat: 8.6,
      transFat: 2.5,
      protein: 3.0,
      carbohydrate: 1.0,
    },
    {
      name: "skim milk",
      calories: 100,
      totalFat: 3.0,
      saturatedFat: 3.0,
      transFat: 0.0,
      protein: 3.0,
      carbohydrate: 7.0,
    },
    {
      name: "cottage cheese",
      calories: 80,
      totalFat: 6.0,
      saturatedFat: 5.0,
      transFat: 1.0,
      protein: 3.0,
      carbohydrate: 4.0,
    },
  ],
  grain: [
    {
      name: "bread",
      calories: 200,
      totalFat: 5.0,
      saturatedFat: 5.0,
      transFat: 0.0,
      protein: 2.0,
      carbohydrate: 16.0,
    },
    {
      name: "bagel",
      calories: 300,
      totalFat: 7.0,
      saturatedFat: 7.0,
      transFat: 0.0,
      protein: 2.0,
      carbohydrate: 24.0,
    },
    {
      name: "pita",
      calories: 250,
      totalFat: 5,
      saturatedFat: 5,
      transFat: 0.0,
      protein: 1.0,
      carbohydrate: 12.0,
    },
    {
      name: "naan",
      calories: 210,
      totalFat: 4,
      saturatedFat: 4,
      transFat: 0.0,
      protein: 1.2,
      carbohydrate: 16.0,
    },
    {
      name: "tortilla",
      calories: 120,
      totalFat: 3,
      saturatedFat: 3,
      transFat: 0.0,
      protein: 0.8,
      carbohydrate: 11.0,
    },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryItems: [],
      selectedItem: "",
      buttonDirection: ">>",
      calories: 0,
      selectedItems: [],
      caloriesGoal: 2000,
      calorieGoalModal: false,
      categories: [],
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.changeFoodListHandler = this.changeFoodListHandler.bind(this);
    this.changeSelectItemHandler = this.changeSelectItemHandler.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.changeCalorieGoalHandler = this.changeCalorieGoalHandler.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/get_all_food_items/get_all_categories")
      .then(res => res.json())
      .then(json => this.setState({ categories: json }))
  }

  handleCategoryChange(evt) {
    const categoryItems = foodData[evt.target.value];
    if (categoryItems) {
      this.setState({ categoryItems: categoryItems, selectedItem: "" });
    } else {
      this.setState({ categoryItems: [], selectedItem: "" });
    }
  }

  handleButtonClick(evt) {
    const foodItem = this.state.categoryItems.find(
      (item) => item.name === this.state.selectedItem
    );
    if (
      this.state.buttonDirection === "<<" &&
      this.state.calories > 0 &&
      this.state.selectedItem
    ) {
      this.setState((prevState) => {
        const foodItemIndex = this.state.selectedItems.findIndex(
          (item) => item.name === foodItem.name
        );
        const newSelectedItems = [...this.state.selectedItems];
        newSelectedItems.splice(foodItemIndex, 1);
        return {
          selectedItems: newSelectedItems,
          calories: prevState.calories - foodItem.calories,
          selectedItem: "",
        };
      });
    } else if (this.state.buttonDirection === ">>") {
      this.setState((prevState) => ({
        selectedItems: [...prevState.selectedItems, foodItem],
        calories: prevState.calories + foodItem.calories,
      }));
    }
  }

  changeFoodListHandler(evt) {
    this.setState({ selectedItem: evt.target.value, buttonDirection: ">>" });
  }

  changeSelectItemHandler(evt) {
    this.setState({ selectedItem: evt.target.value, buttonDirection: "<<" });
  }

  changeCalorieGoalHandler(evt) {
    this.setState({ caloriesGoal: evt.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <CaloriesGoal
          calories={this.state.calories}
          caloriesGoal={this.state.caloriesGoal}
          modalOpen={this.state.calorieGoalModal}
          toggleModal={() =>
            this.setState((prevState) => ({
              calorieGoalModal: !prevState.calorieGoalModal,
            }))
          }
          changeCalorieGoal={this.changeCalorieGoalHandler}
        />
        <Category
          state={this.state}
          changeSelectItemHandler={this.changeSelectItemHandler}
          changeFoodListHandler={this.changeFoodListHandler}
          handleButtonClick={this.handleButtonClick}
          handleCategoryChange={this.handleCategoryChange}
        />
        {this.state.selectedItem && (
          <NutritionFacts
            foodItem={this.state.categoryItems.find(
              (item) => item.name === this.state.selectedItem
            )}
          />
        )}
      </div>
    );
  }
}

export default App;

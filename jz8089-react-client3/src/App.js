import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Category from "./components/category/category";
import NutritionFacts from "./components/nutrition-facts/NutritionFacts";
import CaloriesGoal from "./components/calories-goal/CaloriesGoal";
import FoodItemForm from "./components/food-item-form/FoodItemForm";
import { Button, Container, Row, Col } from "reactstrap";
import EditFoodItem from "./components/edit-food-item/EditFoodItem";

// const foodData = {
//   proteins: [
//     {
//       name: "steak",
//       calories: 300,
//       totalFat: 5.73,
//       saturatedFat: 2.183,
//       transFat: 0.182,
//       protein: 29.44,
//       carbohydrate: 0.0,
//     },
//     {
//       name: "ground beef",
//       calories: 200,
//       totalFat: 13.1,
//       saturatedFat: 5.3,
//       transFat: 0.6,
//       protein: 15.18,
//       carbohydrate: 0.0,
//     },
//     {
//       name: "chicken",
//       calories: 100,
//       totalFat: 9.3,
//       saturatedFat: 2.5,
//       transFat: 0.1,
//       protein: 27.14,
//       carbohydrate: 0.0,
//     },
//     {
//       name: "fish",
//       calories: 80,
//       totalFat: 6.34,
//       saturatedFat: 1.0,
//       transFat: 0.0,
//       protein: 19.84,
//       carbohydrate: 0.0,
//     },
//     {
//       name: "soy",
//       calories: 50,
//       totalFat: 19.94,
//       saturatedFat: 2.884,
//       transFat: 0.0,
//       protein: 36.49,
//       carbohydrate: 30.16,
//     },
//   ],
//   fruits: [
//     {
//       name: "orange",
//       calories: 300,
//       totalFat: 1.0,
//       saturatedFat: 1.0,
//       transFat: 0.0,
//       protein: 0.0,
//       carbohydrate: 5.0,
//     },
//     {
//       name: "banana",
//       calories: 200,
//       totalFat: 1.2,
//       saturatedFat: 1.2,
//       transFat: 0.0,
//       protein: 2.0,
//       carbohydrate: 6.0,
//     },
//     {
//       name: "pineapple",
//       calories: 100,
//       totalFat: 1.2,
//       saturatedFat: 1.2,
//       transFat: 0.0,
//       protein: 0.5,
//       carbohydrate: 12.0,
//     },
//     {
//       name: "grapes",
//       calories: 80,
//       totalFat: 0.0,
//       saturatedFat: 0.0,
//       transFat: 0.0,
//       protein: 0.0,
//       carbohydrate: 4.0,
//     },
//     {
//       name: "blueberries",
//       calories: 50,
//       totalFat: 0.0,
//       saturatedFat: 0.0,
//       transFat: 0.0,
//       protein: 0.0,
//       carbohydrate: 3.0,
//     },
//   ],
//   vegetables: [
//     {
//       name: "romaine",
//       calories: 30,
//       totalFat: 1.2,
//       saturatedFat: 1.2,
//       transFat: 0.0,
//       protein: 2.0,
//       carbohydrate: 3.0,
//     },
//     {
//       name: "green beans",
//       calories: 40,
//       totalFat: 2.4,
//       saturatedFat: 2.4,
//       transFat: 0.0,
//       protein: 6.0,
//       carbohydrate: 4.0,
//     },
//     {
//       name: "squash",
//       calories: 100,
//       totalFat: 1.2,
//       saturatedFat: 1.2,
//       transFat: 0.0,
//       protein: 3.0,
//       carbohydrate: 6.0,
//     },
//     {
//       name: "spinach",
//       calories: 50,
//       totalFat: 0.0,
//       saturatedFat: 0.0,
//       transFat: 0.0,
//       protein: 7.0,
//       carbohydrate: 3.0,
//     },
//     {
//       name: "kale",
//       calories: 10,
//       totalFat: 0.0,
//       saturatedFat: 0.0,
//       transFat: 0.0,
//       protein: 4.0,
//       carbohydrate: 1.0,
//     },
//   ],
//   dairy: [
//     {
//       name: "milk",
//       calories: 300,
//       totalFat: 12.1,
//       saturatedFat: 8.6,
//       transFat: 2.5,
//       protein: 7.0,
//       carbohydrate: 13.0,
//     },
//     {
//       name: "yoghurt",
//       calories: 200,
//       totalFat: 6.2,
//       saturatedFat: 6.2,
//       transFat: 0.0,
//       protein: 11.0,
//       carbohydrate: 8.0,
//     },
//     {
//       name: "cheddar cheese",
//       calories: 200,
//       totalFat: 12.1,
//       saturatedFat: 8.6,
//       transFat: 2.5,
//       protein: 3.0,
//       carbohydrate: 1.0,
//     },
//     {
//       name: "skim milk",
//       calories: 100,
//       totalFat: 3.0,
//       saturatedFat: 3.0,
//       transFat: 0.0,
//       protein: 3.0,
//       carbohydrate: 7.0,
//     },
//     {
//       name: "cottage cheese",
//       calories: 80,
//       totalFat: 6.0,
//       saturatedFat: 5.0,
//       transFat: 1.0,
//       protein: 3.0,
//       carbohydrate: 4.0,
//     },
//   ],
//   grain: [
//     {
//       name: "bread",
//       calories: 200,
//       totalFat: 5.0,
//       saturatedFat: 5.0,
//       transFat: 0.0,
//       protein: 2.0,
//       carbohydrate: 16.0,
//     },
//     {
//       name: "bagel",
//       calories: 300,
//       totalFat: 7.0,
//       saturatedFat: 7.0,
//       transFat: 0.0,
//       protein: 2.0,
//       carbohydrate: 24.0,
//     },
//     {
//       name: "pita",
//       calories: 250,
//       totalFat: 5,
//       saturatedFat: 5,
//       transFat: 0.0,
//       protein: 1.0,
//       carbohydrate: 12.0,
//     },
//     {
//       name: "naan",
//       calories: 210,
//       totalFat: 4,
//       saturatedFat: 4,
//       transFat: 0.0,
//       protein: 1.2,
//       carbohydrate: 16.0,
//     },
//     {
//       name: "tortilla",
//       calories: 120,
//       totalFat: 3,
//       saturatedFat: 3,
//       transFat: 0.0,
//       protein: 0.8,
//       carbohydrate: 11.0,
//     },
//   ],
// };

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
      addFoodItemModal: false,
      addFoodItemForm: {
        category: "",
        name: "",
        calories: "",
        totalFat: "",
        saturatedFat: "",
        transFat: "",
        protein: "",
        carbohydrate: "",
      },
      editingFoodItem: false,
      editFoodItemForm: {
        calories: "",
        totalFat: "",
        saturatedFat: "",
        transFat: "",
        protein: "",
        carbohydrate: "",
      },
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.changeFoodListHandler = this.changeFoodListHandler.bind(this);
    this.changeSelectItemHandler = this.changeSelectItemHandler.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.changeCalorieGoalHandler = this.changeCalorieGoalHandler.bind(this);
    this.changeFoodItemFormHandler = this.changeFoodItemFormHandler.bind(this);
    this.submitAddFoodItemHandler = this.submitAddFoodItemHandler.bind(this);
    this.deleteFoodItemHandler = this.deleteFoodItemHandler.bind(this);
    this.editFoodItemHandler = this.editFoodItemHandler.bind(this);
    this.changeEditFoodItemHandler = this.changeEditFoodItemHandler.bind(this);
    this.submitEditFoodItemHandler = this.submitEditFoodItemHandler.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/get_all_categories")
      .then((res) => res.json())
      .then((json) => this.setState({ categories: json }));
  }

  async handleCategoryChange(evt) {
    if (evt.target.value) {
      const response = await fetch(
        `http://localhost:5000/get_all_food_items/${evt.target.value}`
      );
      const parsedResponse = await response.json();
      const categoryItems = parsedResponse.map((item) => ({
        name: item[0],
        calories: item[1],
        totalFat: item[2],
        saturatedFat: item[3],
        transFat: item[4],
        protein: item[5],
        carbohydrate: item[6],
      }));
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

  changeFoodItemFormHandler(evt, name) {
    this.setState((prevState) => ({
      addFoodItemForm: {
        ...prevState.addFoodItemForm,
        [name]: evt.target.value,
      },
    }));
  }

  async submitAddFoodItemHandler() {
    await fetch("http://localhost:5000/post_new_food_item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.addFoodItemForm),
    });
    if (this.state.categoryItems.length) {
      this.setState((prevState) => ({
        categoryItems: [...prevState.categoryItems, this.state.addFoodItemForm],
      }));
    }
    this.setState({
      addFoodItemModal: false,
      addFoodItemForm: {
        category: "",
        name: "",
        calories: "",
        totalFat: "",
        saturatedFat: "",
        transFat: "",
        protein: "",
        carbohydrate: "",
      },
    });
  }

  async deleteFoodItemHandler() {
    const deletedItem = this.state.selectedItem;
    await fetch(`http://localhost:5000/delete_food_item/${deletedItem}`, {
      method: "DELETE",
    });
    this.setState((prevState) => ({
      categoryItems: prevState.categoryItems.filter(
        (item) => item.name !== deletedItem
      ),
      selectedItems: prevState.selectedItems.filter(
        (item) => item.name !== deletedItem
      ),
      selectedItem: "",
    }));
  }

  editFoodItemHandler() {
    if (this.state.editingFoodItem) {
      this.setState({ editingFoodItem: false });
    } else {
      let foundItem = this.state.categoryItems.find(
        (item) => item.name === this.state.selectedItem
      );
      if (!foundItem) {
        foundItem = this.state.selectedItems.find(
          (item) => item.name === this.state.selectedItem
        );
      }
      this.setState({ editingFoodItem: true, editFoodItemForm: foundItem });
    }
  }

  changeEditFoodItemHandler(evt, name) {
    this.setState((prevState) => ({
      editFoodItemForm: {
        ...prevState.editFoodItemForm,
        [name]: +evt.target.value,
      },
    }));
  }

  async submitEditFoodItemHandler() {
    const editedFoodItem = this.state.editFoodItemForm;
    await fetch("http://localhost:5000/put_food_item", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedFoodItem),
    });
    this.setState((prevState) => ({
      categoryItems: prevState.categoryItems.map((item) => {
        if (item.name === editedFoodItem.name) {
          return editedFoodItem;
        } else {
          return item;
        }
      }),
      selectedItems: prevState.selectedItems.map((item) => {
        if (item.name === editedFoodItem.name) {
          return editedFoodItem;
        } else {
          return item;
        }
      }),
      editingFoodItem: false,
      editFoodItemForm: {
        calories: "",
        totalFat: "",
        saturatedFat: "",
        transFat: "",
        protein: "",
        carbohydrate: "",
      },
    }));
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
        <Container className="mt-3">
          <Row>
            {this.state.selectedItem && (
              <>
                <Col sm={4} className="text-end">
                  <EditFoodItem
                    modalOpen={this.state.editingFoodItem}
                    toggleModal={this.editFoodItemHandler}
                    editFoodItemForm={this.state.editFoodItemForm}
                    onChangeForm={this.changeEditFoodItemHandler}
                    onSubmit={this.submitEditFoodItemHandler}
                  />
                </Col>
                <Col sm={2} className="text-center">
                  <Button color="danger" onClick={this.deleteFoodItemHandler}>
                    Delete item
                  </Button>
                </Col>
              </>
            )}
            <Col
              sm={this.state.selectedItem ? 6 : 12}
              className={this.state.selectedItem ? "text-start" : "text-center"}
            >
              <FoodItemForm
                modalOpen={this.state.addFoodItemModal}
                toggleModal={() =>
                  this.setState((prevState) => ({
                    addFoodItemModal: !prevState.addFoodItemModal,
                  }))
                }
                categories={this.state.categories}
                addFoodItemForm={this.state.addFoodItemForm}
                onChangeForm={this.changeFoodItemFormHandler}
                onSubmit={this.submitAddFoodItemHandler}
              />
            </Col>
          </Row>
        </Container>
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

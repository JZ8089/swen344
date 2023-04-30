import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Category from "./components/category/category";
import NutritionFacts from "./components/nutrition-facts/NutritionFacts";
import CaloriesGoal from "./components/calories-goal/CaloriesGoal";
import FoodItemForm from "./components/food-item-form/FoodItemForm";
import { Button, Container, Row, Col } from "reactstrap";
import EditFoodItem from "./components/edit-food-item/EditFoodItem";

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
    try {
      await fetch("http://localhost:5000/put_food_item", {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedFoodItem),
      });
    } catch (error) {
      console.log(error.message);
    }
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

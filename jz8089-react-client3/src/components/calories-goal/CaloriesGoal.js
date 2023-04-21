import {
  Button,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const CaloriesGoal = ({
  caloriesGoal,
  modalOpen,
  toggleModal,
  changeCalorieGoal,
}) => {
  return (
    <Container className="text-center mt-5">
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Update your total calorie goal
        </ModalHeader>
        <ModalBody>
          <Input
            type="number"
            className="w-50"
            value={caloriesGoal}
            onChange={changeCalorieGoal}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Col>
        <h3 className="text-primary">Total calorie goal: {caloriesGoal}</h3>
      </Col>
      <Col>
        <Button color="primary" onClick={toggleModal}>
          Update goal
        </Button>
      </Col>
    </Container>
  );
};

export default CaloriesGoal;

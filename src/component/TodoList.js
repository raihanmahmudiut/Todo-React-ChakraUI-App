import React, { useState } from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  Spacer,
  Badge,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
function TodoList({ todos, deleteTodo, editTodo }) {
  //   const [todo, setTodo] = useState("");

  //set the modal's todo value
  const [modalValue, setModalValue] = useState({});
  //This is the hook to close the modal when the user has done editing
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function handleEditClick(todo) {
    setIsOpen(true);
    //passing the todo to modal value
    setModalValue(todo);
  }

  function handleEditInputChange(e, id) {
    setModalValue({ ...modalValue, text: e.target.value });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    editTodo(modalValue.id, modalValue);
    setModalValue("");
    setIsOpen(false);
  }

  if (!todos.length) {
    return (
      <Badge colorScheme="Blue" p="4" m="4" borderRadius="6">
        No Todos to do!
      </Badge>
    );
  }

  return (
    <VStack
    //   divider={<StackDivider />}
    //   borderColor="gray.100"
    //   borderWidth="2px"
    //   p="4"
    //   borderRadius="lg"
    //   w="100%"
    //   maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
    >
      {todos.map((todo) => (
        <HStack key={todo.id} spacing="24px" w="320px">
          <Text fontWeight="bold">{todo.text}</Text>
          <Spacer />
          <IconButton
            icon={<FaEdit />}
            isRound="true"
            onClick={() => handleEditClick(todo)}
          />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
          modal for todo editing
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit the Todo</ModalHeader>
              <ModalCloseButton />
              <form onSubmit={handleEditSubmit}>
                <ModalBody>
                  <Input
                    value={modalValue.text}
                    Key={modalValue.id}
                    variant="outline"
                    type="text"
                    placeholder="Update the Todo"
                    onChange={handleEditInputChange}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="teal" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" colorScheme="teal" mr={3}>
                    Save
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;

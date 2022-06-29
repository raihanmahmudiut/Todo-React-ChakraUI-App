import { Button, Input, useToast, VStack } from "@chakra-ui/react";
import { useState, React } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const toast = useToast();
  const [content, setContent] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      return toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    const todo = {
      id: nanoid(),
      text: content,
    };
    addTodo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack mt="8">
        <Input
          variant="filled"
          placeholder="Learning"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </VStack>
    </form>
  );
}

export default AddTodo;

import { RecipeListPage } from "./pages/RecipeListPage";
import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <Center bgColor="blue.400">
      {userRecipe ? (
        <RecipePage recipe={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <RecipeListPage clickFn={setUserRecipe} />
      )}
    </Center>
  );
};

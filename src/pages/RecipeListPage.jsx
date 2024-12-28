import { Heading, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";
import { RecipeListItem } from "../components/RecipeListItem";

export const RecipeListPage = ({ clickFn }) => {
  const [searchRecipes, setSearchRecipes] = useState("");

  const matchedNames = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchRecipes.toLowerCase());
  });

  const matchedHealthLabels = data.hits.filter((recipe) => {
    return recipe.recipe.healthLabels.find((healthLabel) =>
      healthLabel.toLowerCase().includes(searchRecipes.toLowerCase())
    );
  });

  const matchedRecipes = (labels, healthLabels) => {
    const mergeSearch = [...labels];

    healthLabels.forEach((recipe) => {
      if (!mergeSearch.includes(recipe)) {
        mergeSearch.push(recipe);
      }
    });
    return mergeSearch;
  };

  const handleChange = (event) => {
    setSearchRecipes(event.target.value);
  };

  return (
    <Flex
      direction={"column"}
      bgColor="blue.400"
      alignItems="center"
      p={10}
      justifyContent="center"
    >
      <Heading size="xl" color="white" mb={8}>
        Winc Recipe Checker
      </Heading>
      <TextInput
        placeholder=" Search recipes"
        onChange={handleChange}
        w={"40vw"}
        bg="white"
        mb={8}
        p={2}
        borderRadius="2xl"
      />

      {searchRecipes ? (
        <>
          {matchedRecipes(matchedNames, matchedHealthLabels).length > 0 ? (
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
              gap={6}
              mb={4}
            >
              {matchedRecipes(matchedNames, matchedHealthLabels).map((item) => (
                <RecipeListItem
                  key={item.recipe.label}
                  recipe={item}
                  clickFn={clickFn}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Text size="xl" color="white" height="400">
              No Matches Found.
            </Text>
          )}
        </>
      ) : (
        <>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
            spacing={6}
            mb={4}
          >
            {data.hits.map((item) => (
              <RecipeListItem
                key={item.recipe.label}
                recipe={item}
                clickFn={clickFn}
              />
            ))}
          </SimpleGrid>
        </>
      )}
    </Flex>
  );
};

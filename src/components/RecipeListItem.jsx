import { Heading, Image, Text, Box, Flex } from "@chakra-ui/react";

export const RecipeListItem = ({ recipe, clickFn }) => {
  const vegetarian = recipe.recipe.healthLabels.some((label) =>
    label.toLowerCase().includes("vegetarian")
  );

  const vegan = recipe.recipe.healthLabels.some((label) =>
    label.toLowerCase().includes("vegan")
  );
  const pescatarian = recipe.recipe.healthLabels.some((label) =>
    label.toLowerCase().includes("pescatarian")
  );

  return (
    <Flex
      flexDir="column"
      gap={1}
      onClick={() => clickFn(recipe)}
      borderRadius="2xl"
      w="100%"
      h="100%"
      bgColor="gray.100"
      cursor="pointer"
      alignItems="flex-start"
    >
      <Image
        src={recipe.recipe.image}
        w="100%"
        h="200px"
        alt={recipe.recipe.label}
        overflow="hidden"
        borderTopRadius="2xl"
        objectPosition="top"
        objectFit="cover"
      />
      <Box p={2} mt={1} textAlign="center" w="100%">
        <Text color="gray.500" textTransform="uppercase">
          {recipe.recipe.mealType}
        </Text>
        <Heading fontSize="xl" color="gray.800" mt={1}>
          {recipe.recipe.label}
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center" mt={2}>
          {vegetarian && (
            <Text
              bgColor="purple.100"
              px={2}
              py={1}
              fontWeight="bold"
              textTransform="uppercase"
              borderRadius="md"
              mx={1}
              mb={2}
            >
              Vegetarian
            </Text>
          )}
          {vegan && (
            <Text
              bgColor="purple.100"
              px={2}
              py={1}
              fontWeight="bold"
              textTransform="uppercase"
              borderRadius="md"
              mx={1}
              mb={2}
            >
              Vegan
            </Text>
          )}
          {pescatarian && (
            <Text
              bgColor="purple.100"
              px={2}
              py={1}
              fontWeight="bold"
              textTransform="uppercase"
              borderRadius="md"
              mx={1}
              mb={2}
            >
              Pescatarian
            </Text>
          )}
        </Flex>
        {recipe.recipe.dietLabels.length > 0 && (
          <>
            <Flex flexWrap="wrap" justifyContent="center" mt={2}>
              {recipe.recipe.dietLabels.map((label) => (
                <Text
                  key={label}
                  bgColor="green.100"
                  px={2}
                  py={1}
                  fontWeight="bold"
                  textTransform="uppercase"
                  borderRadius="md"
                  mx={1}
                  mb={2}
                >
                  {label}
                </Text>
              ))}
            </Flex>
          </>
        )}
        <Flex justifyContent="center" mt={2}>
          <Text color="gray.500" mx={1}>
            Dish:
          </Text>
          <Text
            color="gray.700"
            fontWeight="bold"
            mx={1}
            textTransform="capitalize"
          >
            {recipe.recipe.dishType}
          </Text>
        </Flex>
        {recipe.recipe.cautions.length > 0 && (
          <>
            <Text color="gray.500" mt={2}>
              Cautions:
            </Text>
            <Flex flexWrap="wrap" justifyContent="center" mt={1}>
              {recipe.recipe.cautions.map((caution) => (
                <Text
                  key={caution}
                  bgColor="red.100"
                  px={2}
                  py={1}
                  fontWeight="bold"
                  textTransform="uppercase"
                  borderRadius="md"
                  mx={1}
                  mb={2}
                >
                  {caution}
                </Text>
              ))}
            </Flex>
          </>
        )}
      </Box>
    </Flex>
  );
};

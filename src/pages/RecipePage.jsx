import {
  Image,
  Text,
  Button,
  Box,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";

const NutrientBox = ({ label, quantity, unit }) => (
  <Box mt={2} fontSize={12}>
    <Text>
      {Math.round(quantity)} {unit}
    </Text>
    <Text fontWeight="bold">{label}</Text>
  </Box>
);

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Flex
      flexDir={"column"}
      bgColor="gray.100"
      width={{ base: "100vw", sm: "100vw", md: "80vw", xl: "60vw" }}
    >
      <Image
        src={recipe.recipe.image}
        w="100%"
        h="200px"
        alt={recipe.recipe.label}
        overflow="hidden"
        objectPosition="top"
        objectFit="cover"
      />
      <Flex flexDir="row" gap={4}>
        <Box p={2} mt={1} textAlign="left" width="50%">
          <Text color="gray.500" textTransform="uppercase" fontSize={12} mb={2}>
            {recipe.recipe.mealType}
          </Text>
          <Heading fontSize={18} color="gray.600" mt={1} mb={2}>
            {recipe.recipe.label}
          </Heading>

          <Text
            color="gray.500"
            fontWeight="md"
            textTransform="capitalize"
            mt={1}
            mb={2}
          >
            {recipe.recipe.dishType}
          </Text>
          <Flex flexDir="row" justifyContent="left" mt={1} mb={2}>
            <Text fontSize={16}>Total cooking time: </Text>
            <Text fontSize={16} mx={1} fontWeight="semibold">
              {recipe.recipe.totalTime}
              {""} Minutes
            </Text>
          </Flex>
          <Flex justifyContent="left" mt={1} mb={2}>
            <Text fontSize={16}>Servings: </Text>
            <Text fontSize={16} mx={1} fontWeight="semibold">
              {recipe.recipe.yield}
            </Text>
          </Flex>

          {recipe.recipe.ingredientLines.length > 0 && (
            <>
              <Text>Ingredients:</Text>
              <Flex direction="column" justifyContent="left" mt={1}>
                {recipe.recipe.ingredientLines.map((label) => (
                  <Text key={label} fontSize={13}>
                    {label}
                  </Text>
                ))}
              </Flex>
            </>
          )}
        </Box>
        <Box p={2} mt={1} textAlign="left" w="50%">
          {recipe.recipe.healthLabels.length > 0 && (
            <>
              <Text>Health labels:</Text>
              <Flex flexWrap="wrap" justifyContent="left" mt={1}>
                {recipe.recipe.healthLabels.map((label) => (
                  <Text
                    key={label}
                    bgColor="purple.100"
                    px={2}
                    py={1}
                    fontWeight="bold"
                    textTransform="uppercase"
                    borderRadius="md"
                    mx={1}
                    mb={1}
                  >
                    {label}
                  </Text>
                ))}
              </Flex>
            </>
          )}
          {recipe.recipe.dietLabels.length > 0 && (
            <>
              <Text mt={4}>Diet:</Text>
              <Flex flexWrap="wrap" justifyContent="left" mt={2}>
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
                    mb={1}
                  >
                    {label}
                  </Text>
                ))}
              </Flex>
            </>
          )}
          {recipe.recipe.cautions.length > 0 && (
            <>
              <Text mt={4}>Cautions:</Text>
              <Flex flexWrap="wrap" justifyContent="left" mt={1}>
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
                    mb={1}
                  >
                    {caution}
                  </Text>
                ))}
              </Flex>
            </>
          )}
          <Text p={1} mt={4} fontWeight="bold">
            Total nutrients:
          </Text>
          <Flex p={2} flexWrap={"wrap"} gap={4}>
            <NutrientBox
              label={recipe.recipe.totalNutrients.ENERC_KCAL.label}
              quantity={recipe.recipe.totalNutrients.ENERC_KCAL.quantity}
              unit={recipe.recipe.totalNutrients.ENERC_KCAL.unit}
            />
            <NutrientBox
              label={recipe.recipe.totalNutrients.CHOCDF.label}
              quantity={recipe.recipe.totalNutrients.CHOCDF.quantity}
              unit={recipe.recipe.totalNutrients.CHOCDF.unit}
            />
            <NutrientBox
              label={recipe.recipe.totalNutrients.PROCNT.label}
              quantity={recipe.recipe.totalNutrients.PROCNT.quantity}
              unit={recipe.recipe.totalNutrients.PROCNT.unit}
            />
            <NutrientBox
              label={recipe.recipe.totalNutrients.FAT.label}
              quantity={recipe.recipe.totalNutrients.FAT.quantity}
              unit={recipe.recipe.totalNutrients.FAT.unit}
            />
            <NutrientBox
              label={recipe.recipe.totalNutrients.CHOLE.label}
              quantity={recipe.recipe.totalNutrients.CHOLE.quantity}
              unit={recipe.recipe.totalNutrients.CHOLE.unit}
            />
            <NutrientBox
              label={recipe.recipe.totalNutrients.NA.label}
              quantity={recipe.recipe.totalNutrients.NA.quantity}
              unit={recipe.recipe.totalNutrients.NA.unit}
            />
          </Flex>
        </Box>
      </Flex>
      <Center>
        <Button
          onClick={() => clickFn()}
          mt={12}
          border="2px solid black"
          mb={2}
          size={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
        >
          <Text fontSize={{ base: "12px", sm: "14px", md: "16px", xl: "18px" }}>
            Back to overview recipes
          </Text>
        </Button>
      </Center>
    </Flex>
  );
};

import { Box, Button, Container, Flex, Grid, Heading, Input, Select, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "t-15", visibility: "Public", created: "20 hours ago", author: "fabian" },
    { id: 2, name: "tube-mimic", visibility: "Public", created: "23 hours ago", author: "fabian" },
    { id: 3, name: "smart-data-analyzer", visibility: "Public", created: "3 days ago", author: "fabian" },
    { id: 4, name: "craft-something", visibility: "Public", created: "5 days ago", author: "fabian" },
    { id: 5, name: "build-that", visibility: "Public", created: "6 days ago", author: "fabian" },
    { id: 6, name: "create-this", visibility: "Public", created: "7 days ago", author: "fabian" },
  ]);

  return (
    <Container maxW="container.xl" p={4} bg="gray.900" color="white">
      <Flex justify="space-between" align="center" mb={4}>
        <Select placeholder="Select project..." maxW="200px" bg="gray.800" borderColor="gray.700">
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
        </Select>
        <Text>Docs</Text>
      </Flex>
      <Heading as="h1" size="2xl" textAlign="center" mb={6}>
        What do you want to <Text as="span" color="teal.300">build</Text>?
      </Heading>
      <Flex justify="center" mb={4}>
        <Input placeholder="e.g., A personal blog about my life" maxW="600px" bg="gray.800" borderColor="gray.700" />
      </Flex>
      <Flex justify="center" mb={6}>
        <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid">
          Create
        </Button>
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {projects.map((project) => (
          <Box key={project.id} bg="gray.800" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold">{project.name}</Text>
            <Text>{project.visibility}</Text>
            <Text fontSize="sm">Created {project.created} by {project.author}</Text>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
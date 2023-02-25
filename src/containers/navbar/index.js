import { Flex, Heading } from "@chakra-ui/react";
import { DrawerComp } from "../../comps/";
import { useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  // For responsiveness
  const [isLargerThan528, isLargerThan400, isLargerThan340] = useMediaQuery([
    "(min-width:528px)",
    "(min-width:400px)",
    "(min-width:340px)",
  ]);

  const getHeadingFontSize = () => {
    if (isLargerThan528) {
      return "1.8rem";
    }
    if (isLargerThan400) {
      return "1.4rem";
    }
    if (isLargerThan340) {
      return "1rem";
    } else {
      return "0.89rem";
    }
  };

  return (
    <header>
      <Flex
        width="100vw"
        // width={isLargerThan700 ? "100vw" : "120vw"}
        color="#000000"
        p={4}
        justifyContent="left"
        bg="var(--secondary)"
        // bg={isLargerThan528 ? "green" : "red"}
      >
        <DrawerComp />
        <Heading
          fontStyle="bold"
          fontFamily="'Arial', serif"
          mt={2}
          mb={2}
          pl={4}
          fontSize={getHeadingFontSize()}
        >
          <Flex>
            Insta-AQL
          </Flex>
        </Heading>
      </Flex>
    </header>
  );
};

export default Navbar;

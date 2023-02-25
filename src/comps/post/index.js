import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import "./styles.css";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { firestore } from "../../services/firebaseConfig";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const Post = ({
  id,
  caption,
  imageUrl,
  comments,
  likes,
  timestamp,
  tags,
  activeTab
}) => {
  // fetcing user's state from context layer
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Adding like method
  const addLike = (postId) => {
    firestore
      .collection("posts")
      .doc(postId)
      .update({
        likes: likes + 1,
      });
  };

  return (
    <Box
      key={id}
      mb={5}
      bg="#fafafa"
      borderRadius="6"
    >
      {imageUrl ? (
        <>
          <Image
            mt="1"
            height="50vh"
            width="100%"
            objectFit="cover"
            borderRadius="md"
            src={imageUrl}
            onClick={onOpen}
          />

          <Modal size="xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay 
              bg='none'
              backdropFilter='auto'
              backdropBlur='2px'
            />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton  
                _focus={{
                  border: "none",
                  outline: "none",
                }} 
              />
              </ModalHeader>
              <ModalBody>
              <Image
                mt="1"
                height="auto"
                width="100%"
                objectFit="cover"
                borderRadius="md"
                src={imageUrl}
              />
              </ModalBody>

              <ModalFooter justifyContent="space-between">
                <ModalHeader px={0} minWidth="400px">{caption}</ModalHeader>
                <Button
                  onClick={() => addLike(id)}
                  _focus={{
                    border: "none",
                    outline: "none",
                  }}
                  bg="transparent"
                  leftIcon={<BsFillHeartFill />}
                  variant="solid"
                  mt={2}
                  color="red"
                  px={0}
                >
                  {likes}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <Spacer mt={4} />
        </>
      )}
      
      {activeTab === "tab1" ? (
      <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          textAlign="start"
          float="left"
          mt={2}
          ml={2}
          mb={2}
          color="#000000"
          fontSize="sm"
          fontWeight="bold"
          lineHeight="short"
          overflow="scroll"
        >
          {caption}
        </Text>
        <Button
          onClick={() => addLike(id)}
          _focus={{
            border: "none",
            outline: "none",
          }}
          bg="transparent"
          leftIcon={likes > 0 ? <BsFillHeartFill /> : <BsHeart /> }
          variant="solid"
          mt={2}
          color="red"
        >
          {likes}
        </Button>
      </Flex>
      </>
      ) : (
        <Flex
          alignItems="center"
          justifyContent="left"
        >
          {tags.map(tag => 
            <Text
              textAlign="start"
              float="left"
              mt={2}
              ml={2}
              mb={2}
              color="#000000"
              fontSize="sm"
              fontWeight="bold"
              lineHeight="short"
              overflow="scroll"
            >
              #{tag}
            </Text>
          )}
        </Flex>
        )}
    </Box>
  );
};

export default Post;

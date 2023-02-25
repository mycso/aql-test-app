import "./styles.css";
import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { Post } from "../../comps/";
import { firestore } from "../../services/firebaseConfig";

const PostFeeds = ({ activeTab }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    activeTab === "tab1" ? (
      firestore
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      })
    ) : (
      firestore
      .collection("posts")
      .where("enableTags", "==", true)
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      })
    )
  }, [activeTab]);

  return (
    <Box
      className="itemsList"
    >
          {posts.map(({ id, post }) => {
            return (
              <Post
                key={id}
                id={id}
                userId={post.userId}
                likes={post.likes}
                timestamp={post.timestamp}
                imageUrl={post.imageUrl}
                caption={post.caption}
                tags={post.tags}
                activeTab={activeTab}
              />
            );
          })}
    </Box>
  );
};

export default PostFeeds;

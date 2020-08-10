import React from "react";
import { PostType } from "../../interfaces";
import PostItem from "./PostItem";
import { List } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

interface Props {
  postsLoading: boolean;
  takeLatestPosts: PostType[];
}

const Posts: React.FC<Props> = ({ postsLoading, takeLatestPosts }) => {
  if (postsLoading) return <CircularProgress />;

  return (
    <Grid item md={8}>
      <List>
        {takeLatestPosts.map((post: PostType) => (
          <PostItem key={post.id} post={post} />
        ))}
      </List>
    </Grid>
  );
};

export default Posts;

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);
  // Change page
  console.log("Card Page test");

  return (
    <div style={{ padding: 20 }}>
      {posts.map((post) => (
        <Card key={post.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardMedia
              component="img"
              height="140"
              image={post.thumbnailUrl}
              alt={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Cards;

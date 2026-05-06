"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Props {
  product: any;

  onClick: () => void;
}

function ProductCard({
  product,
  onClick,
}: Props) {
  return (
    <Card
      sx={{
        cursor: "pointer",
        height: "100%",
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="220"
        image={product.thumbnail}
        alt={product.title}
      />

      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {product.title}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Price: ${product.price}
        </Typography>

        <Typography>
          Category: {product.category}
        </Typography>

        <Typography>
          Rating: {product.rating}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default React.memo(
  ProductCard
);
"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import api from "@/services/api";

import { useParams } from "next/navigation";

import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";

export default function ProductDetailsPage() {
  const params = useParams();

  const [product, setProduct] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchProduct =
      async () => {
        try {
          const response =
            await api.get(
              `/products/${params.id}`
            );

          setProduct(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <Container sx={{ mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Button
        component={Link}
        href="/products"
        variant="outlined"
        sx={{ mb: 3 }}
      >
        Back to Products
      </Button>

      <Grid
        container
        spacing={4}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Swiper spaceBetween={20}>
            {product.images.map(
              (
                image: string,
                index: number
              ) => (
                <SwiperSlide
                  key={index}
                >
                  <img
                    src={image}
                    alt="product"
                    style={{
                      width:
                        "100%",
                      borderRadius:
                        "12px",
                    }}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontWeight:
                    "bold",
                  mb: 2,
                }}
              >
                {product.title}
              </Typography>

              <Typography
                sx={{ mb: 2 }}
              >
                {
                  product.description
                }
              </Typography>

              <Typography
                sx={{ mb: 1 }}
              >
                <strong>
                  Price:
                </strong>{" "}
                $
                {
                  product.price
                }
              </Typography>

              <Typography
                sx={{ mb: 1 }}
              >
                <strong>
                  Rating:
                </strong>{" "}
                {
                  product.rating
                }
              </Typography>

              <Typography
                sx={{ mb: 1 }}
              >
                <strong>
                  Brand:
                </strong>{" "}
                {
                  product.brand
                }
              </Typography>

              <Typography
                sx={{ mb: 1 }}
              >
                <strong>
                  Category:
                </strong>{" "}
                {
                  product.category
                }
              </Typography>

              <Typography
                sx={{ mb: 1 }}
              >
                <strong>
                  Stock:
                </strong>{" "}
                {
                  product.stock
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
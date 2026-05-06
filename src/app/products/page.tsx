"use client";

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import { useProductStore } from "@/store/productStore";

import ProductCard from "@/components/ProductCard";

import Navbar from "@/components/Navbar";

export default function ProductsPage() {
  const router = useRouter();

  const {
    products,
    total,
    loading,
    fetchProducts,
  } = useProductStore();

  const [page, setPage] =
    useState(1);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const limit = 10;

  const totalPages =
    useMemo(() => {
      return Math.ceil(
        total / limit
      );
    }, [total, limit]);

  useEffect(() => {
    const skip =
      (page - 1) * limit;

    fetchProducts(
      limit,
      skip,
      search,
      category
    );
  }, [
    page,
    search,
    category,
    fetchProducts,
  ]);

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="Search Products"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <Select
            value={category}
            displayEmpty
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">
              All Categories
            </MenuItem>

            <MenuItem value="beauty">
              Beauty
            </MenuItem>

            <MenuItem value="fragrances">
              Fragrances
            </MenuItem>

            <MenuItem value="furniture">
              Furniture
            </MenuItem>

            <MenuItem value="groceries">
              Groceries
            </MenuItem>
          </Select>
        </Box>

        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Grid
              container
              spacing={3}
            >
              {products.map(
                (
                  product: any
                ) => (
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 4,
                    }}
                    key={
                      product.id
                    }
                  >
                    <ProductCard
                      product={
                        product
                      }
                      onClick={() =>
                        router.push(
                          `/products/${product.id}`
                        )
                      }
                    />
                  </Grid>
                )
              )}
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "center",
                mt: 5,
              }}
            >
              <Pagination
                count={
                  totalPages
                }
                page={page}
                onChange={(
                  _,
                  value
                ) =>
                  setPage(value)
                }
              />
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
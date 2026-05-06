"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

import Navbar from "@/components/Navbar";

import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function DashboardPage() {
  const router = useRouter();

  const { token } =
    useAuthStore();

  useEffect(() => {
    const savedToken =
      localStorage.getItem("token");

    if (!token && !savedToken) {
      router.push("/login");
    }
  }, [token, router]);

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 5, mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Admin Dashboard
        </Typography>

        <Typography
          sx={{
            mb: 5,
            color: "gray",
          }}
        >
          Welcome to the Study Abroad
          Management System
        </Typography>

        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      "bold",
                  }}
                >
                  Users Management
                </Typography>

                <Typography
                  sx={{ mt: 2 }}
                >
                  View all users,
                  search users,
                  paginate records,
                  and access detailed
                  user information.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      "bold",
                  }}
                >
                  Products Management
                </Typography>

                <Typography
                  sx={{ mt: 2 }}
                >
                  Browse products,
                  filter by category,
                  search products,
                  and view product
                  details with image
                  carousel.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      "bold",
                  }}
                >
                  Authentication
                </Typography>

                <Typography
                  sx={{ mt: 2 }}
                >
                  Secure admin login
                  using DummyJSON Auth
                  API with Zustand
                  state management.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      "bold",
                    mb: 2,
                  }}
                >
                  Technologies Used
                </Typography>

                <Typography>
                  • Next.js 16
                </Typography>

                <Typography>
                  • TypeScript
                </Typography>

                <Typography>
                  • Material UI (MUI)
                </Typography>

                <Typography>
                  • Zustand State
                  Management
                </Typography>

                <Typography>
                  • Axios API Calls
                </Typography>

                <Typography>
                  • DummyJSON REST API
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      "bold",
                    mb: 2,
                  }}
                >
                  Features Completed
                </Typography>

                <Typography>
                  ✅ Authentication
                </Typography>

                <Typography>
                  ✅ Protected Routes
                </Typography>

                <Typography>
                  ✅ Users Pagination
                </Typography>

                <Typography>
                  ✅ Users Search
                </Typography>

                <Typography>
                  ✅ Products Search
                </Typography>

                <Typography>
                  ✅ Products Filters
                </Typography>

                <Typography>
                  ✅ Product Details
                </Typography>

                <Typography>
                  ✅ Responsive UI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mt: 8,
            mb: 4,
          }}
        >
          Quick Overview
        </Typography>

        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight:
                      "bold",
                  }}
                >
                  100+
                </Typography>

                <Typography>
                  Total Users
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight:
                      "bold",
                  }}
                >
                  200+
                </Typography>

                <Typography>
                  Products Listed
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight:
                      "bold",
                  }}
                >
                  95%
                </Typography>

                <Typography>
                  API Success Rate
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight:
                      "bold",
                  }}
                >
                  24/7
                </Typography>

                <Typography>
                  System Availability
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mt: 8,
            mb: 4,
          }}
        >
          Recent Activities
        </Typography>

        <Card
          sx={{
            borderRadius: 4,
            mb: 5,
          }}
        >
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              • User management module
              integrated successfully.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              • Product filtering system
              completed.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              • Zustand state management
              configured.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              • Authentication API
              connected successfully.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              • Responsive UI optimized
              for all devices.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              • Product details carousel
              implemented.
            </Typography>
          </CardContent>
        </Card>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Project Highlights
        </Typography>

        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      "bold",
                    mb: 2,
                  }}
                >
                  Performance Optimization
                </Typography>

                <Typography>
                  Implemented API-side
                  pagination, Zustand
                  caching, useCallback,
                  and optimized rendering
                  for better performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      "bold",
                    mb: 2,
                  }}
                >
                  Responsive Design
                </Typography>

                <Typography>
                  Fully responsive admin
                  dashboard built using
                  Material UI Grid system
                  and reusable components.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
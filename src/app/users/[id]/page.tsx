"use client";

import {
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

export default function UserDetailsPage() {
  const params = useParams();

  const [user, setUser] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchUser =
      async () => {
        try {
          const response =
            await api.get(
              `/users/${params.id}`
            );

          setUser(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchUser();
  }, [params.id]);

  if (loading) {
    return (
      <Container sx={{ mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Button
        component={Link}
        href="/users"
        variant="outlined"
        sx={{ mb: 3 }}
      >
        Back to Users
      </Button>

      <Card>
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
            }}
          >
            {user.firstName}{" "}
            {user.lastName}
          </Typography>

          <Grid
            container
            spacing={3}
          >
            <Grid size={6}>
              <Typography>
                <strong>Email:</strong>{" "}
                {user.email}
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography>
                <strong>Phone:</strong>{" "}
                {user.phone}
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography>
                <strong>Gender:</strong>{" "}
                {user.gender}
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography>
                <strong>Age:</strong>{" "}
                {user.age}
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography>
                <strong>Company:</strong>{" "}
                {
                  user.company?.name
                }
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography>
                <strong>University:</strong>{" "}
                {
                  user.university
                }
              </Typography>
            </Grid>

            <Grid size={12}>
              <Typography>
                <strong>Address:</strong>{" "}
                {
                  user.address
                    ?.address
                }
                ,{" "}
                {
                  user.address?.city
                }
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
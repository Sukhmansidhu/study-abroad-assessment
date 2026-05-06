"use client";

import {
  useCallback,
  useState,
} from "react";

import api from "@/services/api";

import { useAuthStore } from "@/store/authStore";

import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginPage() {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const router = useRouter();

  const { setAuth } =
    useAuthStore();

  const handleLogin =
    useCallback(async () => {
      try {
        setLoading(true);

        const response =
          await api.post(
            "/auth/login",
            {
              username,
              password,
            }
          );

        setAuth(
          response.data,
          response.data
            .accessToken
        );

        localStorage.setItem(
          "token",
          response.data
            .accessToken
        );

        router.push(
          "/dashboard"
        );
      } catch (error) {
        console.log(error);

        alert(
          "Invalid Credentials"
        );
      } finally {
        setLoading(false);
      }
    }, [
      username,
      password,
      router,
      setAuth,
    ]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            padding: 4,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight:
                "bold",
              mb: 3,
              textAlign:
                "center",
            }}
          >
            Admin Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
            }}
            onClick={
              handleLogin
            }
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
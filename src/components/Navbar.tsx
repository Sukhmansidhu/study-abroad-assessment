"use client";

import Link from "next/link";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const router = useRouter();

  const { logout } =
    useAuthStore();

  const handleLogout = () => {
    logout();

    localStorage.removeItem(
      "token"
    );

    router.push("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          Study Abroad Admin
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            color="inherit"
            component={Link}
            href="/dashboard"
          >
            Dashboard
          </Button>

          <Button
            color="inherit"
            component={Link}
            href="/users"
          >
            Users
          </Button>

          <Button
            color="inherit"
            component={Link}
            href="/products"
          >
            Products
          </Button>

          <Button
            color="inherit"
            onClick={
              handleLogout
            }
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
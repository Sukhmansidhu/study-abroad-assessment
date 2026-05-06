"use client";

import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useUserStore } from "@/store/userStore";

import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";

export default function UsersPage() {
  const {
    users,
    total,
    fetchUsers,
    loading,
  } = useUserStore();

  const [page, setPage] =
    useState(1);

  const [search, setSearch] =
    useState("");

  const router = useRouter();

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

    fetchUsers(
      limit,
      skip,
      search
    );
  }, [
    page,
    search,
    fetchUsers,
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
          Users List
        </Typography>

        <TextField
          fullWidth
          label="Search Users"
          sx={{ mb: 3 }}
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <TableContainer
              component={Paper}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Name
                    </TableCell>

                    <TableCell>
                      Email
                    </TableCell>

                    <TableCell>
                      Gender
                    </TableCell>

                    <TableCell>
                      Phone
                    </TableCell>

                    <TableCell>
                      Company
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users.map(
                    (user: any) => (
                      <TableRow
                        key={user.id}
                        hover
                        sx={{
                          cursor:
                            "pointer",
                        }}
                        onClick={() =>
                          router.push(
                            `/users/${user.id}`
                          )
                        }
                      >
                        <TableCell>
                          {
                            user.firstName
                          }{" "}
                          {
                            user.lastName
                          }
                        </TableCell>

                        <TableCell>
                          {user.email}
                        </TableCell>

                        <TableCell>
                          {user.gender}
                        </TableCell>

                        <TableCell>
                          {user.phone}
                        </TableCell>

                        <TableCell>
                          {
                            user.company
                              ?.name
                          }
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "center",
                mt: 4,
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
                color="primary"
              />
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
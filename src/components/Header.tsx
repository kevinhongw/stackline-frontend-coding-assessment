import { AppBar, Box, Container, Toolbar } from "@mui/material"
import React from "react"
import StacklineLogo from "../assets/stackline_logo.svg"

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0e2846" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={StacklineLogo} height={20} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header

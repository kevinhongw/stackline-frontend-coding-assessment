import React from "react"
import Header from "../components/Header"
import Merchant from "../features/merchant/Merchant"
import { Box } from "@mui/material"
type Props = {}

const MERCHANT_ID = "B007TIE0GQ"

const HomePage: React.FC<Props> = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8" }}>
      <Header />
      <Merchant merchantId={MERCHANT_ID} />
    </Box>
  )
}

export default HomePage

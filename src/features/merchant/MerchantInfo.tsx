import {
  Box,
  Card,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material"
import React from "react"
import { Merchant } from "./merchantApiSlice"

type Props = {
  loading: boolean
  merchant?: Merchant
}

const MerchantInfo: React.FC<Props> = ({ merchant, loading }) => {
  return (
    <Card sx={{ height: "100%" }}>
      {loading && <CircularProgress />}
      {!loading && !merchant && <div>Error</div>}
      {!loading && merchant && (
        <>
          <Stack
            padding={"16px 32px"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Box component={"img"} src={merchant.image} maxWidth={"60%"} />
            <Typography fontSize={"20px"} fontWeight={500}>
              {merchant.title}
            </Typography>
            <Typography color={"#aaa"} fontSize={"12px"}>
              {merchant.subtitle}
            </Typography>
          </Stack>
          <Divider />
          <Box display="flex" padding="16px" flexWrap={"wrap"} gap={"8px"}>
            {merchant.tags.map(tag => (
              <Box
                key={tag}
                border="1px solid #ccc"
                padding={"4px 16px"}
                borderRadius={"4px"}
                fontSize="12px"
                color="#333"
              >
                {tag}
              </Box>
            ))}
          </Box>
          <Divider />
        </>
      )}
    </Card>
  )
}

export default MerchantInfo

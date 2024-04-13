import React from "react"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Container } from "@mui/material"

import { useGetMerchantsQuery } from "./merchantApiSlice"
import MerchantInfo from "./MerchantInfo"
import RetailSalesChart from "./RetailSalesChart"
import RetailSalesTable from "./RetailSalesTable"

type Props = {
  merchantId: string
}

const Merchant: React.FC<Props> = ({ merchantId }) => {
  const { merchant, isFetching } = useGetMerchantsQuery(undefined, {
    selectFromResult: ({ data, ...result }) => {
      return {
        ...result,
        merchant: data?.find(merchant => merchant.id === merchantId),
      }
    },
  })

  return (
    <Container maxWidth="xl" sx={{ padding: "32px" }}>
      <Grid container spacing={2}>
        <Grid md={2.5}>
          <MerchantInfo merchant={merchant} loading={isFetching} />
        </Grid>
        <Grid
          md={9.5}
          sx={{ display: "flex", flexDirection: "column", gap: "64px" }}
        >
          <RetailSalesChart
            sales={merchant?.sales || []}
            loading={isFetching}
          />
          <RetailSalesTable
            sales={merchant?.sales || []}
            loading={isFetching}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Merchant

import React from "react"
import { MerchantSale } from "./merchantApiSlice"
import { Card, CircularProgress } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

type Props = {
  sales: MerchantSale[]
  loading: boolean
}

const formatCurrency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })

const columns: GridColDef[] = [
  {
    field: "weekEnding",
    type: "date",
    headerName: "WEEK ENDING",
    flex: 1,
  },
  {
    field: "retailSales",
    type: "number",
    headerName: "RETAIL SALES",
    flex: 1,
    valueFormatter: ({ value }) => formatCurrency(value),
  },
  {
    field: "wholesaleSales",
    type: "number",

    headerName: "WHOLESALE SALE",
    flex: 1,
    valueFormatter: ({ value }) => formatCurrency(value),
  },
  {
    field: "unitsSold",
    type: "number",
    headerName: "UNITS SOLD",
    flex: 1,
    valueFormatter: ({ value }) => formatCurrency(value),
  },
  {
    field: "retailerMargin",
    type: "number",
    headerName: "RETAILER MARGIN",
    flex: 1,
    valueFormatter: ({ value }) => formatCurrency(value),
  },
]

const RetailSalesTable: React.FC<Props> = ({ sales, loading }) => {
  const rows = sales.map(sale => ({
    ...sale,
    id: sale.weekEnding,
    weekEnding: new Date(sale.weekEnding),
  }))

  return (
    <Card sx={{ padding: "16px" }}>
      {loading && <CircularProgress />}
      {!loading && (
        <DataGrid
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          rows={rows}
          getRowId={sale => sale.weekEnding}
          columns={columns}
          disableColumnMenu={true}
          sx={{
            "&": {
              border: 0,
            },
            "& .MuiDataGrid-cell": {
              color: "#aaa",
            },
          }}
        />
      )}
    </Card>
  )
}

export default RetailSalesTable

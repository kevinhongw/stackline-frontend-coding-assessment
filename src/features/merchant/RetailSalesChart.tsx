import React from "react"
import { Card, CircularProgress, Typography } from "@mui/material"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { MerchantSale } from "./merchantApiSlice"

type Props = {
  sales: MerchantSale[]
  loading: boolean
}

const RetailSalesChart: React.FC<Props> = ({ sales, loading }) => {
  return (
    <Card
      sx={{
        position: "relative",
        height: "500px",
        padding: "32px",
      }}
    >
      <Typography fontSize="16px" fontWeight={400} color="#333">
        Retail Sales
      </Typography>
      {loading && <CircularProgress />}
      {!loading && (
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={sales}
            margin={{
              top: 30,
              right: 30,
              left: 30,
              bottom: 30,
            }}
          >
            <XAxis dataKey="weekEnding" />
            <YAxis
              type="number"
              domain={([_dataMin, dataMax]) => [0, dataMax * 1.2]}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              name="Retail sales"
              dataKey="retailSales"
              stroke="#63a2f0"
              dot={false}
              strokeWidth={3}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              name="Retailer margin"
              dataKey="retailerMargin"
              stroke="#9ca4bc"
              dot={false}
              strokeWidth={3}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Card>
  )
}

export default RetailSalesChart

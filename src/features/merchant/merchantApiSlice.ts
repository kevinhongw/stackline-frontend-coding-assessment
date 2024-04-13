// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import merchantData from "../../../stackline_frontend_assessment_data_2021.json"

export interface Merchant {
  id: string
  title: string
  image: string
  subtitle: string
  brand: string
  retailer: string
  tags: string[]
  reviews: MerchantReview[]
  details: string[]
  sales: MerchantSale[]
}

export interface MerchantReview {
  customer: string
  review: string
  score: number
}

export interface MerchantSale {
  weekEnding: string
  retailSales: number
  wholesaleSales: number
  unitsSold: number
  retailerMargin: number
}

export const merchantsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  reducerPath: "merchantsApi",
  tagTypes: ["Merchants"],
  endpoints: build => ({
    getMerchants: build.query<Merchant[], void>({
      queryFn: () => {
        return { data: merchantData }
      },
    }),
  }),
})

export const { useGetMerchantsQuery } = merchantsApiSlice

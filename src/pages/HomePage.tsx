import React from "react"
import Header from "../components/Header"
import Merchant from "../features/merchant/Merchant"
type Props = {}

const MERCHANT_ID = "B007TIE0GQ"

const HomePage: React.FC<Props> = () => {
  return (
    <div>
      <Header />
      <Merchant merchantId={MERCHANT_ID} />
    </div>
  )
}

export default HomePage

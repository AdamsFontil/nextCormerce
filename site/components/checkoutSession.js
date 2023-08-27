"use client"

import { useEffect, useContext } from "react"
import { CheckCheck, XCircle } from "lucide-react"
import Stripe from "stripe"
import { CartContext } from "@/utils/cartContext"


export function CheckoutSession( {customerDetails} ) {
  const { clearCart } = useContext(CartContext);

  useEffect (() => {
    if (customerDetails) {
      clearCart()
    }
  }, [customerDetails])
  if (!customerDetails) {
    return (
      <>
        <XCircle className="mx-auto h-10 w-10 text-error" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-error sm:text-5xl">
          No checkout session found
        </h1>
      </>
    )
  }

  return (
    <>
      <CheckCheck className="mx-auto h-10 w-10 text-primary dark:text-primary" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary dark:text-primary sm:text-5xl">
        Order Successful!
      </h1>
      <h3 className="mt-8 text-2xl leading-7">
        Thank you, <span className="font-extrabold">{customerDetails.name}</span>!
      </h3>
      <p className="mt-8">
        Check your purchase email{" "}
        <span className="mx-1 font-extrabold text-secondary">{customerDetails.email}</span> for
        your invoice.
      </p>
    </>
  )
}

import Link from "next/link"

import { stripe } from "@/lib/stripe"
import { CheckoutSession } from "../../components/checkoutSession"



export default async function Page({searchParams}) {
  const sessionId = searchParams?.session_id
  // console.log('session',sessionId)
  // console.log('search',searchParams)
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId)
  const customerDetails = checkoutSession?.customer_details
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <CheckoutSession customerDetails={customerDetails} />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Go back home
          </Link>
          <a href="#" className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
}

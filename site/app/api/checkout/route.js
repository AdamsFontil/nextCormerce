import { NextResponse } from "next/server"
// @ts-ignore
// import { validateCartItems } from "use-shopping-cart/utilities"

// import { inventory } from "@/config/inventory"
import { stripe } from "@/lib/stripe"

export async function POST(request) {
  // console.log('cart details,',request)
  const origin = request.headers.get('origin')
  const lineItems = await request.json()
  console.log('lineItems---', lineItems)
  // const lineItems = validateCartItems(inventory, cartDetails)
  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ['card'],
    line_items: lineItems, // Your formatted lineItems array
    allow_promotion_codes: true,
    shipping_address_collection: {
      allowed_countries: ['US']
    },
    shipping_options: [{
      shipping_rate: "shr_1NjBfmDwNGqPBW672HbnNudi"
    }],
    billing_address_collection: "auto",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`
  });

  return NextResponse.json(session)
}

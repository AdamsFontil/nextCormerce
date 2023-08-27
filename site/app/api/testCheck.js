import { stripe } from "@/lib/stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const lineItems = req.body;
  console.log('lineItems', lineItems)
  return lineItems

  // try {
  //   const session = await stripe.checkout.sessions.create({
  //   submit_type: "pay",
  //   mode: "payment",
  //   payment_method_types: ['card'],
  //   line_items: lineItems,
  //   allow_promotion_codes: true,
  //   automatic_tax: true,
  //   shipping_address_collection: {
  //     allowed_countries: ['US']
  //   },
  //   shipping_options: [ {
  //     shipping_rate: "shr_1NjBfmDwNGqPBW672HbnNudi"
  //   }],
  //   billing_address_collection: "auto",
  //   success_url:`${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${origin}/cart`
  //   });
  //   return res.status(200).json(session);
  // } catch (error) {
  //   console.error("Error creating checkout session:", error);
  //   return res.status(500).json({ error: "An error occurred" });
  // }
}

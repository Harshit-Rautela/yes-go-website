export interface Offer {
  id: number
  title: string
  description: string
  image: string
}

export const specialOffers: Offer[] = [
  {
    id: 1,
    title: "Ticket Booking",
    description: "10% off on basic fare for passengers",
    image: "/offers/ticket.png",
  },
  {
    id: 2,
    title: "Special Offers",
    description: "Independence Day Special Offers",
    image: "/offers/special.png",
  },
  {
    id: 3,
    title: "First Bus",
    description: "New User Offer On First Bus",
    image: "/offers/firstbus.png",
  },
  {
    id: 4,
    title: "Instant Discount",
    description: "10% on Booking",
    image: "/offers/discount.png",
  },
]
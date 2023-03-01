export const metadata = {
  title: "Responsive",
  description: "Make your website work on all devices",
}

export default function Responsive() {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen flex-col items-center justify-center gap-4 text-center md:flex-row">
        <div className="md:flex-1">
          <h3>Free Shapping</h3>
          <p>No charge for each delivery</p>
        </div>

        <div className="md:flex-1">
          <h3>Quick Payment</h3>
          <p>100% secure payment</p>
        </div>

        <div className="md:flex-1">
          <h3>24/7 Support</h3>
          <p>Quick support</p>
        </div>
      </div>
    </div>
  )
}

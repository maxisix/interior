export default function Keyframe() {
  return (
    <>
      <div className="container mx-auto grid h-screen items-center justify-center">
        <h1 className="flex text-7xl font-bold">
          Hello <span className="animate-waving-hand">👋🏻</span>
        </h1>
      </div>

      <div className="container mx-auto grid h-screen items-center justify-center">
        <h1 className="flex text-7xl font-semibold text-emerald-500">
          Hello <span className="animate-[wave_5s_ease-in-out_2]">👋🏻</span>,
          arbitrary values
        </h1>
      </div>
    </>
  )
}

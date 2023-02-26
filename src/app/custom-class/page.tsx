export default function CustomClass() {
  return (
    <div className="container mx-auto grid h-screen items-center justify-center">
      <h1 className="text-7xl font-bold">Custom Class</h1>

      <div className="flex flex-col items-center">
        <div className="publicite_label after:content-[' '] before:content-[' '] flex w-full items-center justify-center gap-3 text-sm font-light before:h-[1px] before:flex-1 before:bg-white after:h-[1px] after:flex-1 after:bg-white">
          Publicité
        </div>
        <div className="publicite">
          <iframe width={300} className="h-[300px] w-[300px] bg-[#F5F5F5]" />
        </div>
      </div>
    </div>
  )
}

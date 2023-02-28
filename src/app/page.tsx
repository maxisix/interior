export default function Home() {
  return (
    <main>
      <div className="after:content-[' '] relative h-screen bg-[url('/images/unsplash_dPUWzT5dqz8.jpg')] bg-cover after:absolute after:bottom-0 after:h-72 after:w-full after:bg-gradient">
        <div className="container mx-auto grid">
          {/* <Nav /> */}

          <div className="mt-[270px] text-center">
            <h1 className="text-4xl font-bold md:text-7xl">
              Bring Serenity to Your Place
              <br /> With Interior
            </h1>
            <p className="mt-10 text-xl md:text-2xl">
              find your dream plant for you home decoration <br /> with us, and
              we will make it happen.
            </p>

            <div className="relative z-10 mx-auto mt-10 max-w-[460px]">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-full rounded-full border border-black bg-transparent px-7 py-6 placeholder-black outline-0 dark:border-white dark:placeholder-white"
              />
              <button className="absolute top-[50%] right-3 h-12 w-12 translate-y-[-50%] rounded-full bg-[#525A55] stroke-white text-black hover:bg-white hover:stroke-[#525A55]">
                <svg
                  className="mx-auto"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7953 20.9181L16.0584 16.1813L20.7953 20.9181ZM16.0584 16.1813C16.8187 15.421 17.4218 14.5184 17.8333 13.525C18.2447 12.5317 18.4565 11.467 18.4565 10.3918C18.4565 9.31661 18.2447 8.25193 17.8333 7.25857C17.4218 6.26521 16.8187 5.36262 16.0584 4.60234C15.2982 3.84205 14.3956 3.23896 13.4022 2.8275C12.4089 2.41604 11.3442 2.20426 10.269 2.20426C9.19377 2.20426 8.12909 2.41604 7.13573 2.8275C6.14237 3.23896 5.23978 3.84205 4.4795 4.60234C2.94404 6.1378 2.08142 8.22034 2.08142 10.3918C2.08142 12.5633 2.94404 14.6458 4.4795 16.1813C6.01496 17.7167 8.0975 18.5794 10.269 18.5794C12.4404 18.5794 14.523 17.7167 16.0584 16.1813V16.1813Z"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ProductBanner({ item }) {
  return (
    <>
      <div className="relative isolate overflow-hidden mt-10 bg-gray-900 py-24 sm:py-32">
        <img
          src={item.bgImage}
          alt="image"
          className="absolute opacity-10 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className={`aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#68918B] to-[#F7BA3A] opacity-20`}
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-4xl font-bold tracking-tight text-pink-500 sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-6 text-lg leading-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

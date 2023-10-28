export default function ProductBanner({ item }) {
  return (
    <>
      <div className="relative isolate overflow-hidden mt-10 bg-gray-900 py-24 sm:py-32">
        <img
          src={item.bgImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-4xl font-bold tracking-tight text-pink-500 sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 justify-center text-gray-500 items-center">
        <h1 className="text-5xl ">{item.title}</h1>
        <p className="mt-10 w-[60rem] font-semibold">{item.detail}</p>
      </div>
    </>
  );
}

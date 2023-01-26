function About() {
  return (
    <section className="About">
      <div className="mx-auto max-w-screen-xl px-28 py-32 sm:px-6 lg:px-28">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-color:black">About Us</h2>

          <p className="mt-4 text-color:black para-text leading-6">
            At nibh volutpat sollicitudin consequat viverra accumsan nunc. Quam dolor vestibulum tempus risus sagittis amet. At eget egestas nec
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="block bg-transparent p-1 w-96 h-60"
          >
            <div className="ellipse">
            <img src="/images/Ellipse.svg"
            className="mx-auto h-36 w-36 pt-4"
            />
            <img className="inner_img" src="/images/stethoscope.svg" />
            </div>
            <h3 className="text-lg flex text-black justify-center py-3">Purus lectus lectus</h3>
            <p className="flex text-black text-xs text-center justify-center leading-5 w-80 pl-4 py-3 opacity-50">
              Dapibus diam neque ac facilisi facilisi lectus ultrices ultrices. Amet molestie ullamcorper eu tristique feugiat aliquam augue vel ridiculus. Condimentum proin pharetra lectus morbi quis lacus. Convallis enim facilisis ipsum non sollicitudin mattis fringilla 
            </p>
          </div>

          <div
            className="block bg-transparent p-1 w-96 h-60"
          >
            <div className="ellipse">
              <img src="/images/Ellipse.svg"
              className="mx-auto h-36 w-36 pt-4"
              />
              <img className="inner_img" src="/images/protection.svg" />
            </div>
            <h3 className="text-lg flex text-black justify-center py-3">Purus lectus lectus</h3>
            <p className="flex text-black text-xs text-center justify-center leading-5 w-80 pl-4 py-3 opacity-50">
              Dapibus diam neque ac facilisi facilisi lectus ultrices ultrices. Amet molestie ullamcorper eu tristique feugiat aliquam augue vel ridiculus. Condimentum proin pharetra lectus morbi quis lacus. Convallis enim facilisis ipsum non sollicitudin mattis fringilla 
            </p>
          </div>

          <div
            className="block bg-transparent p-1 w-96 h-60"
          >
            <div className="ellipse">
              <img src="/images/Ellipse.svg"
              className="mx-auto h-36 w-36 pt-4"
              />
              <img className="inner_img" src="/images/heart.svg" />
            </div>
            <h3 className="text-lg flex text-black justify-center py-3">Purus lectus lectus</h3>
            <p className="flex text-black text-xs text-center justify-center leading-5 w-80 pl-4 py-3 opacity-50">
              Dapibus diam neque ac facilisi facilisi lectus ultrices ultrices. Amet molestie ullamcorper eu tristique feugiat aliquam augue vel ridiculus. Condimentum proin pharetra lectus morbi quis lacus. Convallis enim facilisis ipsum non sollicitudin mattis fringilla 
            </p>
          </div>

        </div>
      </div>
    </section>

  )
}
export default About
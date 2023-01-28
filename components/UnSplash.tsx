const UnSplash = () => {
  return (
    <section className="unsplash min-h-fit bg-cover">
      <div className="unsplash-container flex px-12 m-auto">
        <div className="pt-16 w-2/5">
          <div>
            <div>
              <h2 className="text-5xl font-bold">Our Mission</h2>
              <h4 className="text-4xl leading-10 font-medium pt-7">Nec amet libero morbi nunc 
              <br/> posu ere dis sit </h4>
            </div>
            <div className="flex items-center max-w-lg justify-between pt-8">
              <div>
                <p className="leading-10">Why work with us?</p>
                <ul className="mission">
                  <li className="leading-7">Ornare velit non amet id risus sit <br/>curabitur dignissim.</li>
                  <li >Mus lobortis risus mollis eu.</li>
                </ul>
              </div>
              <div>
                <p className="leading-10">Mus lobortis risus mollis eu.</p>
                <ul className="mission">
                  <li className="leading-7">Eget duis lobortis sagittis ligula <br/>mauris habitant.</li>
                  <li>Morbi sem erat sed luctus nulla.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <button className="bg-white btn-color font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
        <div className="video_bg1 mt-4 pt-36 h-2/3">
          <img className="w-full" src="images/video_bg1.svg"/>
        </div>
      </div>
    </section>
  )
}

export default UnSplash
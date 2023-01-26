function UnSplash() {
  return (
    <>
      <div className="unsplash flex px-12">
        <div className="pt-10 w-3/6">
          <div>
            <div>
              <h2 className="text-5xl font-bold">Our Mission</h2>
              <h4 className="text-4xl font-medium pt-4">Nec amet libero morbi nunc 
              <br/> posu ere dis sit </h4>
            </div>
            <div className="flex items-center max-w-lg justify-between pt-8">
              <div>
                <p>Why work with us?</p>
                <ul className="mission">
                  <li>Ornare velit non amet id risus sit <br/>curabitur dignissim.</li>
                  <li>Mus lobortis risus mollis eu.</li>
                </ul>
              </div>
              <div>
                <p >Mus lobortis risus mollis eu.</p>
                <ul className="mission">
                  <li>Eget duis lobortis sagittis ligula <br/>mauris habitant.</li>
                  <li>Morbi sem erat sed luctus nulla.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6">
          <button className="bg-white btn-color font-bold py-2 px-4 rounded">
            Read More
          </button>
          </div>
        </div>
        <div className="video_bg1 mt-4 pt-36 h-2/3">
          <img className="w-full" src="images/video_bg1.svg"/>
        </div>
      </div>
    </>
  )
}

export default UnSplash
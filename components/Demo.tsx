function Demo() {
  return (
    <div className="demo-bg">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-5xl font-bold sm:text-4xl">Demo Video</h2>

        <p className="mt-4">
          At nibh volutpat sollicitudin consequat viverra accumsan nunc. Quam dolor vestibulum tempus risus sagittis amet.
        </p>
      </div>
      <div className="flex justify-between w-11/12 pt-12 pl-16 pr-14">
        <div>
          <img className="video-img" src="/images/video_bg2.svg"/>
        </div>
        <div className="mobiles">
          <img className="top" src="/images/mobile_light.svg"/>
          <img className="bottom" src="/images/mobile_dark.svg"/>
        </div>
      </div>
      <div className="mx-auto max-w-2xl pt-5 text-center">
        <h2 className="text-5xl font-bold sm:text-4xl">Cursus sodales tincidunt tempus sed sagittis blandit</h2>

        <p className="mt-4 opacity-50">
          Lorem sagittis feugiat est rhoncus sed. Lacus in tincidunt bibendum nisl. Porttitor consequat pulvinar nulla adipiscing orci ac mattis. Neque commodo pharetra morbi nisi ut duis purus dictum. Mauris amet facilisis elementum vestibulum.
        </p>
      </div>
      <div  className="mx-auto max-w-sm pt-11 flex justify-between">
        <button>
          <img className="bg-white" src="/images/google_play_btn.svg"/>
        </button>
        <button>
          <img className="bg-white" src="/images/app_store_btn.svg"/>
        </button>
      </div>
    </div>
  )
}

export default Demo
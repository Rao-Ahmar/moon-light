const Demo = () => {
  return (
    <div className="demo-bg min-h-[950px]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl font-bold sm:text-4xl">Demo Video</h2>

        <p className="mt-4 text-xl md:text-2xl">
          At nibh volutpat sollicitudin consequat viverra accumsan nunc. Quam
          dolor vestibulum tempus risus sagittis amet.
        </p>
      </div>
      <div className="pt-12 relative">
        <img className="mx-auto md:w-[1600px] md:h-[517px] w-[380px] h-[250px]" src="/images/demo_images.svg" />
        <video
          controls
          className="absolute md:left-[373px] md:top-[90px] md:w-[616px] md:h-[373px] w-[178px] h-[108px] top-[110px] left-[28px] "
        >
          <source src="IMG_4956.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mx-auto max-w-3xl md:pt-5 text-center">
        <h2 className="text-xl font-bold md:text-5xl">
          Cursus sodales tincidunt tempus sed sagittis blandit
        </h2>

        <p className="mt-4 opacity-50 leading-7">
          Lorem sagittis feugiat est rhoncus sed. Lacus in tincidunt bibendum
          nisl. Porttitor consequat pulvinar nulla adipiscing orci ac mattis.
          Neque commodo pharetra morbi nisi ut duis purus dictum. Mauris amet
          facilisis elementum vestibulum.
        </p>
      </div>
      <div className="mx-auto max-w-sm pt-11 flex justify-between pb-2">
        <button>
          <img className="bg-white" src="/images/google_play_btn.svg" />
        </button>
        <button>
          <img className="bg-white" src="/images/app_store_btn.svg" />
        </button>
      </div>
    </div>
  );
};

export default Demo;
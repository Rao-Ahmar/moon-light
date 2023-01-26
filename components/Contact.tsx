function Contact() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-screen-xl px-28 py-16 sm:px-6 lg:px-28">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-sm font-medium sm:text-2xl text-color:black">Contact Us</h2>
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-700">Get In Touch</h2>

          <p className="mt-4 text-color:black opacity-50 para-text">
            Aprivate Limited is the most popular type of partnership malta. The limited liablity is, in fact, the only type of company allowed by Compano
          </p>
        </div>
      </div>
      <div className="flex justify-between max-w-6xl pl-24">
        <div>
          <h2 className="text-sm font-medium sm:text-2xl text-blue-700">Need Support!</h2>      
          <p className="text-sm font-medium sm:text-sm my-3 text-blue-700">Contact us for a quote, help to join the them.</p>      
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input className="appearance-none block w-full text-black border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your name" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Your email" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Your subject" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-black rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message"></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <input className="appearance-none block w-full bg-blue-800 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value="Send Message" type="button" />
            </div>
          </form>
        </div>
        <div>
          <img className="map" src="/images/map.svg" />
        </div>
      </div>
      <div className="flex pl-20 pt-20 justify-between max-w-screen-lg">
        <div className="flex max-w-md items-center pl-10">
          <div>
            <img  src="/images/location.svg"/>
          </div>
          <div className="pl-3">
            <h1 className="text-blue-700 text-2xl font-bold">Location</h1>
            <h3 className="font-medium text-lg">2276 Lynn Ogden Lane Vlc <br/> 3004, Australia</h3>
          </div>
        </div>
        <div className="flex items-center max-w-md pl-10">
          <div>
            <img  src="/images/location.svg"/>
          </div>
          <div className="pl-3">
            <h1 className="text-blue-700 text-2xl font-bold">Location</h1>
            <h3 className="font-medium text-lg">2715 Ash Dr. San Jose, South <br/> Dakota 83475</h3>
          </div>
        </div>
        <div className="flex max-w-md items-center pl-10">
          <div>
            <img  src="/images/mail2.svg"/>
          </div>
          <div className="pl-3">
            <h1 className="text-blue-700 text-2xl font-bold">Email</h1>
            <h3 className="font-medium text-lg">info@example.com <br/> sale@example.com</h3>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Contact
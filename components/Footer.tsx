const Footer = () => {
  return (
    <footer className="footer text-center lg:text-left">
      <div className="footer_container p-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div className="mb-6 w-96">
            <img src="/images/footer_logo.svg" className=" pb-3" />

            <ul className="list-none mb-0">
              <li>
                <p className="text-white pb-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>
              </li>
              <li>
                <img src="/images/social_icons.svg" className="text-white pb-3" />
              </li>
            </ul>
          </div>

          <div className="mt-7 text-white pl-32">
            <h5 className="uppercase font-bold mb-2.5">Product</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="footer-links leading-10">Features</a>
              </li>
              <li>
                <a href="#!" className="footer-links leading-10">Pricing</a>
              </li>
              <li>
                <a href="#!" className="footer-links leading-10">Get App</a>
              </li>
              <li>
                <a href="#!" className="footer-links leading-10">Contact</a>
              </li>
            </ul>
          </div>

          <div className="mt-7 text-white pl-10">
            <h5 className="uppercase font-bold mb-2.5">Product</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="footer-links leading-10">Security & Provciy</a>
              </li>
              <li>
                <a href="#!" className="footer-links leading-10">Marketplace</a>
              </li>
              <li>
                <a href="#!" className="footer-links leading-10">Term & Condition</a>
              </li>
              <li>
                <a href="#!" className="footer-links leading-10">Collection</a>
              </li>
            </ul>
          </div>

          <div className="mt-7 text-white">
            <h5 className="uppercase font-bold mb-2.5">Subscribe</h5>

            <ul className="list-none mb-0">
              <li>
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go</button>
              </div>
              </li>
              <li className="pt-5">
                <a href="#!">Publishes will show up in your Subscriptions feed, You may also start.</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-white text-center p-4 opacity-50">
        ©2023 @Doc Moonlight.
        <a href="#">All rights reserved.</a>
      </div>
    </footer>
  )
}

export default Footer
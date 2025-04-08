const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <i className="bx bxs-music text-red-500 text-3xl"></i>
              <span className="text-xl font-bold tracking-tight">Undergroundify</span>
            </div>
            <p className="text-zinc-400 max-w-md">
              The ultimate platform for discovering and enjoying Spain's underground music scene.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">© 2025 Undergroundify. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="text-zinc-400 hover:text-white">
              <i className="bx bxl-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <i className="bx bxl-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <i className="bx bxl-youtube text-2xl"></i>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <i className="bx bxl-tiktok text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

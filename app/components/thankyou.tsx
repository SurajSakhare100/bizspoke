import Link from 'next/link'


export default function ThankYou() {
  return (
    <main className="page-container">
      <div className="content-wrapper">
        {/* Thank You Section */}
        <section className="min-h-screen flex items-center justify-center bg-white">
          <div className="container-responsive">
            <div className="max-w-7xl mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-4  items-end">
              {/* Main Thank You Message */}
              <div className="col-span-2 text-left">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-light text-blue-100 sm:mb-12 mb-6 font-canela-trial">
                  Thank you.
                </h1>
                <p className="text-2xl sm:text-4xl md:text-6xl  leading-tight text-blue-100 font-canela-trial">
                  Our team will get back to you as soon as possible.
                </p>
              </div>

              {/* Back to Home Button */}
              <div className="flex justify-center self-end">
                <Link 
                  href="/"
                  className="inline-flex items-center px-16 py-4 bg-blue-20 border-2 border-blue-100 text-blue-100 font-medium rounded-full hover:bg-blue-100 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-2"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>        
      </div>
    </main>
  )
}
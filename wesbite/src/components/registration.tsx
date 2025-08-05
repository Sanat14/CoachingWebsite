import React from "react"

export function Registration() {
  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Register Now</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards academic excellence. Fill out the form below to register for our programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScq-tigp08gDukwsti_cwtwEZemlaWbvGPQi-ZwOTfoCV_kGA/viewform?embedded=true" 
              width="100%" 
              height={1574} 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Student Registration Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

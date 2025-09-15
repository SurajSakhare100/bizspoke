import React from 'react'

function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container-responsive section-padding">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-canela-trial text-blue-100 mb-4 sm:mb-6">
                        Contact us
                    </h1>
                    <p className="text-lg sm:text-xl font-normal font-dm-sans text-blue-100 leading-relaxed max-w-4xl mx-auto text-balance">
                        Drop a message and someone from our team will get in touch with you as soon as possible.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-4xl mx-auto">
                    <form className="space-y-6 sm:space-y-8">
                        {/* First Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
                            <div className="space-y-2">
                                <label className="form-label text-blue-60">
                                    Full name*
                                </label>
                                <input 
                                    type="text" 
                                    className="form-input h-12 sm:h-14"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="form-label text-blue-60">
                                    Work Email ID*
                                </label>
                                <input 
                                    type="email" 
                                    className="form-input h-12 sm:h-14"
                                    placeholder="Enter your work email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
                            <div className="space-y-2">
                                <label className="form-label text-blue-60">
                                    Phone Number*
                                </label>
                                <input 
                                    type="tel" 
                                    className="form-input h-12 sm:h-14"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="form-label text-blue-60">
                                    Reference, if any
                                </label>
                                <input 
                                    type="text" 
                                    className="form-input h-12 sm:h-14"
                                    placeholder="How did you hear about us?"
                                />
                            </div>
                        </div>

                        {/* Message Section */}
                        <div className="space-y-2">
                            <label className="form-label text-blue-60">
                                Write your message here
                            </label>
                            <textarea 
                                rows={6}
                                className="form-textarea"
                                placeholder="Tell us about your travel plans or any questions you have..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-6 sm:pt-8">
                            <button 
                                type="submit"
                                className="btn-primary touch-target"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
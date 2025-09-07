import React from 'react'

function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-medium font-['Canela_Trial'] text-[var(--color-blue-100)] mb-6">
                    Contact us
                    </h1>
                    <p className="text-xl font-normal font-['DM_Sans'] text-[var(--color-blue-100)] leading-loose max-w-4xl mx-auto">
                        Drop a message and someone from our team will get in touch with you as soon as possible.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-6xl mx-auto">
                    <form className="space-y-8">
                        {/* First Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <div className="space-y-1">
                                <label className="block text-xl font-medium font-['DM_Sans'] text-[var(--color-blue-60)] leading-loose">
                                    Full name*
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full h-14 px-4 border border-[var(--color-blue-60)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-60)] focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xl font-medium font-['DM_Sans'] text-[var(--color-blue-60)] leading-loose">
                                    Work Email ID*
                                </label>
                                <input 
                                    type="email" 
                                    className="w-full h-14 px-4 border border-[var(--color-blue-60)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-60)] focus:border-transparent"
                                    placeholder="Enter your work email"
                                />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <div className="space-y-1">
                                <label className="block text-xl font-medium font-['DM_Sans'] text-[var(--color-blue-60)] leading-loose">
                                    Phone Number*
                                </label>
                                <input 
                                    type="tel" 
                                    className="w-full h-14 px-4 border border-[var(--color-blue-60)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-60)] focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xl font-medium font-['DM_Sans'] text-[var(--color-blue-60)] leading-loose">
                                    Reference, if any
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full h-14 px-4 border border-[var(--color-blue-60)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-60)] focus:border-transparent"
                                    placeholder="How did you hear about us?"
                                />
                            </div>
                        </div>

                        {/* Message Section */}
                        <div className="space-y-1">
                            <label className="block text-xl font-medium font-['DM_Sans'] text-[var(--color-blue-60)] leading-loose">
                                Write your message here
                            </label>
                            <textarea 
                                rows={6}
                                className="w-full px-4 py-4 border border-[var(--color-blue-60)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-60)] focus:border-transparent resize-vertical"
                                placeholder="Tell us about your travel plans or any questions you have..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-8">
                            <div className="px-16 py-5 rounded-[47.14px] outline outline-[1.57px] outline-offset-[-1.57px] outline-Blue-60 inline-flex justify-center items-center gap-2.5 overflow-hidden">
<div className="text-right justify-start text-Blue-40 text-xl font-medium font-['Inter'] leading-7">Submit</div>
</div>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    )
}
export default Contact
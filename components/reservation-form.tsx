"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Check, Crown, Utensils, Camera, Music, Flower } from "lucide-react"
import { format } from "date-fns"

interface FormData {
    fullName: string
    phone: string
    email: string
    date: Date | undefined
    guests: string
    package: string
    addOns: string[]
    specialRequests: string
}

export default function ReservationForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phone: "",
        email: "",
        date: undefined,
        guests: "",
        package: "",
        addOns: [],
        specialRequests: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const packages = [
        {
            id: "classic",
            name: "Classic Package",
            price: "$2,999",
            features: ["Basic Decoration", "Standard Lighting", "Basic Sound System", "50 Guests"],
            icon: <Crown className="w-6 h-6" />,
        },
        {
            id: "premium",
            name: "Premium Package",
            price: "$4,999",
            features: ["Premium Decoration", "LED Lighting", "Professional Sound", "100 Guests"],
            icon: <Crown className="w-6 h-6" />,
            popular: true,
        },
        {
            id: "luxury",
            name: "Luxury Package",
            price: "$7,999",
            features: ["Luxury Decoration", "Designer Lighting", "Premium Sound & DJ", "200 Guests"],
            icon: <Crown className="w-6 h-6" />,
        },
    ]

    const addOns = [
        { id: "dj", name: "Professional DJ", price: "$500", icon: <Music className="w-5 h-5" /> },
        { id: "photography", name: "Wedding Photography", price: "$800", icon: <Camera className="w-5 h-5" /> },
        { id: "catering", name: "Premium Catering", price: "$1200", icon: <Utensils className="w-5 h-5" /> },
        { id: "flowers", name: "Floral Arrangements", price: "$600", icon: <Flower className="w-5 h-5" /> },
        { id: "videography", name: "Wedding Videography", price: "$1000", icon: <Camera className="w-5 h-5" /> },
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsLoading(false)
        setIsSubmitted(true)
    }

    const handleAddOnChange = (addOnId: string, checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            addOns: checked ? [...prev.addOns, addOnId] : prev.addOns.filter((id) => id !== addOnId),
        }))
    }

    if (isSubmitted) {
        return (
            <section className="py-16 md:py-24 bg-white min-h-screen flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Reservation Confirmed!</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Thank you for choosing GK Wedding and Event Management. We'll contact you within 24 hours to confirm your
                            booking details.
                        </p>
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="font-semibold text-gray-800 mb-4">Booking Summary</h3>
                            <div className="text-left space-y-2">
                                <p>
                                    <span className="font-medium">Name:</span> {formData.fullName}
                                </p>
                                <p>
                                    <span className="font-medium">Date:</span>{" "}
                                    {formData.date ? format(formData.date, "PPP") : "Not selected"}
                                </p>
                                <p>
                                    <span className="font-medium">Guests:</span> {formData.guests}
                                </p>
                                <p>
                                    <span className="font-medium">Package:</span> {formData.package}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Back to Home
                            </a>
                            <Button
                                variant="outline"
                                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                                onClick={() => {
                                    setIsSubmitted(false)
                                    setFormData({
                                        fullName: "",
                                        phone: "",
                                        email: "",
                                        date: undefined,
                                        guests: "",
                                        package: "",
                                        addOns: [],
                                        specialRequests: "",
                                    })
                                }}
                            >
                                Make Another Booking
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <svg width="60" height="45" viewBox="0 0 80 60" fill="none" className="mx-auto">
                            <path d="M10 45L20 15L30 25L40 10L50 25L60 15L70 45H10Z" stroke="#f97316" strokeWidth="2" fill="none" />
                            <circle cx="20" cy="15" r="3" fill="#f97316" />
                            <circle cx="40" cy="10" r="4" fill="#f97316" />
                            <circle cx="60" cy="15" r="3" fill="#f97316" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Reserve Your Dream Wedding</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Let us create the perfect celebration for your special day. Fill out the form below to get started.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Personal Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="fullName" className="text-base font-medium text-gray-700">
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="fullName"
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                                            className="mt-2 h-12 text-base border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                                            Phone Number *
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                                            className="mt-2 h-12 text-base border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="text-base font-medium text-gray-700">
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                            className="mt-2 h-12 text-base border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Event Details */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Details</h2>
                                <div className="space-y-6">
                                    <div>
                                        <Label className="text-base font-medium text-gray-700">Desired Date *</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className="w-full h-12 mt-2 justify-start text-left font-normal border-gray-300 hover:border-orange-500"
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {formData.date ? format(formData.date, "PPP") : "Select a date"}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={formData.date}
                                                    onSelect={(date) => setFormData((prev) => ({ ...prev, date }))}
                                                    disabled={(date) => date < new Date()}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div>
                                        <Label htmlFor="guests" className="text-base font-medium text-gray-700">
                                            Number of Guests *
                                        </Label>
                                        <Select
                                            value={formData.guests}
                                            onValueChange={(value) => setFormData((prev) => ({ ...prev, guests: value }))}
                                        >
                                            <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-orange-500">
                                                <SelectValue placeholder="Select number of guests" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1-50">1-50 guests</SelectItem>
                                                <SelectItem value="51-100">51-100 guests</SelectItem>
                                                <SelectItem value="101-200">101-200 guests</SelectItem>
                                                <SelectItem value="201-300">201-300 guests</SelectItem>
                                                <SelectItem value="300+">300+ guests</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Package Selection */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Package</h2>
                                <div className="space-y-4">
                                    {packages.map((pkg) => (
                                        <div
                                            key={pkg.id}
                                            className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all ${formData.package === pkg.id
                                                    ? "border-orange-500 bg-orange-50"
                                                    : "border-gray-200 hover:border-orange-300"
                                                } ${pkg.popular ? "ring-2 ring-orange-200" : ""}`}
                                            onClick={() => setFormData((prev) => ({ ...prev, package: pkg.id }))}
                                        >
                                            {pkg.popular && (
                                                <div className="absolute -top-3 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    Most Popular
                                                </div>
                                            )}
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div className="text-orange-500">{pkg.icon}</div>
                                                    <div>
                                                        <h3 className="font-bold text-lg text-gray-800">{pkg.name}</h3>
                                                        <p className="text-2xl font-bold text-orange-500">{pkg.price}</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`w-5 h-5 rounded-full border-2 ${formData.package === pkg.id ? "border-orange-500 bg-orange-500" : "border-gray-300"
                                                        }`}
                                                >
                                                    {formData.package === pkg.id && <Check className="w-3 h-3 text-white m-0.5" />}
                                                </div>
                                            </div>
                                            <ul className="mt-4 space-y-2">
                                                {pkg.features.map((feature, index) => (
                                                    <li key={index} className="flex items-center text-gray-600">
                                                        <Check className="w-4 h-4 text-green-500 mr-2" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Add-ons */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add-ons</h2>
                                <div className="space-y-4">
                                    {addOns.map((addOn) => (
                                        <div
                                            key={addOn.id}
                                            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
                                        >
                                            <Checkbox
                                                id={addOn.id}
                                                checked={formData.addOns.includes(addOn.id)}
                                                onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                                                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                            />
                                            <div className="text-orange-500">{addOn.icon}</div>
                                            <div className="flex-1">
                                                <Label htmlFor={addOn.id} className="font-medium text-gray-800 cursor-pointer">
                                                    {addOn.name}
                                                </Label>
                                                <p className="text-orange-500 font-semibold">{addOn.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div className="mt-12">
                        <Label htmlFor="specialRequests" className="text-base font-medium text-gray-700">
                            Special Requests
                        </Label>
                        <Textarea
                            id="specialRequests"
                            value={formData.specialRequests}
                            onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                            className="mt-2 min-h-[120px] border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Tell us about any special requirements, dietary restrictions, or specific requests for your event..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-12 text-center">
                        <Button
                            type="submit"
                            disabled={
                                isLoading ||
                                !formData.fullName ||
                                !formData.phone ||
                                !formData.email ||
                                !formData.date ||
                                !formData.guests ||
                                !formData.package
                            }
                            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                "Reserve Now"
                            )}
                        </Button>
                        <p className="text-gray-500 text-sm mt-4">
                            * Required fields. We'll contact you within 24 hours to confirm your booking.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

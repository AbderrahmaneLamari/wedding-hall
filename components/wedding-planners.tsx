import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WeddingPlanners() {
    return (
        <section className="bg-white pr-20">
            <div className="container mx-auto pl-20 py-4 h-full bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="aspect-square relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/planner/decore-event.png"
                                        alt="Wedding decoration"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/planner/vase.png"
                                        alt="Traditional wedding items"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/planner/butterfly-entrance.png"
                                        alt="Wedding ceremony setup"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:pl-8">
                        <p className="text-gray-800 font-medium font-serif mb-2">Your Exclusive</p>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-6 leading-tight">
                            WEDDING
                            <br />
                            PLANNERS
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-serif mb-8 text-lg">
                            Discover the magic of your dream day with our exclusive wedding planners, crafting every detail to
                            perfection. Our experienced experts will bring your vision to reality, creating an elegant atmosphere of
                            luxury and love. Elevate your celebration with our meticulous attention to detail, ensuring every moment
                            is perfect.
                        </p>
                        <Button
                            variant="outline"
                            className="border-orange-500 font-serif font-bold text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg"
                        >
                            READ MORE
                        </Button>
                        <Link href="/reservation">
                            <Button variant="outline" className="ml-4 border-orange-500 font-serif font-bold text-white bg-orange-500 hover:bg-white hover:text-orange-500 px-8 py-3 text-lg">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

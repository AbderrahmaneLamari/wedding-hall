import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Gallery() {
    const galleryImages = [
        { src: "/images/Khirasara Palace Wedding Photographers _ Destination Wedding Photos.png", alt: "Wedding food spread" },
        { src: "/images/Sreemantham Decoration (South Indian Baby Shower Decor).png", alt: "Traditional wedding feast" },
        { src: "/images/download (2).png", alt: "Wedding venue decoration" },
        { src: "/images/20 Simple Flower Decoration Ideas At Home 2024.png", alt: "Wedding ceremony setup" },
        { src: "/images/Anil Caterers - Wedding Caterers In Bangalore.png", alt: "Wedding dining setup" },
        { src: "/images/Photo From Whimsical Indian puja with Modern details  - By Aura By Gautam Vedi.png", alt: "Wedding venue lighting" },
    ]

    return (
        <section className="py-16 md:py-24 bg-gray-50 font-serif p-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-gray-600 mb-2">Heartfelt Visual Stories</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">OUR GALLERY</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="aspect-square relative rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg"
                    >
                        SEE MORE
                    </Button>
                </div>
            </div>
        </section>
    )
}

import { Facebook, Twitter, Instagram } from "lucide-react"

export default function GrandSection() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/grand-backgournd.png?height=800&width=1920')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl ml-32 font-serif">
                    <p className="text-white/80  mb-4 text-lg">We Plan Weddings That Are</p>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">GRAND</h2>
                    <p className="text-white/90 text-lg leading-relaxed mb-12 max-w-xl">
                        Crafting grand celebrations is our wedding affair dreams come center stage. Our &quot;Grand&quot; theme brings
                        together the perfect combination of elegance and grandeur to turn your vision into a grand reality, creating
                        memories that last a lifetime.
                    </p>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-orange-400">Follow Us</h3>
                        <p className="text-white/80">Stay connected for creating memories in your life</p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors"
                            >
                                <Facebook className="w-5 h-5 text-black" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors"
                            >
                                <Twitter className="w-5 h-5 text-black" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-black" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

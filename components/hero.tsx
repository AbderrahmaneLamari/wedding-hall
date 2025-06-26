import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/image 1.png"
                    alt="Wedding decoration background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                {/* Crown Logo */}
                <div className="mb-8">
                    <div className="inline-block">
                        <Image 
                            alt="Crown Logo"
                            width={150}
                            height={50}
                            src="/images/crown.png"
                        />
                    </div>
                </div>

                <h1 className="text-4xl font-serif md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    GK WEDDING AND EVENT
                    <br />
                    MANAGEMENT
                </h1>

                <p className="text-xl font-serif md:text-2xl font-light tracking-wide">Planners & Event Organizers!</p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
        </section>
    )
}
    
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = ["Home", "About Us", "Services", "Gallery", "Contact Us"]

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        
                       
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`text-white hover:text-orange-400 transition-colors text-sm ${item === "Home" ? "text-orange-400" : ""
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-white hover:text-orange-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`text-white hover:text-orange-400 transition-colors text-sm ${item === "Home" ? "text-orange-400" : ""
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

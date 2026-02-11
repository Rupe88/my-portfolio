"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

const galleryItems = [
    {
        src: "/rupesh-chy.jpeg",
        alt: "Rupesh Chaudhary Portrait",
        title: "Classic Portrait",
        category: "Personal",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "/hackathon.png",
        alt: "INCQuest 3.0 Hackathon Victory",
        title: "Hackathon Win",
        category: "Achievements",
        className: "md:col-span-2 md:row-span-1"
    },
    {
        src: "/aboutme.jpeg",
        alt: "Professional Portrait",
        title: "About Me",
        category: "Personal",
        className: "md:col-span-1 md:row-span-2"
    },
    {
        src: "/clg.jpeg",
        alt: "College Life at INC",
        title: "INC Moments",
        category: "College",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "/lol.jpeg",
        alt: "Fun moments and laughter",
        title: "Just for Fun",
        category: "Moments",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "/back.jpeg",
        alt: "Memorable background shot",
        title: "Memories",
        category: "Travel",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "/about.jpeg",
        alt: "Lifestyle shot",
        title: "Life moments",
        category: "Personal",
        className: "md:col-span-2 md:row-span-1"
    },
    {
        src: "/aces.jpeg",
        alt: "Trionerd - Team Aces",
        title: "Trionerd",
        category: "Team",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "/senty.jpeg",
        alt: "Sentimental moment",
        title: "Sentimental",
        category: "Life",
        className: "md:col-span-1 md:row-span-1"
    },
]

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (selectedId !== null) {
            setSelectedId((selectedId + 1) % galleryItems.length)
        }
    }

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (selectedId !== null) {
            setSelectedId((selectedId - 1 + galleryItems.length) % galleryItems.length)
        }
    }

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedId === null) return
            if (e.key === "ArrowRight") handleNext()
            if (e.key === "ArrowLeft") handlePrev()
            if (e.key === "Escape") setSelectedId(null)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedId])

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Decorative background glass items */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-bricolage text-foreground"
                    >
                        Some Moments 😅
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        A curated collection of moments, achievements, and experiences
                        that define my path as a developer.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05 }}
                            layoutId={`card-${index}`}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 ${item.className}`}
                            onClick={() => setSelectedId(index)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
                        onClick={() => setSelectedId(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedId(null)}
                            className="absolute top-8 right-8 z-[60] text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all border border-white/10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation Buttons */}
                        <div className="absolute left-4 md:left-12 z-[60]">
                            <button
                                onClick={handlePrev}
                                className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-110 active:scale-95"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                        </div>
                        <div className="absolute right-4 md:right-12 z-[60]">
                            <button
                                onClick={handleNext}
                                className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-110 active:scale-95"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Main Image Container */}
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={galleryItems[selectedId].src}
                                    alt={galleryItems[selectedId].alt}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Lightbox Caption */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-black/80 to-transparent"
                            >
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                                    {galleryItems[selectedId].category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mt-1">
                                    {galleryItems[selectedId].title}
                                </h3>
                                <p className="text-sm text-white/60 mt-2 max-w-xl mx-auto">
                                    {galleryItems[selectedId].alt}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

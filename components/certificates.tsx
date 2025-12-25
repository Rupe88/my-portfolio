"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const certificates = [
    {
        id: 1,
        title: "Introduction to Backend Development Certificate",
        subtitle: "Introduction to Backend Development",
        source: "Coursera",
        issued: "Aug 9, 2022",
        image: "/certificates/intro.png"
    },
    {
        id: 2,
        title: "Programming in Python Certificate",
        subtitle: "Programming in Python",
        source: "Coursera",
        issued: "Sep 14, 2022",
        image: "/certificates/python.png"
    },
    {
        id: 3,
        title: "Introduction to Python Certificate",
        subtitle: "Introduction to Python",
        source: "DataCamp",
        issued: "Sep 28, 2024",
        image: "/certificates/courpython.png"
    },
    {
        id: 4,
        title: "Web Scraping Certificate",
        subtitle: "Web Scraping Workshop",
        source: "EXCESS, NEPAL",
        issued: "Jun 14, 2024",
        image: "/certificates/webscap.png"
    },
    {
        id: 5,
        title: "AI/ML Workshop Certificate",
        subtitle: "AI/ML Workshop",
        source: "ACES",
        issued: "Jun 25, 2024",
        image: "/certificates/ai.jpg"
    },
    {
        id: 6,
        title: "Basic Robotics Training Certificate",
        subtitle: "Basic Robotics Training",
        source: "Robotics Club, IOEPC",
        issued: "Jan 25, 2023",
        image: "/certificates/basicrobo.jpg"
    }
]

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null)

    const handleViewCertificate = (cert: typeof certificates[0]) => {
        setSelectedCertificate(cert)
    }

    const closeModal = () => {
        setSelectedCertificate(null)
    }

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Certificates</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I've participated in many contests, webinar, courses and test and get certified in many skills.
                        You can find the all certificates below.
                    </p>
                </div>

                <div className="space-y-4">
                    {certificates.map((cert) => (
                        <Card key={cert.id} className="p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 relative flex-shrink-0">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                        Issued by: {cert.source}
                                    </p>
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {cert.issued}
                                    </p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
                                        onClick={() => handleViewCertificate(cert)}
                                    >
                                        View
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedCertificate} onOpenChange={closeModal}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <DialogHeader>
                        <DialogTitle>{selectedCertificate?.title}</DialogTitle>
                    </DialogHeader>
                    {selectedCertificate && (
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative w-full max-w-3xl">
                                <Image
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.title}
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="text-center space-y-2">
                                <p className="text-lg font-medium">{selectedCertificate.subtitle}</p>
                                <p className="text-sm text-muted-foreground">
                                    Issued by: {selectedCertificate.source} • {selectedCertificate.issued}
                                </p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}

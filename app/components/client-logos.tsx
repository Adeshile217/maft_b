import Image from "next/image"

export default function ClientLogos() {
  const clients = [
    { src: "/images/clients/geic.png", alt: "Gulf Engineering & Industrial Consultancy" },
    { src: "/images/clients/powerline.png", alt: "PowerLine Solutions" },
    { src: "/images/clients/2p2c.jpeg", alt: "2P2C Project Management Consultants" },
    { src: "/images/clients/grid.png", alt: "GRID Design & Engineering" },
    { src: "/images/clients/projacs.jpeg", alt: "Projacs" },
    { src: "/images/clients/ceg.png", alt: "CEG International" },
    { src: "/images/clients/fairfax.jpeg", alt: "Fairfax Community Inc." },
    { src: "/images/clients/mpi.png", alt: "Manitoba Public Insurance" },
    { src: "/images/clients/egec.png", alt: "EGEC Qatar for Engineering Consultations" },
    { src: "/images/clients/bombardier.png", alt: "Bombardier" },
    { src: "/images/clients/atb.png", alt: "ATB Financial" },
    { src: "/images/clients/blue-cross.png", alt: "Blue Cross Medavie Benefits" },
    { src: "/images/clients/bell.png", alt: "Bell MTS" },
    { src: "/images/clients/winnipeg.jpeg", alt: "City of Winnipeg" },
    { src: "/images/clients/si-systems.png", alt: "SI Systems" },
    { src: "/images/clients/airbus.png", alt: "Airbus" },
    { src: "/images/clients/vale.png", alt: "Vale" },
    { src: "/images/clients/liberty.jpeg", alt: "Liberty" },
    { src: "/images/clients/cwb.png", alt: "CWB Financial Group" },
    { src: "/images/clients/nestle.png", alt: "Nestle" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
      {clients.map((client, index) => (
        <div key={index} className="flex items-center justify-center h-20 w-full">
          <div className="relative w-full h-full max-w-[160px]">
            <Image
              src={client.src || "/placeholder.svg"}
              alt={client.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

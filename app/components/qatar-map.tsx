"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QatarMapProps {
  googleMapsUrl?: string
}

export default function QatarMap({ googleMapsUrl = "https://maps.app.goo.gl/R2ev1HtQr3UNb5VS8" }: QatarMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is where you would normally initialize a map like Google Maps
    // For this example, we're just showing a placeholder
    const mapContainer = mapRef.current
    if (mapContainer) {
      mapContainer.innerHTML = `
        <div class="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center p-4">
              <h3 class="font-bold text-lg">Qatar Freezone Business Innovation Park</h3>
              <p class="text-sm text-gray-600 mb-2">Doha, Qatar</p>
              <p class="text-xs text-gray-500">Click the buttons below to view on Google Maps</p>
            </div>
          </div>
        </div>
      `
    }

    return () => {
      if (mapContainer) {
        mapContainer.innerHTML = ""
      }
    }
  }, [])

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, "_blank")
  }

  const openDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Qatar+Freezone+Business+Innovation+Park&destination_place_id=ChIJYTN3Erjzo5UR4jjCl6q4AE8`
    window.open(directionsUrl, "_blank")
  }

  return (
    <div className="space-y-4">
      <div ref={mapRef} className="w-full h-64 rounded-lg shadow-md"></div>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button variant="outline" onClick={openGoogleMaps}>
          <ExternalLink className="mr-2 h-4 w-4" />
          View on Google Maps
        </Button>
        <Button variant="outline" onClick={openDirections}>
          <Navigation className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
      </div>
    </div>
  )
}

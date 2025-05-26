import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
}: OptimizedImageProps) {
  // Check if the image is from an external source or local
  const isExternal = src.startsWith("http") || src.startsWith("https")

  return (
    <div className={cn("overflow-hidden", className)}>
      {isExternal ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
        />
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
        />
      )}
    </div>
  )
}

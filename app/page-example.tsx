import OptimizedImage from "@/app/components/optimized-image"

export default function ExamplePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Image Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Hero Image</h2>
          <OptimizedImage
            src="/images/hero/main-banner.jpg"
            alt="MAFT Technology Solutions"
            width={1200}
            height={600}
            priority={true}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Service Image</h2>
          <OptimizedImage
            src="/images/services/project-management.jpg"
            alt="Project Management Services"
            width={800}
            height={600}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div>
          <h2 className="text-lg font-semibold mb-4">Team Member</h2>
          <OptimizedImage
            src="/images/team/ceo.jpg"
            alt="CEO"
            width={400}
            height={400}
            className="rounded-full aspect-square"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Icon</h2>
          <OptimizedImage src="/images/icons/innovation.svg" alt="Innovation Icon" width={120} height={120} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Logo</h2>
          <OptimizedImage src="/images/logo/maft-logo.png" alt="MAFT Logo" width={200} height={80} />
        </div>
      </div>
    </div>
  )
}

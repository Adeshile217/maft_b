"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function VideoSection() {
  const [isPlayingEnglish, setIsPlayingEnglish] = useState(false)
  const [isPlayingArabic, setIsPlayingArabic] = useState(false)
  const [isMutedEnglish, setIsMutedEnglish] = useState(false)
  const [isMutedArabic, setIsMutedArabic] = useState(false)

  const togglePlayEnglish = () => {
    setIsPlayingEnglish(!isPlayingEnglish)
    // In a real implementation, you would control the video playback here
  }

  const togglePlayArabic = () => {
    setIsPlayingArabic(!isPlayingArabic)
    // In a real implementation, you would control the video playback here
  }

  const toggleMuteEnglish = () => {
    setIsMutedEnglish(!isMutedEnglish)
    // In a real implementation, you would control the video audio here
  }

  const toggleMuteArabic = () => {
    setIsMutedArabic(!isMutedArabic)
    // In a real implementation, you would control the video audio here
  }

  return (
    <div className="w-full py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services Overview</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Watch our video introduction to learn more about MAFT Technology services.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="english">English</TabsTrigger>
              <TabsTrigger value="arabic">Arabic</TabsTrigger>
            </TabsList>
            <TabsContent value="english">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted relative rounded-lg overflow-hidden">
                    {/* Replace with actual video element in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                      <p className="text-lg font-medium">English Service Overview Video</p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-black/30 hover:bg-black/50 text-white"
                        onClick={togglePlayEnglish}
                      >
                        {isPlayingEnglish ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                        {isPlayingEnglish ? "Pause" : "Play"}
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-black/30 hover:bg-black/50 text-white"
                        onClick={toggleMuteEnglish}
                      >
                        {isMutedEnglish ? <VolumeX className="h-4 w-4 mr-2" /> : <Volume2 className="h-4 w-4 mr-2" />}
                        {isMutedEnglish ? "Unmute" : "Mute"}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      This video provides an overview of all services offered by MAFT Technology, highlighting our
                      expertise and commitment to delivering high-quality solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="arabic">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted relative rounded-lg overflow-hidden">
                    {/* Replace with actual video element in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                      <p className="text-lg font-medium">Arabic Service Overview Video</p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-black/30 hover:bg-black/50 text-white"
                        onClick={togglePlayArabic}
                      >
                        {isPlayingArabic ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                        {isPlayingArabic ? "Pause" : "Play"}
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-black/30 hover:bg-black/50 text-white"
                        onClick={toggleMuteArabic}
                      >
                        {isMutedArabic ? <VolumeX className="h-4 w-4 mr-2" /> : <Volume2 className="h-4 w-4 mr-2" />}
                        {isMutedArabic ? "Unmute" : "Mute"}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      هذا الفيديو يقدم نظرة عامة على جميع الخدمات التي تقدمها شركة MAFT Technology، مع التركيز على
                      خبرتنا والتزامنا بتقديم حلول عالية الجودة.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

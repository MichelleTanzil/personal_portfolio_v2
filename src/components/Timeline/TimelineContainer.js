import React, { useState } from "react"
import Title from "../Title"
import MarketingTimeline from "./MarketingTimeline"
import MainTimeline from "./MainTimeline"
const TimelineContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div class="experience-container">
      <Title title="Professional Experience" />

      {isOpen ? (
        <MarketingTimeline handleOpen={handleOpen} />
      ) : (
        <MainTimeline handleOpen={handleOpen} />
      )}
    </div>
  )
}

export default TimelineContainer

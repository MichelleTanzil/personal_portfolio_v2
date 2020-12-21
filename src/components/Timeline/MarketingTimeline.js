import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase, FaRegWindowClose } from "react-icons/fa"

const MarketingTimeline = ({ handleOpen }) => {
  return (
    <div>
      <div onClick={handleOpen} className={"closeMktg"}>
        <FaRegWindowClose />
      </div>
      <VerticalTimeline className={"vertical-timeline-custom-line"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-custom-line-down"
          iconClassName={"timeline-icons"}
          dateClassName={"timeline-date"}
          date="2018 - 2019"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Marketing Associate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Principal Financial Group
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-custom-line-down"
          iconClassName={"timeline-icons-alt"}
          dateClassName={"timeline-date"}
          date="2016 - 2018"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Sales/Production Coordinator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">PromoShop</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-custom-line-down"
          iconClassName={"timeline-icons"}
          dateClassName={"timeline-date"}
          date="2016"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Sales Support Coordinator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Brown & Bigelow
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-custom-line-down"
          iconClassName={"timeline-icons-alt"}
          dateClassName={"timeline-date"}
          date="2015 - 2016"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Digital Sales Assistant/Adminstrative Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Pixel Motion</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default MarketingTimeline

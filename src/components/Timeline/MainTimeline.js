import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase, FaSchool, FaPlusSquare, FaPlus } from "react-icons/fa"

const MainTimeline = ({ handleOpen }) => {
  return (
    <div>
      <div
        onClick={handleOpen}
        className="closeMktg tooltip"
        onKeyDown={handleOpen}
        role="presentation"
      >
        <FaPlusSquare />
        <span className="tooltiptext">
          Marketing & Sales Support Experience
        </span>
      </div>
      <VerticalTimeline className={"vertical-timeline-custom-line"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconClassName={"timeline-icons"}
          date="2021 - 2021"
          dateClassName={"timeline-date"}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Microsoft</h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconClassName={"timeline-icons"}
          date="2021 - 2021"
          dateClassName={"timeline-date"}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Microsoft LEAP Apprenticeship Program
          </h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconClassName={"timeline-icons"}
          date="2020 - 2021"
          dateClassName={"timeline-date"}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Developer Support Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Voxology and Shoutpoint
          </h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconClassName={"timeline-icons-alt"}
          dateClassName={"timeline-date"}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Coding Dojo</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Triple Black Belt - Python, C# (ASP. NET Core), and MEAN
          </h4>
          <p>Software Development Coding Bootcamp</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2019"
          iconClassName={"timeline-icons"}
          dateClassName={"timeline-date"}
          icon={<FaBriefcase />}
          onTimelineElementClick={handleOpen}
        >
          <h3 className="vertical-timeline-element-title">
            Marketing & Sales Support <FaPlus style={{ float: "right" }} />
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013"
          iconClassName={"timeline-icons-alt"}
          dateClassName={"timeline-date"}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            California State University Fullerton
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Arts
          </h4>
          <p>Business Administration Emphasis in Marketing</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default MainTimeline

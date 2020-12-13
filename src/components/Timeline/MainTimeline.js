import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import React from "react"
import Title from "../Title"
import { FaBriefcase, FaSchool } from "react-icons/fa"

const Timeline = () => {
  return (
    <div class="experience-container">
      <Title title="Professional Experience" />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-custom-line-down"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="2020 - present"
          icon={<FaBriefcase />}
          onTimelineElementClick={() => {
            alert("clicked!")
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Developer Support Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Voxology, Inc.</h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Coding Dojo</h3>
          <p>Software Development Coding Bootcamp</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014-2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Marketing</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
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
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaStar />}
        /> */}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline

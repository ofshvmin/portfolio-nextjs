'use client'

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion, useInView } from "framer-motion";

type ExperienceItem = (typeof experiencesData)[number];

function TimelineEntry({
  experience,
  index,
  theme,
}: {
  experience: ExperienceItem;
  index: number;
  theme: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <VerticalTimelineElement
        position={isLeft ? "left" : "right"}
        visible={true}
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={experience.date}
        icon={experience.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgb(31, 41, 55)",
          boxShadow:
            theme === "light"
              ? "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
              : "0 0 0 4px rgb(17, 24, 39), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
          fontSize: "1.5rem",
          zIndex: 1,
        }}
      >
        <h3 className="font-semibold capitalize">{experience.title}</h3>
        <p className="font-normal !mt-0">{experience.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {experience.description}
        </p>
      </VerticalTimelineElement>
    </motion.div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline animate={false} lineColor="">
        {experiencesData.map((experience, index) => (
          <TimelineEntry
            key={index}
            experience={experience}
            index={index}
            theme={theme}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
}

"use client";

import { use, useEffect, useMemo, useRef, useState } from "react";
import styles from "./HomePage.module.css";
import { projects } from "./projectsData";

function ProjectSlide({
    project,
    index,
}: {
    project: (typeof projects)[number];
    index: number;
}) {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {
                threshold: 0.15,
            }
        );
    
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
    <section
      ref={ref as any}
      className={`${styles.projectSlide} ${styles.reveal} ${
        visible ? styles.revealVisible : ""
      }`}
      aria-label={`Project ${index + 1}: ${project.title}`}
    >
      <div className={styles.projectInner}>
        <div className={styles.projectMeta}>
          <p className={styles.projectKicker}>Project {index + 1}</p>
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectSummary}>{project.summary}</p>

          <div className={styles.techRow}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techPill}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.projectLinks}>
            <a
              className={styles.primaryBtn}
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>

            {project.demo ? (
              <a
                className={styles.secondaryBtn}
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ProjectsSection() {
    const list = useMemo(() => projects, []);

    return (
        <div id="projects" className={styles.projectsStack}>
            {list.map((p, i) => (
                <ProjectSlide key={p.title} project={p} index={i} />
            ))}
        </div>
    )
}
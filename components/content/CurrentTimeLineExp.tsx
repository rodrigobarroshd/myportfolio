import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      {/* <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Progema Brasil</a> | Mar. 2023 - {calculateDuration('2023-03-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and maintenance of projects implementing agile methodologies (Kanban in Jira) and best practices such as SOLID principles, pixel perfect, clean architecture, clean code using Jira, SCRUM practices, Git, GitFlow practices, Bitbucket, HTML, CSS, Pug, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Zustand, Jest and using microfrontends and Storybook to facilitate the use of reusable components.
        </TimelineEvent.Description>

      </TimelineEvent> */}

      <TimelineEvent>

        <TimelineEvent.Title>Progema Brasil | Feb. 2023 - Mar. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>
        Developed customized software and application solutions focused on meeting specific customer needs. We developed and implemented a system for the "Beverator", an innovative device that serves drinks automatically through an application. 
        We implemented scalable functionalities using MQTT, Cloud Code and other technologies, integrating IoT systems to optimize operations, such as serving beer in an automated way. Collaborated on innovative projects, working on requirements analysis, development and delivery of customized technological solutions We created web applications and systems focused on user experience, ensuring performance and efficiency. Implemented a CMS for product maintenance, allowing dynamic management of the beverage catalog
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Freelance | May. 2020 - Jul. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;
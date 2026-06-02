import { SectionTitle } from '../components/section-title.component';
import { projects } from '../data/portfolio';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
	return (
		<section
			className='projects'
			id='projects'
		>
			<div className='projects-content'>
				<div className='projects-grid'>
					{projects.items.map((project, idx) => (
						<div
							key={idx}
							className='project-card'
						>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div className='project-tech'>
								{project.techStack.map((tech, techIdx) => (
									<span
										key={techIdx}
										className='tech-tag'
										style={{
											'--clr': tech.glowColor,
											color: tech.iconColor,
										} as React.CSSProperties}
									>
										<tech.icon />
										{tech.label}
									</span>
								))}
							</div>
							<div className='project-links'>
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='view-project'
								>
									View Project <FaExternalLinkAlt size={12} />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<SectionTitle
					title={projects.section.title}
					subTitle={projects.section.subtitle}
				/>
			</div>
		</section>
	);
};


const education = [
  {
    number: '01',
    qualification: 'B.Sc Computer Science',
    institution: 'P.V.K.K Degree College',
    category: 'DEGREE EDUCATION',
    description:
      'Studied Computer Science, building an academic foundation for a career in software development and technology.',
    topics: ['Computer Science', 'Programming', 'Technology'],
  },
  {
    number: '02',
    qualification: 'D.El.Ed',
    institution: 'Balaji College of ETE',
    category: 'TEACHER EDUCATION',
    description:
      'Completed Diploma in Elementary Education with 88%.',
    topics: ['88%', 'Teacher Education'],
  },
  {
    number: '03',
    qualification: 'Intermediate (MPC)',
    institution: 'APMs Junior College',
    category: 'INTERMEDIATE EDUCATION',
    description:
      'Completed Intermediate in the Mathematics, Physics, and Chemistry stream with 88%.',
    topics: ['Mathematics', 'Physics', 'Chemistry', '88%'],
  },
  {
    number: '04',
    qualification: 'SSC',
    institution: 'AP Model School',
    category: 'SECONDARY EDUCATION',
    description:
      'Completed secondary school education with a GPA of 8.8.',
    topics: ['SSC', 'GPA: 8.8'],
  },
  {
    number: '05',
    qualification: 'Java Full Stack Internship',
    institution: 'Tap Academy',
    category: 'TECHNICAL TRAINING',
    description:
      'Developing programming knowledge and practical software development skills through Java and full-stack development training.',
    topics: [
      'Java Programming',
      'Object-Oriented Programming',
      'Web Development',
      'Problem Solving',
    ],
  },
]

function Education() {
  return (
    <section id="education" className="education-section section">
      <div className="section-container">
        <div className="education-heading">
          <p className="section-label">MY LEARNING JOURNEY</p>

          <h2 className="section-title">
            Education & <span>Learning</span>
          </h2>

          <p className="section-description">
            My academic journey combines Computer Science,
            educational qualifications, and technical training
            to support my growth in software development.
          </p>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article
              className="education-card glass-card"
              key={item.number}
            >
              <div className="education-card-icon" aria-hidden="true">
                <span>&lt;/&gt;</span>
              </div>

              <div className="education-card-content">
                <div className="education-card-meta">
                  <span>{item.category}</span>
                  <span className="education-number">
                    {item.number}
                  </span>
                </div>

                <h3>{item.qualification}</h3>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p className="education-description">
                  {item.description}
                </p>

                <div className="education-topics">
                  {item.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

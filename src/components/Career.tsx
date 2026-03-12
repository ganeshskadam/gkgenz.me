import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Work Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Engineer - AWS</h4>
                <h5>ProAzure Software Solutions Pvt. Ltd</h5>
              </div>
              <h3>1 Jan – 31 Jan 2026</h3>
            </div>
            <p>
              Completed 1-month training in AWS cloud technologies and solutions
              architecture. Worked with AWS services including EC2, S3, RDS,
              Lambda, and CloudFormation. Participated in cloud infrastructure
              deployment, monitoring, and optimization projects.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>Fourise Software Solutions Pvt. Ltd</h5>
              </div>
              <h3>May – July 2023</h3>
            </div>
            <p>
              Developed and maintained web applications using HTML, CSS,
              JavaScript, and PHP. Collaborated with cross-functional teams to
              implement new features and resolve technical issues. Participated
              in code reviews and adopted best practices for clean, maintainable
              code.
            </p>
          </div>

          {/* Divider between Work and Education */}
          <div className="career-divider">
            <span>Education</span>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Engineering</h4>
                <h5>SMSMPITR Akluj,Maharashtra State Board of Technical Education (MSBTE)</h5>
              </div>
              <h3>2021 – 2024</h3>
            </div>
            <p>
              Completed Diploma in Computer Engineering with 81.14% from
              SMSMPITR, Akluj under the Maharashtra State Board of Technical
              Education (MSBTE).
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering - Computer Engineering</h4>
                <h5>S B Patil College of Engineering, Savitribai Phule Pune University</h5>
              </div>
              <h3>2024 – 2027</h3>
            </div>
            <p>
              Currently pursuing BE in Computer Engineering at S B Patil College
              of Engineering, Vangali, Indapur. SE SGPA: 8.615.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;

import { BriefcaseBusinessIcon, GraduationCapIcon } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "ReactJS",
    "TailwindCSS",
    "Javascript",
    "Redux-Toolkit",
  ];
  const backendSkills = ["Node.js", "ExpressJS", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer with expertise in buidling scable
              applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="flex flex-wrap mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="flex flex-wrap mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <GraduationCapIcon className="size-6 inline text-blue-500" />{" "}
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Information Tehnology</strong>
                  <div>Netaji Subhash Engineering College</div>
                  <div>(2021-2025)</div>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <BriefcaseBusinessIcon className="size-6 inline text-blue-500" />{" "}
                Work Experience
              </h3>
              <ul>
                <li className="font-semibold italic text-white/40">
                  No Experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;

import Pan from "../public/assets/projects/pan.png";
import Motel from "../public/assets/projects/motel.png";
import Film from "../public/assets/projects/film.png";
import Car from "../public/assets/projects/car.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Exclusive CMS"
            backgroundImg={Pan}
            projectUrl="/"
            tech="PHP | MySQL | Bootstrap | JavaScript"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={Motel}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={Film}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={Car}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

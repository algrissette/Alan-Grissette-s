const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Swift", "C#", "HTML", "CSS", "SQL", "Java", "Python"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "MySQL", "MongoDB", "Strapi CMS"] },
  { category: "Frontend", items: ["Next.js", "React", "SwiftUI", "Blazor", "Tailwind CSS"] },

];

const Skills = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Expertise & Competencies</span>
        <div className="flex flex-col gap-y-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-y-2">
              <span className="text-Snow text-xs font-semibold opacity-60">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(31, 223, 100, 0.15)",
                      color: "#1fdf64",
                      border: "1px solid rgba(31, 223, 100, 0.3)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
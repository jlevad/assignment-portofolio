import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4" id="skills">
        {/* <p className="text-lg text-gray-500 font-bold m-6">Skills</p> */}
        <SkillItem name="Javascript" persent="80" />
        <SkillItem name="React JS" persent="77" />
        <SkillItem name="HTML" persent="85" />
        <SkillItem name="CSS" persent="79" />
      </div>
    </>
  )
}

export default Skills;
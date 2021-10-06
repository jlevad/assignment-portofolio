import ExperienceItems from "./ExperienceItems";

const dataExperiences = [
  {
    name: "PT Astra Otoparts Tbk",
    description: "car mechanic",
    period: "2014 - 2015",
  },
  {
    name: "PT Astra Honda Motor Tbk",
    description: "Operator Production",
    period: "2016 - 2017",
  },
  {
    name: "PT Terang Parts Indonesia",
    description: "Operator Production",
    period: "2018 - 2020",
  },
  {
    name: "PT Bibit Mitra Solusi",
    description: "Junior Programmer",
    period: "2021 - now",
  },
];

const Experiences = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4" id="experience">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {dataExperiences.map((data) => (
            <ExperienceItems
              header={data.name}
              description={data.description}
              period={data.period}
            />
          ))}
        </div>
        {/* <p className="text-lg text-gray-500 font-bold m-6">Experiences</p> */}
      </div>
    </>
  );
};

export default Experiences;

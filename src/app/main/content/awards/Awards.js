import AwardItem from "./AwardItem";

const dataAwards = [
  {
    title: 'Belajar Fundamental Front-End Web Development',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/90a58b8fff7a27e0688b39b888dfb63368250a04/view'
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/ffdcd6e9b620f994499a03e28cfc58bfb3b89be5/view'
  },
  {
    title: 'Memulai Pemrograman Dengan Python',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/644f73cf2c0cbc532c4be9af793216675bca8685/view'
  },
  {
    title: 'Membangun Progressive Web Apps',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/0a399579d0a2f4a02d3a557b6dbddb2262bc7ece/view'
  },
  {
    title: 'Belajar Membuat Aplikasi Kognitif',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/116db813fd11999a1451e4a06293344ed472f796/view'
  },
]

const Awards = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4 grid grid-cols-1 md:grid-cols-2" id="awards">
        {/* <p className="text-lg text-gray-500 font-bold m-6">Awards</p> */}
        {dataAwards.map((data) => (
          <AwardItem title={data.title} link={data.link} />
        ))}
      </div>
    </>
  )
}

export default Awards;
import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Bimo Aryo Seno",
      title: "Engineer PT.GS Battery",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQGgFIHlvna3wg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718785199328?e=1733961600&v=beta&t=86TBXZgfgWtTXbbW9r5ramEu8No3OBtz1E1KCZTkuvA",
      icon: "assets/linkedin.png",
      desc: "In large projects, Jonathan consistently manages to resolve issues with a structured and analytical approach. He doesn’t just focus on the end result but also ensures that the resolution process is smooth and effective. His commitment to quality and resilience makes him a highly reliable partner.",
    },
    {
      id: 2,
      name: "Muhammad Daffa Safriel S.",
      title: "Electrical Staff Banyubramanta ITS",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFbzthg2rtLZg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722443918285?e=1733961600&v=beta&t=qL2pX6RHcutufhf5TueOd0K78AidkAC6OztrlrS10P4",
      icon: "assets/linkedin.png",
      desc: " With the wide range of references and methods at his disposal, Jonathan can introduce different perspectives to any project. He can also tailor problem-solving strategies to the team's needs, ensuring optimal results and smooth collaboration. His capabilities significantly contribute to the success of any project.",
      featured: true,
    },
    {
      id: 3,
      name: "Yusup Pratama",
      title: "Service Planner PT.Liebherr",
      img: "https://media.licdn.com/dms/image/v2/C5603AQExVrj_MrgcGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1595995906728?e=1733961600&v=beta&t=0e7_Ak9GwdSreQZRZ4fESbhG8fj9U73mhc8sTi9GzJI",
      icon: "assets/linkedin.png",
      desc: "Jonathan’s skills in adopting and applying the latest technologies benefit not only the projects he works on but also enhance the competitiveness of the team or organization",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

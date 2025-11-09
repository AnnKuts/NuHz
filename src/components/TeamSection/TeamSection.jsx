import avatarAnna from "../../assets/avatars/AnnKuts.png";
import avatarMariia from "../../assets/avatars/Impe11e.png";
import avatarIvanna from "../../assets/avatars/ivannamal.png";
import avatarVladyslav from "../../assets/avatars/taitami.png";
import TeamCard from "./TeamCard/TeamCard.jsx";
import "./TeamSection.css";
const TeamSection = () => {
  const teamMembers = [
    {avatar: avatarAnna, name: "Anna", role: "Teamlead | FullStack developer", bio: "Honest, purposeful, perseverant, fast learning, sociable, highly motivated, reliable"},
    {avatar: avatarMariia, name: "Mariia", role: "Fullstack developer", bio: "Responsible<br />Sociable<br />Analytical thinking"},
    {avatar: avatarIvanna, name: "Ivanna", role: "Backend Developer", bio: "Сommunicative, teamworking, problem-solver, adaptive, loves critical thinking, takes leadership, and love chebupeli"},
    {avatar: avatarVladyslav, name: "Vladyslav", role: "Backend Developer", bio: "Creative, fast learner, team player, adaptable under pressure, passionate about building smart solutions"},
  ];

  return (
    <section id="team" className="team-section">
      <h2>Our Team</h2>
      <div className="team-cards">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            avatar={member.avatar}
            name={member.name}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
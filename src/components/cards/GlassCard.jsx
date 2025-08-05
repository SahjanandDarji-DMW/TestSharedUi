const members = [
  { name: "Chris Wood", status: "Online", color: "green", action: "Invite" },
  { name: "Jose Leos", status: "Busy", color: "orange", action: "Chat" },
  { name: "Jeny Green", status: "Offline", color: "red", action: "Chat" },
  { name: "Neil Sims", status: "Online", color: "green", action: "Chat" },
];

const avatar =
  "https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?t=st=1754386698~exp=1754390298~hmac=45cd16df983417ddd1d4c8a180b1388b43616acd7cecc314ef6a3e506583b2f2&w=826";

export const GlassCard = () => {
  return (
    <div className="glass">
      <div className="header">
        <h2>Team members</h2>
        <span className="see-all">See all</span>
      </div>

      <div className="members">
        {members.map((member, idx) => (
          <div key={idx} className="member">
            <img src={avatar} alt={member.name} />
            <div className="info">
              <p className="name">{member.name}</p>
              <p className={`status ${member.color}`}>{member.status}</p>
            </div>
            <button className="action">{member.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

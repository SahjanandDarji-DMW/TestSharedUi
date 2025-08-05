// src/components/GlassCard.jsx
import "./Card.css";

export const GlassCard = () => {
  return (
    <div className="glass rounded-xl p-6 w-80">
      <h2 className="text-white text-lg font-semibold">Team members</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-400 text-sm cursor-pointer">See all</span>
      </div>

      <div className="mt-4 space-y-4">
        {[
          {
            name: "Chris Wood",
            status: "Online",
            color: "green-400",
            action: "Invite",
            img: "path/to/chris-wood.jpg",
          },
          {
            name: "Jose Leos",
            status: "Busy",
            color: "yellow-400",
            action: "Chat",
            img: "path/to/jose-leos.jpg",
          },
          {
            name: "Jeny Green",
            status: "Offline",
            color: "red-400",
            action: "Chat",
            img: "path/to/jeny-green.jpg",
          },
          {
            name: "Neil Sims",
            status: "Online",
            color: "green-400",
            action: "Chat",
            img: "path/to/neil-sims.jpg",
          },
        ].map((member, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-white text-sm font-semibold">
                  {member.name}
                </p>
                <p className={`text-${member.color} text-xs`}>
                  {member.status}
                </p>
              </div>
            </div>
            <button className="bg-green-500 text-white text-xs py-1 px-3 rounded">
              {member.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

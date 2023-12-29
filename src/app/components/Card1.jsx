import Image from "next/image";
import { MemberList } from "../member/MemberList.js"; 
import { FaTwitter } from "react-icons/fa";



function MyComponent() {
  return (
    <div className="flex mt-3 gap-3">
      {MemberList.map((member, index) => (
        <div key={index}>
          
          <div className="max-w-sm rounded overflow-hidden shadow-lg h-[600px]">
            <Image
              src={member.picture.src}
              alt={member.name}
              width={250}
              height={250}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><h2>{member.name}</h2></div>
              <p className="text-gray-700 text-base">
                {member.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;

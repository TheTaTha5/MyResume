import Image from "next/image";
import WorkingExp from "./sections/workingExperience";
import { MySkill } from "./sections/mySkill";
import Bio from "./sections/bio";

export default function Home() {
  return (
    <main>
      <div className=" flex-col justify-center ...">
        <Image
          className=""
          src="/profile2.jpg"
          alt="My Profile"
          width={180}
          height={37}
          priority
        />
        <h1 id="Name">Kamin Sitthiphol</h1>
      </div>
      <div className="flex flex-row">
      <div>
        <Bio />
        <WorkingExp />
      </div>
      <div>
        <MySkill/>
        </div>
      </div>
    </main>
  );
}

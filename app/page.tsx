import Image from 'next/image'
import WorkingExp from './sections/workingExperience'

export default function Home() {
  return (
    <main>
      <h1>My Resume</h1>
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/profile2.jpg"
          alt="My Profile"
          width={180}
          height={37}
          priority
        />
        <section id="bio">
      <div>
        About me :
        <p>
        I am fresh graduate from Information System  for Business Major. As a junior developer I am ready to embark on programming career to develop and contribute my skill to build quality product and software to the world of technology.
        </p>
      </div>
      </section>
      <WorkingExp></WorkingExp>
    </main>
  )
}

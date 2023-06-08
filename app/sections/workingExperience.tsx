import Image from 'next/image'

export default function WorkingExp() {
    return (
        <section id="workingExperience">
        <h2>
          <b>Working Experience</b>
        </h2>
        <Image src="/logo-w.png"alt='NextHopLogo'width={180}height={77}/>
        <h2>Nov 2022 - Mar 2023  ~ 4 months</h2>
        <h2>Role</h2>
        <p>Trainee Flutter Developer</p>
        <h2>Responsibilities</h2>
        <ul>
            <li>
            Learn and build android mobile application as assigned with Flutter framework
            </li>
            <li>
            Learn and build  a demo TodoList WebApp with ReactJS , TailWindUI/ MUI.
            </li>
        </ul>
        <h1><b>Looking for more...</b></h1>
      </section>
    )
}
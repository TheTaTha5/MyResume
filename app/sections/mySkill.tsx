"use client"; 
import { useState } from "react"

export function skillController() {
    const [skill,setSkill] = useState<String>("")
}


export function MySkill() {
    return (
        <section id="hardSkill">
        <h1>
            <b>
                My Skills
            </b>
        </h1>
        <h2>
                Programming
        </h2>
        <ul>
            <li>
                Basic Dart/Flutter Framework
            </li>
            <li>
                Basic Python
            </li>
            <li>
                Basic JavaScript/TypeScript
            </li>
            <li>
                UI Framework( Bootstrap/ TailWindUI / MaterialUI)
            </li>
        </ul>
        <h2>
                Graphic & Video
        </h2>
        <ul>
            <li>
            Adobe Illustrator
            </li>
            <li>
            Adobe Photoshop
            </li>
            <li>
            Adobe Premier
            </li>
            <li>
            Sony Vegas
            </li>
            <li>
            Canva
            </li>
        </ul>
        <h2>
        Microsoft Office
        </h2>
        <ul>
            <li>
            Microsoft Word
            </li>
            <li>
            Microsoft PowerPoint
            </li>
            <li>
            Microsoft Excel
            </li>
        </ul>
        </section>
    )
}
const text =[
    `The principal basis for restricting cell phone use in the classroom is that phones can act as a distraction. Not only do students and teachers become diverted`,

    `but this has an analogous impact on someone glancing at their device during a movie screening - even if it's silent, the illuminated display will still divert oneâs focus away from what matters most!`,

    `When debating mobile phone regulations in the classroom, safety is typically brought to the forefront.`,
    
    `Emergencies may happen at any time and students should have their phones with them for peace of mind. Parents' needs come into play too; if a student has children, they could need access to call someone during medical emergencies.`,

    `Furthermore, if an individual is on standby for work-related matters then having a cell phone accessible would be useful as well - there are endless plausible scenarios that make it difficult not to provide exceptions from these rules!`,
    
    `To ensure all students have an opportunity to learn without distraction, the optimal choice is to establish and enforce mobile phone usage rules. With these guidelines in place, pupils should be able to carry their devices with them as long as they remain on silent during class hours.`,
    
    `This way, phones are easily accessible for any necessary use but don't interfere with anyone's learning experience.`,
    
    `Vibrate settings can be allowed if the instructor feels comfortable with it, as the buzz may not be heard in a crowded classroom. In an emergency situation, students can quickly step out of class to answer their phones. This will create a more relaxed environment for both instructors and students alike.`,
    
    `Cell phone restrictions in the classroom should be enforced with clear and specific disciplinary measures for violations. For instance, if a student is caught using their cell phone during class, they can be excused from that day's classes. Professors should avoid seizing control of the device out of consideration for potential liability issues.`,
    
];

const item = document.querySelector("#items")
const dataContainer = document.querySelector("#data");
const generate = () =>{
    // console.log(item.value)
    if(isNaN(item.value) || item.value <0 || item.value> 9){
        const randomIndex = Math.floor(Math.random() * text.length)
        dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`
    }else{
        const data = text.slice(0, item.value)
        const parars = data.map(
            (d) =>{
                return `<p> ${d} </p>`
            }
        )
        console.log(parars)
        // console.log(parars.join(""))
        dataContainer.innerHTML = parars.join("");
    }
    }

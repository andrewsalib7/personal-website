/*if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready
}

function ready(){
}
    */
let experienceTitle = document.getElementById("xp");
experienceTitle.addEventListener("mouseover",displayExperienceContent)

let educationTitle = document.getElementById("ed")
educationTitle.addEventListener("mouseover", displayEducationContent)

let skillsTitle = document.getElementById("sk")
skillsTitle.addEventListener("mouseover", displaySkillContent)



function displayEducationContent(event){
    educationTitle.classList.add('active-header')
    removeOtherBorders(educationTitle)
    let content = document.getElementsByClassName("swappable-body")[0]
    content.innerHTML = edContent
}

function displayExperienceContent(event){

    experienceTitle.classList.add('active-header')
    removeOtherBorders(experienceTitle)
    let content = document.getElementsByClassName("swappable-body")[0]
    content.innerHTML = exContent
}

function displaySkillContent(event){
    skillsTitle.classList.add('active-header')
    removeOtherBorders(skillsTitle)
    let content = document.getElementsByClassName("swappable-body")[0]
    content.innerHTML = skContent
}

function removeOtherBorders(title){
    if(title === experienceTitle){
        educationTitle.classList.remove('active-header')
        skillsTitle.classList.remove('active-header')
    }else if(title === educationTitle){
        experienceTitle.classList.remove('active-header')
        skillsTitle.classList.remove('active-header')
    }else{
        educationTitle.classList.remove('active-header')
        experienceTitle.classList.remove('active-header')
    }

}






var exContent = `<ul class="experience-list-wrapper">
<li class="experience-entry">
    <div class="experience-title">
        <h3>
            SYSTEMS ENGINEER
        </h3>
    </div>
    <div class="experience-details">
        <ul class="work-summary">
            <li>
                <span class="company-and-experience">ALLEGRO MICROSYSTEMS: 2+ years of experience</span> <span>in Allegro's European Design Center (EDC). </span>
            </li>
            <li>Worked on the design of an SoC system for motor control drivers in automotive applications.</li>
            <li>Participated in defining the architecture of the system.</li> 
            <li>Defining peripheral functionality and requirements.</li>  
            <li>Writing C-programs to test and verify hardware peripherals and system functionality.</li>     
            <li>Design PCB boards with integrated FPGA for system evaluation.</li>  
            <li> Writing datasheets and user manuals for customer use.</li>   
            <li>Interfacing requirements between different teams such as digital design and software engineering</li>
            <li>Running experimental tests to verify motor control algorithms on the bench using a dSPACE setup.</li>     
        </ul>
    </div>
</li>
</ul>
<ul class="experience-list-wrapper">
<li class="experience-entry">
    <div class="experience-title">
        <h3>
            <span>GRADUATE TEACHING ASSISTANT</span> 
        </h3>
    </div>
    <div class="experience-details">
        <ul class="work-summary">
            <li>
                <span class="company-and-experience">THE AMERICAN UNIVERSITY OF SHARJAH (AUS): 2+ years of experience</span>
            </li>
            <li>Assisting in teaching and grading of undergraduate and graduate courses including: Instrumentations and Measurements lab,<br> Advanced Control Systems, Electric Drives, Introduction to Mechatronics, Control Systems lab and Computer Programming.</li>
            <li>Research assistant in the fields of electric drives, power electronics, control and regenerative braking.</li> 
        </ul>
    </div>
</li>
</ul>`

var edContent = `<ul class="experience-list-wrapper">
<li class="experience-entry">
    <div class="experience-title">
        <h3>
            M.Sc. in Mechatronics Engineering
        </h3>
    </div>
    <div class="experience-details">
        <ul class="work-summary">
            <li>
                <span class="company-and-experience">AMERICAN UNIVERSITY OF SHARJAH </span><span> - December 2017</span>
            </li>
            <li>Major: Mechatronics Engineering</li>
            <li>Cumulative GPA: 3.8</li> 
            <li>Thesis title: Synergetic control of PMSM drive for EV applications.</li>  
            <li>Publications:
                <ol class="ordered-list">
                    <li>
                        <span>Performance Analysis of Regenerative Braking in Permanent Magnet Synchronous Motor 
                        Drives at the Technology <br> and Engineering Systems Journal</span>
                    </li>
                    <li>
                        <span>Modeling and Analysis of a Regenerative Braking System with a Battery-Supercapacitor
                            Energy Storage at the ICMSAO'17.</span>
                    </li>
                </ol>
            </li>     
            <li>Academic Projects:
                <ol class="ordered-list">
                    <li>
                        <span>Observer controlling of linear DC motor using dSPACE.</span>
                    </li>
                    <li>
                        <span>Adaptive control of PMSM drive.</span>
                    </li>
                    <li>
                        <span>Battery modeling and serial data transmission using PIC24.</span>
                    </li>
                </ol>
            </li>     
        </ul>
    </div>
</li>
</ul>
<ul class="experience-list-wrapper">
<li class="experience-entry">
    <div class="experience-title">
        <h3>
            <span>B.Sc. in Mechatronics <br>Engineering</span> 
        </h3>
    </div>
    <div class="experience-details short">
        <ul class="work-summary ">
            <li>
                <span class="company-and-experience">THE GERMAN UNIVERISTY IN CAIRO (GUC)</span><span> - June 2014</span>
            </li>
            <li>Major: Mechatronics Engineering</li>
            <li>GPA: Excellent with honors (Cum Laude)</li> 
            <li>Bachelor thesis: Design and control of a mobile sorting robot. (Grade: A+)</li>
        </ul>
    </div>
</li>
</ul>`


var skContent = `<ul class="experience-list-wrapper">
<li class="experience-entry">
    <div class="experience-title">
        <h3>
            TECHNICAL SKILLS
        </h3>
    </div>
    <div class="experience-details skills-short">
    <ul class="work-summary">
        <li>Proficient user of MS Office.</li>
        <li>Design Software (AutoCad, SolidWorks, Pro-E, Altium Designer)</li>
        <li>Programming Languages (Java, C,C#, HTML, CSS, Arduino)</li> 
        <li>Computational Software (Matlab/Simulink, LabVIEW, Ansys, dSPACE)</li>  
</ul>
    </div>
</li>
</ul>
<ul class="experience-list-wrapper">
<li class="experience-entry">
    <div class="experience-title">
        <h3>
            <span>LANGUAGES</span> 
        </h3>
    </div>
    <div class="experience-details skills-short">
        <ul class="work-summary ">
            <li>Arabic (Native language)</li>
            <li>English (fluently written and spoken)</li>
            <li>French (moderate knowledge)</li> 
        </ul>
    </div>
</li>
</ul>`
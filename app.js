    fname="kenneth cunningham";
    career = "Management";
    info="I'm a simple guy who finds purpose in assisting others";
    interest =["Reading","Writing","Good conversation","Walking","Holistic living"];
    companyName="City Winery";
    jobTitle="Operations Director";
    discription=["Hiring","Training","Project Management"];
    skills=["Analytical","Program Development","Employee Development","Digital Marketing"];




console.log("Name :", fname.toUpperCase());
console.log("Career :", career);
console.log("Discription :", info);
console.log('');
console.log('My Interests:');

for (i in interest){
console.log("*",interest[i]);
};

function displayPosition(companyName,jobTitle,discription){
console.log('')
console.log("My Previous Experience:");
console.log(`${jobTitle} at ${companyName} - ${discription}`)
}
 
displayPosition(companyName,jobTitle,discription);

function displaySkill(skill,cool) {
    if (cool === true) {
        console.log(`* Bam: ${skill}`);
    } else {
        console.log(`* ${skill}`);
    }

};

console.log('')

console.log("My Skills:");
displaySkill("math",false);
displaySkill("english",true);
displaySkill("geometry",false);
displaySkill("biology",true);




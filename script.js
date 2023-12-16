const container = document.querySelector('.container');
const question = document.querySelector('.question');
const choice = document.querySelector('.chocie');
const nextBtn = document.querySelector('.nextBtn');



// array that stores questions, choices, and answers
const quiz = [
    {
        question: "what type of galaxy is the largest ?",
        choices: ["Circle", "Elliptical", "Spiral", "Irregular"],
        answer: "Elliptical"
    },
    {
        question: "what is the biggest galaxy in the universe ?",
        choices: ["Hercules A", "Ic-1101", "A2261-BCG", "ESO 306-17"],
        answer: "Ic-1101"
    },
    {
        question: "what is the biggest star in the universe ?",
        choices: ["Betelguese", "R136a1", "UY Scuti", "Pistol Star"],
        answer: "UY Scuti"
    },
    {
        question: "what is the darkest planet in the universe ?",
        choices: ["TrES-4b", "GSC 03549-02811", "Kepler-186f", "TrES-2b"],
        answer: "TrES-2b"
    }
];



const showQuestions = () =>{
    console.log("Question");
}
nextBtn.addEventListener('click', ()=>{
    showQuestions();
});

// Model

const skills = [
    { id: 1, skill: 'HTML', learned: true },
    { id: 2, skill: 'CSS', learned: true },
    { id: 3, skill: 'JavaScript', learned: true },
    { id: 4, skill: 'Version Control (e.g., Git)', learned: true },
    { id: 5, skill: 'Command Line', learned: true },
    { id: 6, skill: 'Text Editors (e.g., VS Code)', learned: true },
    { id: 7, skill: 'Basic Algorithms and Data Structures', learned: true },
    { id: 8, skill: 'Responsive Web Design', learned: true },
    { id: 9, skill: 'Front-End Framework (e.g., React)', learned: false },
    { id: 10, skill: 'Back-End Development', learned: false },
    { id: 11, skill: 'Databases (e.g., SQL)', learned: false },
    { id: 12, skill: 'Server-Side Framework (e.g., Node.js)', learned: false },
    { id: 13, skill: 'APIs and RESTful Services', learned: false },
    { id: 14, skill: 'Authentication and Authorization', learned: false },
    { id: 15, skill: 'State Management (e.g., Redux)', learned: false },
    { id: 16, skill: 'Test-Driven Development (TDD)', learned: false },
    { id: 17, skill: 'Deployment and Hosting', learned: false },
    { id: 18, skill: 'Containerization (e.g., Docker)', learned: false },
    { id: 19, skill: 'Continuous Integration/Continuous Deployment (CI/CD)', learned: false },
    { id: 20, skill: 'DevOps and Infrastructure as Code', learned: false },
];

module.exports = {
    getAll,
    getOne,
    addSkill, 
    deleteSkill
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id)
    return skills.find((skill) => skill.id === id)
}

function addSkill(skill) {
    skill.id = Date.now() % 1000000
    skill.learned = false
    skills.push(skill)
}

function deleteSkill(id) {
    id = parseInt(id)
    const skillidx = skills.findIndex((skill) => skill.id === id)
    skills.splice(skillidx, 1)
}
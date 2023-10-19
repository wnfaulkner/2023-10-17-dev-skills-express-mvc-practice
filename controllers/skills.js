//controllers/skills.js

const Skill = require('../models/skill');

module.exports = {index, show, newSkill, addSkill, deleteSkill}

function index(req, res) {
    res.render('skills/index', {skills: Skill.getAll()})
}

function show(req, res) {
    res.render(
        'skills/show', 
        {skill: Skill.getOne(req.params.id)}
    )
}

function newSkill(req, res) {
    res.render('skills/new', {
      title: 'New Skill'
    })
}

function addSkill(req, res) {
    Skill.addSkill(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteSkill(req.params.id)
    res.redirect('/skills')
}
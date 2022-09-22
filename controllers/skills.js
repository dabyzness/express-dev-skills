import { DevSkill } from "../models/skill.js";

function index(req, res) {
  DevSkill.find({})
    .then((skills) => {
      res.render("skills/index", { skills });
      console.log(skills);
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/");
    });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  const { skillName } = req.body;
  const learned = !!req.body.learned;
  const projectArr = req.body.projects.split(",");
  const projects = projectArr.map((project) => project.trim());

  DevSkill.create({ skillName, learned, projects })
    .then((skill) => {
      console.log(skill);
      res.redirect("/skills");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/skills");
    });
}

function show(req, res) {
  DevSkill.findById(req.params.id)
    .then((skill) => {
      res.render("skills/show", { skill });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/skills");
    });
}

export { index, newSkill as new, create, show };

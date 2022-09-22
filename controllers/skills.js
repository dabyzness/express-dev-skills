import { DevSkill } from "../models/skill.js";

function index(req, res) {
  DevSkill.find({})
    .then((skills) => {
      res.render("skills/index", { skills });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/");
    });
}

export { index };

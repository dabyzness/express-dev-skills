import { Router } from "express";
import * as SkillsCtrl from "../controllers/skills.js";

const router = Router();

router.get("/", SkillsCtrl.index);

router.get("/new", SkillsCtrl.new);

router.get("/:id", SkillsCtrl.show);

router.post("/", SkillsCtrl.create);

export { router };

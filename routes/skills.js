import { Router } from "express";
import * as SkillsCtrl from "../controllers/skills.js";

const router = Router();

router.get("/", SkillsCtrl.index);

export { router };

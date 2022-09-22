import mongoose from "mongoose";

const Schema = mongoose.Schema;

const devSkillSchema = new Schema({
  skillName: String,
  learned: Boolean,
  projectsCompleted: Array,
});

const DevSkill = mongoose.model("DevSkill", devSkillSchema);

export { DevSkill };

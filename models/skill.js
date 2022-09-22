import mongoose from "mongoose";

const Schema = mongoose.Schema;

const devSkillSchema = new Schema({
  skillName: String,
  learned: Boolean,
  projects: Array,
});

const DevSkill = mongoose.model("DevSkill", devSkillSchema);

export { DevSkill };

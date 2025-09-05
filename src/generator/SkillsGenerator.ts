import type { Labels, Language, Skill } from "../../packages/json_cv_schema/src/type/Type.js";

export default class SkillsGenerator {

    public generate(skills: Skill[], labels: Labels): string {
        if (skills.length == 0) {
            return '';
        }
        return `
            <div class="container skill-container">
                <section id="skills">
                    <h3>${labels.techSkill}</h3>
                    ${skills.map(skill => this.generateSkill(skill)).join('')}
                </section>
            </div>`;
    }

    private generateSkill(skill: Skill): string {
        return `
            <section class="competence-line">
                <h6>${skill.name} :</h6> <p>${skill.keywords.join(', ')}</p>
            </section>`;
    }
}

import type { Labels, Language } from '../../packages/json_cv_schema/src/type/Type.js';

export default class LanguagesGenerator {

    public generate(languages: Language[], labels: Labels): string {
        if (languages.length == 0) {
            return '';
        }
        return `
        <div class="container languages-container">
            <h3 class="bold">${labels.language}</h3>: ${languages.map(lang => this.generateLanguage(lang)).join(',')}
        </div>`;
    }

    private generateLanguage(language: Language): string {
        return `<div class="subWorkInfo"><h6>${language.language}</h6> (${this.generateFluency(language)})</div>`;
    }

    private generateFluency(language: Language): string {
        if (language.fluency) {
            return `<em>${language.fluency}</em>`;
        }
        return '';
    }
}
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import SkillGenerator from '../../src/generator/SkillsGenerator.js';

describe('SkillsGenerator', () => {
    const skillGenerator = new SkillGenerator();
    it('generate minimal skills', () => {
        const header = skillGenerator.generate([], {
            works: 'works',
            planguages: 'planguages',
            team: 'team',
            tools: 'tools',
            environment: 'environment',
            methods: 'methods',
            worksSkill: 'worksSkill',
            diploma: 'diploma',
            language: 'language',
            interests: 'interests',
            techSkill: 'techSkill',
            profile: 'profile'
        });
        assert.equal(header, ``);
    });

    it('generate full skills', () => {
        const header = skillGenerator.generate([{
            keywords: ['keywords'],
            name: 'name'
        }], {
            works: 'works',
            planguages: 'planguages',
            team: 'team',
            tools: 'tools',
            environment: 'environment',
            methods: 'methods',
            worksSkill: 'worksSkill',
            diploma: 'diploma',
            language: 'language',
            interests: 'interests',
            techSkill: 'techSkill',
            profile: 'profile'
        });
        assert.equal(header, `
            <div class="container skill-container">
                <section id="skills">
                    <h3>techSkill</h3>
                    
            <section class="competence-line">
                <h6>name :</h6> <p>keywords</p>
            </section>
                </section>
            </div>`);
    });
});

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import WorksGenerator from '../../src/generator/WorksGenerator.js';

describe('WorkGenerator', () => {
    describe('in english', () => {
        const worksGenerator = new WorksGenerator();
        it('generate minimal work', () => {
            const header = worksGenerator.generate("en", [], {
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

        it('generate one minimal work', () => {
            const header = worksGenerator.generate("en", [{
                name: 'Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
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
            assert.equal(header, `<section id="work">
                    <h3>works</h3>
                    <div class="stack">
                        <article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article>
                    </div>
                </section>`);
        });

        it('generate two work from two company', () => {
            const header = worksGenerator.generate("en", [{
                name: 'First Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
            }, {
                name: 'Second Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
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
            assert.equal(header, `<section id="work">
                    <h3>works</h3>
                    <div class="stack">
                        <article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - First Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article><article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - Second Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article>
                    </div>
                </section>`);
        });

        it('generate two work from one company', () => {
            const header = worksGenerator.generate("en", [{
                name: 'First Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
            }, {
                name: 'First Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
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
            assert.equal(header, `<section id="work">
                    <h3>works</h3>
                    <div class="stack">
                        <article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - First Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div><div class="job">
                    <div>
                        <h5>My position in the company - First Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article>
                    </div>
                </section>`);
        });
    });

    describe('in french', () => {
        const worksGenerator = new WorksGenerator();
        it('generate minimal work', () => {
            const header = worksGenerator.generate("fr", [], {
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

        it('generate one minimal work', () => {
            const header = worksGenerator.generate("fr", [{
                name: 'Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
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
                profile: 'profil'
            });
            assert.equal(header, `<section id="work">
                    <h3>works</h3>
                    <div class="stack">
                        <article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article>
                    </div>
                </section>`);
        });

        it('generate two work from two company', () => {
            const header = worksGenerator.generate("fr", [{
                name: 'First Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
            }, {
                name: 'Second Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
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
            assert.equal(header, `<section id="work">
                    <h3>works</h3>
                    <div class="stack">
                        <article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - First Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article><article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - Second Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article>
                    </div>
                </section>`);
        });

        it('generate two work from one company', () => {
            const header = worksGenerator.generate("fr", [{
                name: 'First Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
            }, {
                name: 'First Company Name',
                description: 'Description of the company',
                position: 'My position in the company',
                team: {
                    back: 4,
                    front: 3,
                    fullStack: 0,
                    description: 'Agile scrum'
                },
                url: 'https://CompanyUrl/',
                startDate: '2021',
                endDate: '24 March 2025',
                summary: 'Resume of the current job',
                highlights: [
                    {
                        subject: 'first subject',
                        details: [
                            'first detail',
                            'second detail'
                        ]
                    },
                    {
                        subject: 'second subject'
                    }
                ],
                planguages: [
                    'planguages1',
                    'planguages2'
                ],
                env: [
                    'env1',
                    'env2'
                ],
                tools: [
                    'tools1',
                    'tools2'
                ],
                method: [
                    'method1',
                    'method2'
                ]
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
            assert.equal(header, `<section id="work">
                    <h3>works</h3>
                    <div class="stack">
                        <article>
                    <div class="timeline">
                    <div class="job">
                    <div>
                        <h5>My position in the company - First Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div><div class="job">
                    <div>
                        <h5>My position in the company - First Company Name</h5>
                        <div class="workmeta">
                    <div>
                        <time-duration>2021 – <time datetime="24 March 2025">2025</time></time-duration> | 
                        team Agile scrum (4 back, 3 front)
                    </div>
                </div>
                    </div>
                    <p>Resume of the current job</p>
                    <div class="workInfo">
                        <div class="highlights">
                    <ul>
                        
        <li><p>first subject</p></li>
        <li><p>first detail</p></li><li><p>second detail</p></li>
        <li><p>second subject</p></li>
        
                    </ul>
                </div>
                        <div class="detail">
                    
            <div class="keyWord minimal flex-container">
                    <b>planguages</b>: planguages1, planguages2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>tools</b>: tools1, tools2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>environment</b>: env1, env2
                </div>
            <div class="keyWord minimal flex-container">
                    <b>methods</b>: method1, method2
                </div>
                </div>
                    </div>
                </div>
                    </div>
                </article>
                    </div>
                </section>`);
        });
    });
});


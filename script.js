// ============================================================
// Publications Data
// ============================================================
const publications = [
    // ---- Journal Papers ----
    {
        type: 'journal', year: 2026,
        authors: 'Jin-Tai Yan and <strong>Chia-Heng Yen</strong>',
        title: 'Layer-Constrained GNR Area Routing with CNT-Via Insertion for Via Minimization',
        venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), vol. 45, no. 4, pp. 1677–1690, Apr. 2026.',
        doi: 'https://doi.org/10.1109/TCAD.2025.3604646',
        topics: ['physical-design']
    },
    {
        type: 'journal', year: 2026,
        authors: 'Yi Ting Li, <strong>Chia-Heng Yen</strong>, Shu-Wen Li, Po-Yang Ke, Shuo-Wen Chang, Ying-Hua Chu, Mango Chia-Tso Chao, and Kai-Chiang Wu',
        title: 'An Improved Wafer-View GDBN Method Using MetaFormer Variant',
        venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2026.',
        doi: 'https://doi.org/10.1109/TCAD.2026.3656320',
        topics: ['ic-testing']
    },
    {
        type: 'journal', year: 2026,
        authors: 'Jin-Tai Yan and <strong>Chia-Heng Yen</strong>',
        title: 'Layer-Constrained Bottleneck Channel Routing for Area Minimization in VLSI Designs',
        venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2026.',
        doi: 'https://doi.org/10.1109/TCAD.2026.3684168',
        topics: ['physical-design']
    },
    {
        type: 'journal', year: 2024,
        authors: 'I-Cheng Lee, Yung-Ping Tsai, Yen-Cheng Lin, Ting-Chun Chen, <strong>Chia-Heng Yen</strong>, Nai-Chi Chiu, Hsuen-En Hwang, Chien-An Liu, Jia-Guan Huang, Rheun-Chuan Lee, Yee Chao, Shinn-Ying Ho, and Yi-Hsiang Huang',
        title: 'A Hierarchical Fusion Strategy of Deep Learning Networks for Detection and Segmentation of Hepatocellular Carcinoma from Computed Tomography Images',
        venue: 'Cancer Imaging, vol. 24, no. 1, Art. no. 43, Mar. 2024.',
        doi: 'https://doi.org/10.1186/s40644-024-00686-8',
        topics: ['biomedical']
    },
    {
        type: 'journal', year: 2024,
        authors: '<strong>Chia-Heng Yen</strong> and Jin-Tai Yan',
        title: 'Design and Analysis of Sum-Prediction Adder',
        venue: 'Integration - the VLSI Journal, vol. 96, Art. no. 102139, May 2024.',
        doi: 'https://doi.org/10.1016/j.vlsi.2024.102139',
        topics: ['circuit-design']
    },
    {
        type: 'journal', year: 2024,
        authors: '<strong>Chia-Heng Yen</strong>, Ting-Rui Wang, Ching-Min Liu, Cheng-Hao Yang, Chun-Teng Chen, Ying-Yen Chen, Jih-Nung Lee, Shu-Yi Kao, Kai-Chiang Wu, and Mango Chia-Tso Chao',
        title: 'Identifying Good-Dice-in-Bad-Neighborhoods Using Artificial Neural Networks',
        venue: 'IEEE Transactions on Semiconductor Manufacturing (TSM), vol. 37, no. 3, pp. 280–292, Aug. 2024.',
        doi: 'https://doi.org/10.1109/TSM.2024.3406395',
        topics: ['ic-testing']
    },
    {
        type: 'journal', year: 2023,
        authors: 'Tzu-Ting Huang, Yi-Chen Lin, <strong>Chia-Heng Yen</strong>, Jui Lan, Chiun-Chieh Yu, Wei-Che Lin, Yueh-Shng Chen, Cheng-Kang Wang, Eng-Yen Huang, and Shinn-Ying Ho',
        title: 'Prediction of Extranodal Extension in Head and Neck Squamous Cell Carcinoma by CT Images Using an Evolutionary Learning Model',
        venue: 'Cancer Imaging, vol. 23, no. 1, Art. no. 84, Sep. 2023.',
        doi: 'https://doi.org/10.1186/s40644-023-00601-7',
        topics: ['biomedical']
    },
    {
        type: 'journal', year: 2023,
        authors: '<strong>Chia-Heng Yen</strong>, Chun-Teng Chen, Cheng-Yen Wen, Ying-Yen Chen, Jih-Nung Lee, Shu-Yi Kao, Kai-Chiang Wu, and Mango Chia-Tso Chao',
        title: 'CNN-based Stochastic Regression for IDDQ Outlier Identification',
        venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), vol. 42, no. 11, pp. 4282–4295, Nov. 2023.',
        doi: 'https://doi.org/10.1109/TCAD.2023.3253043',
        topics: ['ic-testing']
    },
    {
        type: 'journal', year: 2021,
        authors: 'I-Cheng Lee, Jo-Yu Huang, Ting-Chun Chen, <strong>Chia-Heng Yen</strong>, Nai-Chi Chiu, Hsuen-En Hwang, Jia-Guan Huang, Chien-An Liu, Gar-Yang Chau, Rheun-Chuan Lee, Yi-Ping Hung, Yee Chao, Shinn-Ying Ho, and Yi-Hsiang Huang',
        title: 'Evolutionary Learning Derived Clinical-Radiomic Models for Predicting Early Recurrence of Hepatocellular Carcinoma After Resection',
        venue: 'Liver Cancer, vol. 10, no. 6, pp. 572–582, Sep. 2021.',
        doi: 'https://doi.org/10.1159/000518728',
        topics: ['biomedical']
    },
    // ---- Conference Papers ----
    {
        type: 'conference', year: 2024,
        authors: 'Cheng-Che Lu, Chi-Chih Chang, <strong>Chia-Heng Yen</strong>, Shuo-Wen Chang, Ying-Hua Chu, Kai-Chiang Wu, and Mango Chia-Tso Chao',
        title: 'Transformer and Its Variants for Identifying Good Dice in Bad Neighborhoods',
        venue: 'IEEE VLSI Test Symposium (VTS), pp. 1–7, Apr. 2024.',
        doi: 'https://doi.org/10.1109/VTS60656.2024.10538654',
        topics: ['ic-testing']
    },
    {
        type: 'conference', year: 2024,
        authors: 'Yu-Chen Hsiao, <strong>Chia-Heng Yen</strong>, Bo-Yang Ke, and Kai-Chiang Wu',
        title: 'Synergizing GCN and GAT for Hardware Trojan Detection and Localization',
        venue: 'IEEE/IFIP International Conference on Dependable Systems and Networks - Supplemental Volume (DSN-S), pp. 161–162, Jun. 2024.',
        doi: 'https://doi.org/10.1109/DSN-S60304.2024.00047',
        topics: ['hw-security']
    },
    {
        type: 'conference', year: 2024,
        authors: 'Shu-Wen Li, <strong>Chia-Heng Yen</strong>, Shuo-Wen Chang, Ying-Hua Chu, Kai-Chiang Wu, and Mango Chia-Tso Chao',
        title: 'Wafer-View Defect-Pattern-Prominent GDBN Method Using MetaFormer Variant',
        venue: 'IEEE International Test Conference (ITC), pp. 76–80, Oct. 2024.',
        doi: 'https://doi.org/10.1109/ITC51657.2024.00023',
        topics: ['ic-testing']
    },
    {
        type: 'conference', year: 2023,
        authors: '<strong>Chia-Heng Yen</strong>, Jung-Che Tsai, and Kai-Chiang Wu',
        title: 'Using Path Features for Hardware Trojan Detection Based on Machine Learning Techniques',
        venue: 'International Symposium on Quality Electronic Design (ISQED), pp. 1–8, Apr. 2023.',
        doi: 'https://doi.org/10.1109/ISQED57927.2023.10129300',
        topics: ['hw-security']
    },
    {
        type: 'conference', year: 2023,
        authors: 'Ching-Min Liu, <strong>Chia-Heng Yen</strong>, Shu-Wen Lee, Kai-Chiang Wu, and Mango Chia-Tso Chao',
        title: 'Enhancing Good-Die-in-Bad-Neighborhood Methodology with Wafer-Level Defect Pattern Information',
        venue: 'IEEE International Test Conference (ITC), pp. 357–366, Oct. 2023.',
        doi: 'https://doi.org/10.1109/ITC51656.2023.00053',
        topics: ['ic-testing']
    },
    {
        type: 'conference', year: 2023,
        authors: '<strong>Chia-Heng Yen</strong> and Jin-Tai Yan',
        title: 'Layer-Minimization-Oriented GNR Area Routing',
        venue: 'IEEE International Conference on Electronics, Circuits and Systems (ICECS), pp. 1–4, Dec. 2023.',
        doi: 'https://doi.org/10.1109/ICECS58634.2023.10382834',
        topics: ['physical-design']
    },
    {
        type: 'conference', year: 2021,
        authors: 'Cheng-Hao Yang, <strong>Chia-Heng Yen</strong>, Ting-Rui Wang, Chun-Teng Chen, Mason Chern, Ying-Yen Chen, Jih-Nung Lee, Shu-Yi Kao, Kai-Chiang Wu, and Mango Chia-Tso Chao',
        title: 'Identifying Good-Dice-in-Bad-Neighborhoods Using Artificial Neural Networks',
        venue: 'IEEE VLSI Test Symposium (VTS), pp. 1–6, Apr. 2021.',
        doi: 'https://doi.org/10.1109/VTS50974.2021.9441055',
        topics: ['ic-testing']
    },
    {
        type: 'conference', year: 2020,
        authors: 'Chun-Teng Chen, <strong>Chia-Heng Yen</strong>, Cheng-Hao Yang, Kai-Chiang Wu, Mason Chern, Ying-Yen Chen, Chun-Yi Kuo, Jih-Nung Lee, Shu-Yi Kao, and Mango Chia-Tso Chao',
        title: 'CNN-Based Stochastic Regression for IDDQ Outlier Identification',
        venue: 'IEEE VLSI Test Symposium (VTS), pp. 1–6, Apr. 2020.',
        doi: 'https://doi.org/10.1109/VTS48691.2020.9107570',
        topics: ['ic-testing']
    },
    {
        type: 'conference', year: 2019,
        authors: 'Jin-Tai Yan and <strong>Chia-Heng Yen</strong>',
        title: 'Construction of Delay-Driven GNR Routing Tree',
        venue: 'IEEE International New Circuits and Systems Conference (NEWCAS), pp. 1–4, Jun. 2019.',
        doi: 'https://doi.org/10.1109/NEWCAS44328.2019.8961288',
        topics: ['physical-design']
    },
    {
        type: 'conference', year: 2018,
        authors: 'Jin-Tai Yan and <strong>Chia-Heng Yen</strong>',
        title: 'Feasible Assignment of Micro-Bumps in 3D ICs',
        venue: 'IEEE International New Circuits and Systems Conference (NEWCAS), pp. 296–299, Jun. 2018.',
        doi: 'https://doi.org/10.1109/NEWCAS.2018.8585566',
        topics: ['physical-design']
    },
    {
        type: 'conference', year: 2018,
        authors: 'Tzu-Yun Lo, Pei-Yin Wei, <strong>Chia-Heng Yen</strong>, Jiing-Feng Lirng, Muh-Hwa Yang, Pen-Yuan Chu, and Shinn-Ying Ho',
        title: 'Prediction of Metastasis in Head and Neck Cancer from Computed Tomography Images',
        venue: 'International Conference on Robotics and Artificial Intelligence (ICRAI), pp. 18–23, Nov. 2018.',
        doi: 'https://doi.org/10.1145/3297097.3297108',
        topics: ['biomedical']
    },
    {
        type: 'conference', year: 2016,
        authors: 'Jin-Tai Yan, Meng-Tian Chen, and <strong>Chia-Heng Yen</strong>',
        title: 'Cell-Aware MBFF Utilization for Clock Power Reduction',
        venue: 'IEEE International Conference on Electronics, Circuits and Systems (ICECS), pp. 648–651, Dec. 2016.',
        doi: 'https://doi.org/10.1109/ICECS.2016.7841285',
        topics: ['physical-design']
    },
    {
        type: 'conference', year: 2014,
        authors: 'Jin-Tai Yan, Yu-Jen Tseng, and <strong>Chia-Heng Yen</strong>',
        title: 'Feasible Region Assignment of Routing Nets in Single-Layer Routing',
        venue: 'IEEE International Symposium on Circuits and Systems (ISCAS), pp. 393–396, Jun. 2014.',
        doi: 'https://doi.org/10.1109/ISCAS.2014.6865148',
        topics: ['physical-design']
    },
    {
        type: 'conference', year: 2014,
        authors: 'Jin-Tai Yan, Yu-Jen Tseng, and <strong>Chia-Heng Yen</strong>',
        title: 'Efficient Micro-Bump Assignment for RDL Routing in 3DICs',
        venue: 'IEEE International Conference on Electronics, Circuits and Systems (ICECS), pp. 195–198, Dec. 2014.',
        doi: 'https://doi.org/10.1109/ICECS.2014.7049955',
        topics: ['physical-design']
    }
];

// ── Topic label map (L2 — used in Publications filter & pills) ──
const TOPIC_LABELS = {
    'physical-design': 'Physical Design & Routing',
    'ic-testing':      'IC Testing & Manufacturing',
    'hw-security':     'Hardware Security',
    'biomedical':      'Biomedical AI',
    'circuit-design':  'Arithmetic Circuit Design'
};

// ── L1 parent map (L2 key → L1 label) ──
const TOPIC_PARENT = {
    'physical-design': 'Electronic Design Automation (EDA)',
    'ic-testing':      'Electronic Design Automation (EDA)',
    'hw-security':     'Hardware & AI Security',
    'biomedical':      'Biomedical AI',
    'circuit-design':  'AI Computing & Hardware Design'
};

// ── Active filter state ──
let activePubFilter = 'all';

// ============================================================
// RENDER: Publications page
// ============================================================
function renderPublicationsPage() {
    const pubSection = document.getElementById('publications');
    if (!pubSection) return;

    const journals     = publications.filter(p => p.type === 'journal');
    const conferences  = publications.filter(p => p.type === 'conference');
    const totalJ = journals.length;
    const totalC = conferences.length;

    // Filter bar topics (only those actually used)
    const usedTopics = [...new Set(publications.flatMap(p => p.topics))];

    let filterHtml = `<div class="pub-filter-bar">
        <label>Filter:</label>
        <button class="pub-filter-btn active" data-filter="all" onclick="setPubFilter(this,'all')">All (${publications.length})</button>`;

    usedTopics.forEach(t => {
        const count = publications.filter(p => p.topics.includes(t)).length;
        filterHtml += `<button class="pub-filter-btn" data-filter="${t}" onclick="setPubFilter(this,'${t}')">${TOPIC_LABELS[t] || t} (${count})</button>`;
    });

    filterHtml += `</div>`;

    pubSection.innerHTML = '<h2>Publications</h2>' + filterHtml +
        `<div id="pub-journal-section">${renderPubGroup('Journal Papers', journals, totalJ)}</div>` +
        `<div id="pub-conference-section">${renderPubGroup('Conference Papers', conferences, totalC)}</div>`;
}

function setPubFilter(btn, topic) {
    activePubFilter = topic;

    // Update button states
    document.querySelectorAll('.pub-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide entries
    document.querySelectorAll('.publication-entry').forEach(entry => {
        const topics = entry.dataset.topics ? entry.dataset.topics.split(',') : [];
        const match = topic === 'all' || topics.includes(topic);
        entry.style.display = match ? '' : 'none';
    });

    // Show/hide year groups if all empty
    document.querySelectorAll('.publication-year-group').forEach(group => {
        const visible = [...group.querySelectorAll('.publication-entry')].some(e => e.style.display !== 'none');
        group.style.display = visible ? '' : 'none';
    });

    // Show/hide section headers if all empty
    ['pub-journal-section', 'pub-conference-section'].forEach(id => {
        const sec = document.getElementById(id);
        if (!sec) return;
        const visible = [...sec.querySelectorAll('.publication-entry')].some(e => e.style.display !== 'none');
        sec.style.display = visible ? '' : 'none';

        // Update badge count to reflect visible entries
        const badge = sec.querySelector('.pub-count-badge');
        if (badge) {
            const count = [...sec.querySelectorAll('.publication-entry')].filter(e => e.style.display !== 'none').length;
            badge.textContent = count;
        }
    });
}

function renderPubGroup(title, list, total) {
    const years = [...new Set(list.map(p => p.year))].sort((a, b) => b - a);
    let html = `<div class="publications-section">
        <h3>${title} <span class="pub-count-badge">${total}</span></h3>`;

    years.forEach(year => {
        html += `<div class="publication-year-group"><h4>${year}</h4>`;
        list.filter(p => p.year === year).forEach(p => { html += renderPubEntry(p); });
        html += `</div>`;
    });

    html += `</div>`;
    return html;
}

function renderPubEntry(p) {
    const doiHtml = p.doi
        ? `<a href="${p.doi}" target="_blank" rel="noopener" class="doi-link">🔗 ${p.doi}</a>`
        : `<span class="doi-link" style="color:#aaa;font-style:italic;">DOI pending</span>`;

    const topicsAttr = p.topics.join(',');

    // Topic pills
    let pillsHtml = '';
    if (p.topics && p.topics.length) {
        pillsHtml = `<div class="pub-topic-tags">` +
            p.topics.map(t => `<span class="pub-topic-pill pill-${t}">${TOPIC_LABELS[t] || t}</span>`).join('') +
            `</div>`;
    }

    return `<div class="publication-entry" data-topics="${topicsAttr}">
        <div class="publication-authors">${p.authors}</div>
        <div class="publication-title">"${p.title},"</div>
        <div class="publication-venue">${p.venue}</div>
        ${pillsHtml}
        ${doiHtml}
    </div>`;
}

// ============================================================
// RENDER: Research page inline publications
// ============================================================
function renderResearchPubs() {
    const shownTitles = new Set();

    document.querySelectorAll('[data-pub-topic]').forEach(container => {
        const topic = container.dataset.pubTopic;
        const limit = parseInt(container.dataset.pubLimit || '2');
        const topicPubs = publications
            .filter(p => p.topics.includes(topic) && !shownTitles.has(p.title))
            .sort((a, b) => b.year - a.year);

        topicPubs.forEach(p => shownTitles.add(p.title));

        const shown  = topicPubs.slice(0, limit);
        const hidden = topicPubs.slice(limit);

        let html = '<h4>Related Publications</h4>';
        shown.forEach(p => {
            html += `<div class="publication-item">
                <span class="publication-year">${p.year}</span>
                <span>${p.authors}, "${p.title}," <em>${p.venue}</em></span>
            </div>`;
        });

        if (hidden.length > 0) {
            hidden.forEach(p => {
                html += `<div class="publication-item hidden-item">
                    <span class="publication-year">${p.year}</span>
                    <span>${p.authors}, "${p.title}," <em>${p.venue}</em></span>
                </div>`;
            });
            html += `<button class="show-more-btn" onclick="togglePublications(this)">Show More</button>`;
        }

        container.innerHTML = html;
    });
}

// ============================================================
// Lab Works filter
// ============================================================
function setLwFilter(btn, type) {
    document.querySelectorAll('.lw-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.lw-card').forEach(card => {
        const match = type === 'all' || card.dataset.lwType === type;
        card.style.display = match ? '' : 'none';
    });
}

// ── Debounced resize handler ──
let _resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(function () {
        const nav = document.querySelector('.nav');
        if (nav) document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');
    }, 100);
}, { passive: true });
window.dispatchEvent(new Event('resize'));

// ── Animated counter for stats ──
function animateCounter(el, target, duration) {
    const start = performance.now();
    const startVal = 0;
    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(startVal + (target - startVal) * eased);
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

function updateDynamicStats() {
    // Auto-count publications
    const pubStatEl = document.getElementById('stat-pubs');
    if (pubStatEl) {
        pubStatEl.textContent = publications.length;
    }

    // Auto-count lab members:
    // Count .member-card elements that are NOT inside .alumni-section
    // and NOT inside a cohort-label containing "Incoming"
    let memberCount = 0;
    document.querySelectorAll('.member-card').forEach(card => {
        // Skip if inside alumni section
        if (card.closest('.alumni-section')) return;
        // Skip if inside an "Incoming" cohort group
        const cohortGroup = card.closest('.cohort-group');
        if (cohortGroup) {
            const label = cohortGroup.querySelector('.cohort-label');
            if (label && label.textContent.includes('Incoming')) return;
        }
        memberCount++;
    });

    const memberStatEl = document.getElementById('stat-members');
    if (memberStatEl) {
        memberStatEl.textContent = memberCount;
    }
}

function initStats() {
    updateDynamicStats();

    const statsBar = document.querySelector('.lab-stats-bar');
    if (!statsBar) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsBar.querySelectorAll('.stat-number').forEach(el => {
                    const val = parseInt(el.textContent, 10);
                    if (!isNaN(val)) animateCounter(el, val, 900);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsBar);
}

// ============================================================
// Page switching
// ============================================================
const PAGE_TITLES = {
    home:          'IDA Lab: Home',
    announcements: 'IDA Lab: Announcements',
    pi:            'IDA Lab: Principal Investigator',
    research:      'IDA Lab: Research',
    publications:  'IDA Lab: Publications',
    projects:      'IDA Lab: Projects',
    teaching:      'IDA Lab: Teaching',
    members:       'IDA Lab: Lab Members',
    labworks:      'IDA Lab: Lab Works',
};

function switchPage(pageId, pushState = true) {
    document.querySelectorAll('.page-section').forEach(page => page.classList.remove('active'));

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Re-trigger scroll reveal for newly visible elements
        setTimeout(() => {
            activePage.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 45);
            });
        }, 50);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + pageId) link.classList.add('active');
    });

    // Update browser tab title
    document.title = PAGE_TITLES[pageId] || 'IDA Lab';

    if (pushState) history.pushState({ pageId }, '', '#' + pageId);
}

// Back/forward button support
window.addEventListener('popstate', function (e) {
    const pageId = (e.state && e.state.pageId)
        || window.location.hash.substring(1)
        || 'home';
    switchPage(pageId, false);
});

// ============================================================
// DOM Ready
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    try { renderPublicationsPage(); } catch (e) { console.error('renderPublicationsPage:', e); }
    try { renderResearchPubs(); }     catch (e) { console.error('renderResearchPubs:', e); }
    try { initStats(); }              catch (e) { console.error('initStats:', e); }

    // Auto-update "Last Updated" to today's date
    const lastUpdateEl = document.querySelector('.last-update');
    if (lastUpdateEl) {
        const now = new Date();
        const formatted = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        lastUpdateEl.textContent = 'Last Updated: ' + formatted;
    }

    // Nav link binding
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            switchPage(pageId);
            if (window.innerWidth <= 768) {
                const navMenu = document.getElementById('nav-links');
                if (navMenu && navMenu.classList.contains('active')) {
                    document.getElementById('menu-toggle').click();
                }
            }
        });
    });

    // Initial page from hash — use replaceState so back button can return here
    const pageId = window.location.hash.substring(1) || 'home';
    history.replaceState({ pageId }, '', '#' + pageId);
    switchPage(pageId, false);

    // Scroll reveal via IntersectionObserver
    const REVEAL_SELECTOR =
        '.education-item, .experience-item, .publication-entry, ' +
        '.member-card, .course-card, .highlight-row, .research-category, ' +
        '.alumni-ms-card, .alumni-project-card, .project-entry, ' +
        '.announcement, .journal-item, .timeline-item, .service-role-item, ' +
        '.lab-stats-bar';

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const delay = Math.min(i * 45, 300);
                setTimeout(() => entry.target.classList.add('visible'), delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

    function attachReveal() {
        document.querySelectorAll(REVEAL_SELECTOR).forEach(el => {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
                revealObserver.observe(el);
            }
        });
    }

    attachReveal();

    // Re-observe after dynamic rendering
    setTimeout(attachReveal, 300);

    try { setupMobileMenu(); } catch (e) { console.error('setupMobileMenu:', e); }
});

// ============================================================
// Toggle helpers
// ============================================================
function toggleEducation(button) {
    const items = button.closest('.education-block').querySelectorAll('.education-item.hidden-item');
    toggleItems(items, button);
}

function toggleExperience(button) {
    const items = button.closest('.work-experience-block').querySelectorAll('.experience-item.hidden-item');
    toggleItems(items, button);
}

function toggleAnnouncements(button) {
    const items = document.querySelectorAll('#announcements .announcement.hidden-item');
    toggleItems(items, button);
}

function togglePublications(button) {
    const items = button.parentElement.querySelectorAll('.publication-item.hidden-item');
    toggleItems(items, button);
}

function toggleCourseGroup(id, button) {
    const group = document.getElementById(id);
    const isShowing = group.classList.contains('show');
    group.classList.toggle('show');
    button.textContent = isShowing ? 'Show More Courses' : 'Show Less Courses';
}

function showEl(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('show');
}

function toggleCourseCard(card) {
    card.classList.toggle('open');
}

function toggleAlumni(button) {
    const alumni = document.querySelectorAll('.alumni-section');
    toggleItems(alumni, button, 'Show Alumni', 'Hide Alumni');
}

function toggleItems(items, button, showText = 'Show More', hideText = 'Show Less') {
    if (!items.length) return;
    const isShowing = items[0].classList.contains('show');
    items.forEach(item => item.classList.toggle('show'));
    if (button) button.textContent = isShowing ? showText : hideText;
}

// ============================================================
// Research category accordion
// ============================================================
function toggleResearchCategory(header) {
    const body   = header.nextElementSibling;
    const isOpen = header.classList.contains('open');
    header.classList.toggle('open', !isOpen);
    body.classList.toggle('open', !isOpen);
}

// ============================================================
// Project details toggle
// ============================================================
function toggleProjectDetails(btn) {
    const details = btn.closest('.project-entry').querySelector('.project-details');
    const isOpen  = details.classList.contains('show');
    details.classList.toggle('show', !isOpen);
    btn.textContent = isOpen ? 'Show Details' : 'Hide Details';
}

// ============================================================
// Mobile hamburger menu
// ============================================================
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks   = document.getElementById('nav-links');

    navLinks.style.display = window.innerWidth <= 768 ? 'none' : 'flex';

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
    }

    menuToggle.addEventListener('click', toggleMenu);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        } else if (!navLinks.classList.contains('active')) {
            navLinks.style.display = 'none';
        }
    }, { passive: true });
}


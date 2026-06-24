const THEME_KEY = 'ShodhPath-theme';
const categories = [
    {
        title: 'Study Materials',
        resources: [
            {
                title: 'CEC SWAYAM MOOCs',
                description: 'Online courses and resources curated by the University Grants Commission.',
                url: 'https://cec.nic.in/cec/swayam-moocs',
                image: 'assets/h1.png',
                alt: 'CEC SWAYAM MOOCs portal preview'
            },
            {
                title: 'eGyanKosh',
                description: 'National digital repository of study materials by IGNOU.',
                url: 'https://egyankosh.ac.in',
                image: 'assets/h2.jpg',
                alt: 'eGyanKosh digital repository preview'
            },
            {
                title: 'Indian Council of Historical Research',
                description: 'ICHR official website for grants, projects and publications.',
                url: 'http://ichr.ac.in/v3/',
                image: 'assets/h3.jpg',
                alt: 'Indian Council of Historical Research homepage'
            }
        ]
    },
    {
        title: 'SWAYAM',
        resources: [
            {
                title: 'SWAYAM',
                description: 'Government of India platform for free online courses.',
                url: 'https://swayam.gov.in',
                image: 'assets/swayam -1.png',
                alt: 'SWAYAM official portal preview'
            },
            {
                title: 'SWAYAM PRABHA',
                description: 'Free DTH educational channels for distance learners.',
                url: 'https://swayamprabha.gov.in',
                image: 'assets/swayam -2.jpeg',
                alt: 'SWAYAM PRABHA television learning portal'
            },
            {
                title: 'SWAYAM PLUS',
                description: 'SWAYAM MOOCs and certificate courses by IGNOU.',
                url: 'http://swayam-plus.swayam2.ac.in',
                image: 'assets/swayam -3.png',
                alt: 'SWAYAM PLUS course portal'
            }
        ]
    },
    {
        title: 'ePG Pathshala',
        resources: [
            {
                title: 'ePG PATHSHALA',
                description: 'Higher education learning materials from INFLIBNET.',
                url: 'https://epgp.inflibnet.ac.in/Home/Download',
                image: 'assets/epg 0.png',
                alt: 'ePG Pathshala download portal preview'
            },
            {
                title: 'eAdhyayan',
                description: 'Digital course resources for university learners.',
                url: 'https://ebooks.inflibnet.ac.in/eadhyayan/',
                image: 'assets/epg 2.png',
                alt: 'eAdhyayan digital course library preview'
            },
            {
                title: 'NPTEL',
                description: 'Online courses from Indian Institutes of Technology.',
                url: 'https://nptel.ac.in',
                image: 'assets/epg 3.png',
                alt: 'NPTEL course portal preview'
            },
            {
                title: 'NCERT',
                description: 'National Council of Educational Research and Training portal.',
                url: 'https://ncert.nic.in',
                image: 'assets/epg 4.png',
                alt: 'NCERT educational resources page preview'
            }
        ]
    },
    {
        title: 'Research & Journals',
        resources: [
            {
                title: 'ASI',
                description: 'Archaeological Survey of India research and publications.',
                url: 'https://asi.nic.in',
                image: 'assets/r&j -0.jpg',
                alt: 'ASI archaeological research portal'
            },
            {
                title: 'PSA',
                description: 'Publications of the Social Sciences subscription portal.',
                url: 'https://www.psa.gov.in/oneNationOneSubscription',
                image: 'assets/r&j -1.png',
                alt: 'PSA one nation one subscription portal preview'
            },
            {
                title: 'NDL',
                description: 'National Digital Library of India for academic resources.',
                url: 'https://ndl.iitkgp.ac.in/ndl_he',
                image: 'assets/r&j -2.jpg',
                alt: 'NDL national digital library homepage'
            },
            {
                title: 'National Archives of India',
                description: 'Official archives portal for historical documents.',
                url: 'https://indianculture.gov.in/MoCorganization/national-archives-india',
                image: 'assets/r&j -3.jpg',
                alt: 'National Archives of India website preview'
            },
            {
                title: 'Shodhganga',
                description: 'Indian theses repository for research scholars.',
                url: 'https://shodhganga.inflibnet.ac.in',
                image: 'assets/r&j -4.jpg',
                alt: 'Shodhganga thesis repository preview'
            },
            {
                title: 'ESS',
                description: 'Electronic Theses and Dissertations portal by INFLIBNET.',
                url: 'https://ess.inflibnet.ac.in',
                image: 'assets/r&j -5.jpg',
                alt: 'ESS electronic theses portal preview'
            },
            {
                title: 'Shodh Shuddhi',
                description: 'Plagiarism detection software for Indian research.',
                url: 'https://shodhshuddhi.inflibnet.ac.in/',
                image: 'assets/S_Shuddhi.png',
                alt: 'Shodh Shuddhi plagiarism detection portal'
            },
            {
                title: 'Shodh Chakra',
                description: 'Gateway for research resources and projects.',
                url: 'https://shodhchakra.inflibnet.ac.in/',
                image: 'assets/s_chakra.png',
                alt: 'Shodh Chakra research gateway'
            },
            {
                title: 'IndCat',
                description: 'Indian public library network for catalog search.',
                url: 'https://indcat.inflibnet.ac.in',
                image: 'assets/r&j -6.jpg',
                alt: 'IndCat library network portal preview'
            },
            {
                title: 'IR',
                description: 'Institutional repository portal for academic research.',
                url: 'https://ir.inflibnet.ac.in',
                image: 'assets/r&j -7.jpg',
                alt: 'IR institutional repository portal preview'
            },
            {
                title: 'IRINS',
                description: 'Indian research information network system.',
                url: 'https://irins.org/irins/#',
                image: 'assets/r&j -8.jpg',
                alt: 'IRINS research network portal preview'
            },
            {
                title: 'INFLIBNET',
                description: 'Information and Library Network Centre official website.',
                url: 'https://www.inflibnet.ac.in',
                image: 'assets/r&j -9.jpg',
                alt: 'INFLIBNET official portal preview'
            }
        ]
    },
    {
        title: 'Ministry of Education',
        resources: [
            {
                title: 'PM E-VIDYA',
                description: 'Integrated digital education scheme by the Ministry of Education.',
                url: 'https://www.pmevidya.education.gov.in/index.html',
                image: 'assets/moe -1.jpg',
                alt: 'PM E-VIDYA education scheme portal'
            },
            {
                title: 'AICTE',
                description: 'All India Council for Technical Education official website.',
                url: 'https://www.aicte-india.org/',
                image: 'assets/moe -2.jpg',
                alt: 'AICTE council portal preview'
            },
            {
                title: 'AI-SHE',
                description: 'Higher education portal for academic finance and policy.',
                url: 'https://aishe.gov.in/#whats-new',
                image: 'assets/moe -3.jpg',
                alt: 'AI-SHE portal homepage preview'
            },
            {
                title: 'IKS',
                description: 'Integrated Knowledge System portal for traditional knowledge.',
                url: 'http://iksindia.org/index.php',
                image: 'assets/moe -4.jpg',
                alt: 'IKS knowledge system portal preview'
            }
        ]
    },
    {
        title: 'UGC',
        resources: [
            {
                title: 'UGC Mooc',
                description: 'UGC MOOC platform powered by INFLIBNET and SWAYAM.',
                url: 'https://ugcmoocs.inflibnet.ac.in/',
                image: 'assets/ugc_mooc.png',
                alt: 'UGC MOOC learning portal preview'
            },
            {
                title: 'UGC',
                description: 'University Grants Commission main website.',
                url: 'https://www.ugc.gov.in',
                image: 'assets/UGC -1.png',
                alt: 'UGC official website preview'
            },
            {
                title: 'NTA UGC NET',
                description: 'National Testing Agency portal for UGC NET aspirants.',
                url: 'https://ugcnet.nta.nic.in',
                image: 'assets/UGC -2.jpg',
                alt: 'NTA UGC NET exam portal preview'
            },
            {
                title: 'UGC NET',
                description: 'Archive of previous year question papers for UGC NET.',
                url: 'https://www.ugcnetonline.in/index.php',
                image: 'assets/UGC -3.jpg',
                alt: 'UGC NET exam preparation portal'
            },
            {
                title: 'NTA Model Papers',
                description: 'Mock tests and latest previous year question papers.',
                url: 'https://nta.ac.in/home',
                image: 'assets/UGC -2.jpg',
                alt: 'NTA model papers and test portal preview'
            }
        ]
    },
    {
        title: 'Video Sources',
        resources: [
            {
                title: 'AAJ Ka Itihas',
                description: 'Sansad TV playlist for Indian history documentaries.',
                url: 'https://youtube.com/playlist?list=PLVOgwA_DiGzohWug0G1tM8aOhGzUSQKvH',
                image: 'assets/v -1.jpg',
                alt: 'AAJ Ka Itihas YouTube playlist cover'
            },
            {
                title: 'Bharat Ek Khoj',
                description: 'Prasar Bharti Archives playlist for Indian history.',
                url: 'https://youtube.com/playlist?list=PLqtVCj5iilH4w0Y8KBB4fqBu25T0sGhXG&si=m_K_shUu7NMSmezB',
                image: 'assets/v -2.jpg',
                alt: 'Bharat Ek Khoj documentary playlist cover'
            },
            {
                title: 'The Sculpture of India',
                description: 'Prasar Bharti Archives lecture series on Indian sculpture.',
                url: 'https://youtube.com/playlist?list=PLqtVCj5iilH4UdtnLCYMrjI-zspVpJYQ_&si=9X_nVcT-UzNxh4cC',
                image: 'assets/v -3.jpg',
                alt: 'The Sculpture of India video series cover'
            },
            {
                title: 'Bharadwaj Classes',
                description: 'History lessons from Bharadwaj Classes on YouTube.',
                url: 'https://youtube.com/@bhardwajclassesraman?feature=share',
                image: 'assets/bc.jpg',
                alt: 'Bharadwaj Classes YouTube channel cover'
            },
            {
                title: 'Genda Berunda',
                description: 'Animated history videos from Genda Berunda channel.',
                url: 'https://www.youtube.com/@gandaberunda6267/playlists',
                image: 'assets/gb.jpg',
                alt: 'Genda Berunda animated history playlist preview'
            },
            {
                title: 'EMBACEE-OL (Mukesh Baranwal)',
                description: 'History video lessons by Mukesh Baranwal.',
                url: 'https://www.youtube.com/playlist?list=PLotXwpsOfkPN2wvx9ZjPD_vx8HjbMA8xL',
                image: 'assets/mb.jpg',
                alt: 'EMBACEE-OL Mukesh Baranwal video playlist preview'
            },
            {
                title: 'History Scholar',
                description: 'Dr. Chandrakant’s history lecture series on YouTube.',
                url: 'https://youtube.com/playlist?list=PLYmb88iSWojnFateKodPc28JE4td-3EBk&si=F043hfdylnfG90G5',
                image: 'assets/HS.jpg',
                alt: 'History Scholar Dr Chandrakant playlist cover'
            }
        ]
    }
];

function setTheme(isDark) {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    body.classList.toggle('dark-mode', isDark);
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Activate light mode' : 'Activate dark mode');
    themeToggle.querySelector('.theme-label').textContent = isDark ? 'Light' : 'Dark';
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

function createResourceCard(resource) {
    const link = document.createElement('a');
    link.className = 'resource-card';
    link.href = resource.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Open ${resource.title} in a new tab`);

    const imageWrapper = document.createElement('figure');
    imageWrapper.className = 'card-image';

    const image = document.createElement('img');
    image.src = resource.image;
    image.alt = resource.alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    try { image.fetchPriority = 'low'; } catch (e) {}
    image.sizes = '(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw';
    image.srcset = resource.image;
    imageWrapper.appendChild(image);

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = resource.title;

    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = resource.description;

    content.append(title, description);
    link.append(imageWrapper, content);
    return link;
}

function renderResources() {
    categories.forEach(category => {
        const grid = document.querySelector(`[data-category="${category.title}"]`);
        if (!grid) return;
        grid.innerHTML = '';
        category.resources.forEach(resource => {
            grid.appendChild(createResourceCard(resource));
        });
    });
}

function filterResources(query) {
    const normalized = query.trim().toLowerCase();
    const cards = document.querySelectorAll('.resource-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const titleText = card.querySelector('.card-title').textContent.toLowerCase();
        const descriptionText = card.querySelector('.card-description').textContent.toLowerCase();
        const isVisible = !normalized || titleText.includes(normalized) || descriptionText.includes(normalized);
        card.style.display = isVisible ? 'block' : 'none';
        if (isVisible) visibleCount += 1;
    });

    const noResults = document.getElementById('noResults');
    noResults.style.display = visibleCount ? 'none' : 'block';
}

function bindUI() {
    const menuToggle = document.querySelector('.menu-toggle');
    const topNav = document.querySelector('.top-nav');
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');

    if (menuToggle && topNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = topNav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.classList.toggle('open', isOpen);
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            setTheme(isDark);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', event => filterResources(event.target.value));
    }

    const topButton = document.getElementById('topButton');
    if (topButton) {
        topButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        const toggleTopButton = () => {
            const show = window.scrollY > 250;
            topButton.classList.toggle('visible', show);
        };

        window.addEventListener('scroll', toggleTopButton);
        toggleTopButton();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    setTheme(savedTheme === 'dark');
    renderResources();
    bindUI();
});

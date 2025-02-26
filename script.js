AOS.init({offset:0});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

function changeContent(section) {
    const contentSection = document.getElementById('content-section');
    let content = '';

    switch(section) {
        case 'home':
            content = `
                <div class="main-container">
                    <div class="image" data-aos="zoom-in-right" data-aos-duration="2500">
                        <img src="./main.jpg" alt="">
                    </div>
                    <div class="content">
                        <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">Hey I'm <span>Parthasarathi</span></h1>
                        <div class="typewriter" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">I'm a <span></span></div>
                        <p data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1000">Enthusiastic and dedicated student with a strong passion for artificial intelligence (AI)
technologies. Proficient in Python and Java, with hands-on experience in machine learning and data analysis. Adept at
problem-solving and eager to apply theoretical knowledge to real-world applications. Committed to leveraging AI to develop
innovative solutions and contribute to impactful projects. Seeking opportunities to collaborate on cutting-edge technologies
and gain practical experience in the field of AI.
</p>
                        <div class="social-links" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1200">
                            <a href="https://github.com/sarathibalamurugan" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <!-- Removed the Facebook button -->
                            <a href="https://www.linkedin.com/in/parthasarathi-b-212630269/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <!-- Removed the X (Twitter) button -->
                            <a href="https://leetcode.com" target="_blank"><i class="fa-solid fa-code"></i></a> <!-- Updated LeetCode button to look like others -->
                        </div>
                        <div class="btn" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="1300">
                            <button onclick="window.open('resumefinal.pdf', '_blank')">Download CV</button>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'about':
            content = '<div class="content"><h1>About Me</h1><p>About content goes here...</p></div>';
            break;
        case 'skills':
            content = `
                <div class="content">
                    <h1>Technical Skills</h1>
                    <div class="skills-container">
                        <div class="skill-box">
                            <div class="skill-name">Python</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 90%;">90%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Java</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 80%;">80%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">React.js</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 75%;">75%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Full-Stack development</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 85%;">85%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">LangChain</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 70%;">70%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">HTML / CSS</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 95%;">95%</div>
                            </div>
                        </div>
                        <h1>Other Skills</h1>
                        <div class="skill-box">
                            <div class="skill-name">Teamwork</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 85%;">85%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Time Management</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 80%;">80%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Effective Communication</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 90%;">90%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Critical Thinking</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 85%;">85%</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'experience':
            content = `
                <div class="content">
                    <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">Experience</h1>
                    <h4 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">I completed a 3-month internship at THE YELLOW NETWORKS as a Full-Stack developer and worked on the following projects:</h4><br>
                    <div class="project-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
                        <h2>Project 1: AI Insurance Bot</h2>
                        <ul data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1100">
                            <li>Built an interactive web interface using Streamlit for real-time user interaction.</li>
                            <li>Integrated OpenAI GPT-3.5 to generate natural language responses based on user queries.</li>
                            <li>Utilized ThirdAI NeuralDB for efficient document storage and retrieval from insurance PDFs.</li>
                            <li>Applied NLP techniques (tokenization, stopword removal, lemmatization) using NLTK to preprocess user input and document text for enhanced accuracy.</li>
                            <li>Implemented Retrieval-Augmented Generation (RAG) to provide relevant, contextual answers from policy documents.</li>
                            <li>Key Technologies: Streamlit, OpenAI GPT-3.5, ThirdAI NeuralDB, NLTK, Python</li>
                        </ul>
                    </div>
                    <div class="project-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">
                        <h2>Project 2: Web Scraping and Data Extracting Bot</h2>
                        <ul data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1300">
                            <li>Utilized Selenium with BeautifulSoup to automate web scraping and extract content from multiple web pages.</li>
                            <li>Built a pipeline to scrape, process, and store website content, ensuring the handling of dynamic content using Selenium WebDriver.</li>
                            <li>Employed Natural Language Processing (NLP) techniques through LangChain and Ollama LLM to process and extract structured information (e.g., company descriptions, services, customers, partners) from the scraped content.</li>
                            <li>Automated content storage and retrieval with structured file-saving mechanisms.</li>
                            <li>Used Ollama's Llama2 model for parsing and summarizing large blocks of text to derive useful company insights.</li>
                            <li>Key Technologies: Selenium, BeautifulSoup, LangChain, Ollama LLM, Python, Chrome WebDriver</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
        case 'projects':
            content = `
                <div class="content">
                    <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">Projects</h1>
                    <div class="project-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
                        <h2>AI Insurance Bot</h2>
                        <img src="pimage/chatbot.png" alt="AI Insurance Bot" style="width:20%; height:auto; margin-bottom: 10px;">
                        <button onclick="window.open('https://github.com/sarathibalamurugan/Q-A-Chatbot', '_blank')">Source Code</button>
                    </div>
                    <div class="project-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">
                        <h2>Web Scraping and Data Extracting Bot</h2>
                        <img src="pimage/webscrap.jpg" alt="Web Scraping and Data Extracting Bot" style="width:20%; height:auto; margin-bottom: 10px;">
                        <button onclick="window.open('https://github.com/sarathibalamurugan/WebScrapper', '_blank')">Source Code</button>
                    </div>
                    <div class="project-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">
                        <h2>Balloon Shooter Game (HTML, CSS, JS)</h2>
                        <img src="pimage/balloongame.png" alt="Balloon Shooter Game" style="width:20%; height:auto; margin-bottom: 10px;">
                        <button onclick="window.open('https://github.com/sarathibalamurugan/shooting-aim-trainer-game', '_blank')">Source Code</button>
                    </div>
                </div>
            `;
            break;
        case 'certifications':
            content = `
                <div class="content">
                    <h1>Certifications</h1>
                    <div class="certificates-container">
                        <div class="certificate">
                            <h2>AWS Cloud Practitioner</h2>
                            <img src="certs/AWS_Cloud_Practitioner.jpg" alt="AWS Cloud Practitioner" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>AWS Cloud Foundations</h2>
                            <img src="certs/awscloudfoudations.jpg" alt="AWS Cloud Foundations" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Python developer</h2>
                            <img src="certs/python_developer.jpg" alt="Python developer" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Data Structures and Algorithms</h2>
                            <img src="certs/dsa.jpg" alt="Data Structures and Algorithms" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Java Programming</h2>
                            <img src="certs/java.jpg" alt="Java Programming" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>JavaScript (SoloLearn)</h2>
                            <img src="certs/JavaScript_sololearn.jpg" alt="JavaScript (SoloLearn)" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Prompt Engineer(DeepLearnig.AI)</h2>
                            <img src="certs/promptengineer.png" alt="JavaScript (SoloLearn)" onclick="toggleFullscreen(this)">
                        </div>
                        <!-- Add more certificates as needed -->
                    </div>
                </div>
            `;
            break;
        case 'contact':
            content = `
                <div class="contact-container">
                    <h1>Contact Me</h1>
                    <form action="mailto:sarathigreen4@gmail.com" method="post" enctype="text/plain">
                        <input type="text" name="name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            `;
            break;
        default:
            content = '<div class="content"><h1>Welcome</h1><p>Default content goes here...</p></div>';
    }

    contentSection.innerHTML = content;
}

function toggleFullscreen(img) {
    img.classList.toggle('fullscreen');
}

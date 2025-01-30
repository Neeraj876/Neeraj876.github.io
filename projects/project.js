const Projects = [
    {
        name : "MLOps Solution for Network Security",
        about : "Developed a system to identify and classify malicious URLs, enhancing web application security by enabling efficient detection and classification of harmful links to proactively mitigate potential threats.",
        img : "images/network_architecture.gif",
        gitrepo : "https://github.com/Neeraj876/network-security-system-mlop",
        tech_stack : "AWS | Docker | Airflow | MLFlow | FastAPI | MongoDB | Streamlit | Github Actions",
        tech_stackicons : [
            `<img width="48" height="48" src="https://img.icons8.com/nolan/64/amazon-web-services.png"/>`,
            `<img width="48" height="48" src="https://img.icons8.com/color/48/docker.png"/>`,
            `<img width="43" height="43" src="images/ApacheAirflow.png"/>`,
            `<img width="48" height="48" src="images/FastAPI.png"/>`,
            `<img width="48" height="48" src="images/mlflow.png"/>`,
            `<img width="48" height="48" src="https://img.icons8.com/color/50/000000/mongodb.png"/>`,
            `<img width="48" height="48" src="https://img.icons8.com/color/48/streamlit.png"/>`,
            `<img width="50" height="50" src="https://img.icons8.com/arcade/64/github.png"/>`,
        ],
        // project_link : "https://agoda-clone-website.vercel.app/",
        project_type : "Individual Project"
    },
    {
        name : "Sentiment Analysis of IMDB Dataset Using RNN",
        about : "Built an end-to-end deep learning project With SimpleRNN for Sentiment Analysis, with real-time predictions",
        img : "images/simplernn.png",
        gitrepo : "https://github.com/Neeraj876/ANN-customer-churn-classification",
        // blog : "https://medium.com/@suraj.devere/shop4reebok-clone-eddfa7c32fe7",
        tech_stack : "HTML | CSS | JAVASCRIPT",
        tech_stackicons : [
            `<img width="48" height="48" src="images/TensorFlow.png" />`,
            `<img width="48" height="48" src="https://img.icons8.com/color/48/streamlit.png"/>`,
            `<img width="48" height="48" src="https://img.icons8.com/material-outlined/48/FA5252/keras.png"/>`,
            
        ],
        // project_link : "https://rebookwebsite-clone1.vercel.app/",
        project_type : "Individual Project"
    },
    {
        name : "Machine Predictive Maintenance Classification Using MLOps",
        about : "Developed a system to predict and classify machine failure types, improving operational efficiency by enabling early detection, allowing businesses to proactively manage maintenance and minimize downtime.",
        img : "images/architecture.gif",
        gitrepo : "https://github.com/Neeraj876/machine-predictive-maintenance-mlops",
        // blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="images/zenml.png" style="background-color: #e9e9e9;" />`,
        `<img width="48" height="48" src="https://img.icons8.com/color/48/streamlit.png"/>`,
        `<img width="48" height="48" src="images/mlflow.png"/>`,
        `<img src="https://img.icons8.com/color/48/postgreesql.png"/>`,
        ],
        // project_link : "https://tender-hoover-a53af4.netlify.app/",
        project_type : "Individual Project"
    },
]


let projects__container = document.getElementById("projects--container")

Projects.forEach((pro, index) => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")

    // Add a unique class for the second project card
    if (index === 1) {
        main.classList.add("portfolio-item-zoom");
    }
    
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img class="project-image" src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})


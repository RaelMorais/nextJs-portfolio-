export function MainSkill(){
      const skills = [
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt: ".NET" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", alt: "Tailwind CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", alt: "Vue.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "Azure" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", alt: "AWS" },
    // { src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Power_Automate_Logo.svg", alt: "Power Automate" },
    { src: "https://www.svgrepo.com/show/354202/postman-icon.svg", alt: "Postman" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", alt: "GraphQL" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", alt: "Keras" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django REST" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", alt: "Jenkins" },
    { src: "https://grafana.com/static/assets/img/fav32.png", alt: "Grafana" },
    { src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", alt: "Hugging Face" },
    { src: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png", alt: "FastAPI" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", alt: "Terraform" },
    { src: "https://raw.githubusercontent.com/hwchase17/langchain/master/docs/static/img/langchain.png", alt: "LangChain" },
    { src: "https://azure.microsoft.com/svghandler/bedrock?width=50&height=50", alt: "Azure Bedrock" },
    // { src: "https://bizai.co/images/logo.svg", alt: "BizAI" },
  ];


    return(
      <section className="min-h-screen flex flex-col items-center justify-center gap-15 pt-45">
        <h1 className="text-3xl font-bold text-white">Minhas Stacks</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                w-[140px] h-[140px]
                bg-black/40 border border-transparent
                rounded-lg flex items-center justify-center
                transition-all duration-300
                hover:border-purple-400 hover:scale-105
                cursor-pointer
              "
            >
              <img src={skill.src} alt={skill.alt} className="w-16 h-16" />
            </div>
          ))}
        </div>
      </section>

    );
}
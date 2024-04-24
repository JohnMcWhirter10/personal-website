import images from "@assets/images";

export const projects = [
  {
    title: "This Website!",
    description: [
      "Howdy and welcome to my personal website, a digital landscape of my professional and personal passions! This website serves as both a showcase of my skills, a history of my past, and a glimpse of my future.",
      "Powered by React TypeScript, this website provides a sleek and modern user experience that reflects my desire to learn the latest web development techniques and apply them. Its minimalist design and interface are made possible by Material UI, a library designed by Google to provide easy access to pre-built components. I've also taken this opportunity to integrate a multi-platform view! Try resizing the screen or even access the website from your Phone!",
      "Behind the scenes, webpack open-source module and bundler drives the development process into an easily scalable system. Version control is paramount in maintaining the website's history and changes, and with Git, I'm able to do so while inviting others to collaborate and enhance its content. Please seek the repository at the link provided!",
      "Node Package Manager serves as the backbone of the website's dependencies. From essential packages to custom components, npm ensures that the website remains reliable, scalable, and up-to-date.",
      "Thanks to the free deployment of Github Pages, I proudly host this website. In addition, you'll notice the URL is not the typical Github Pages access link. I was able to purchase a domain and set up my routing using Amazon Web Services Route 53 tool enabling any remote corner of the world to easily engage with my content and explore my professional endeavors.",
    ],
    link: "https://github.com/JohnMcWhirter10/JohnMcWhirter10.github.io",
    imagePath: images.myWebsiteImage,
  },
  {
    title: "UL-SWAP DAQ",
    description: [
      "The Ultra Low Size Weight and Power Data Acquisition Unit is a device I created with 2 other electrical engineering students at Texas A&M University for my Senior Capstone project. My team was fortunate enough to be sponsored by Sandia National Laboraties to provide a solution for collecting, processing and transmitting different signals providing by varying sensors under the harsh environment of rocket flight.",
    ],

    link: "https://github.com/jmcwhirter1608/ULSWAPDAQ",
    imagePath: images.ULSWAPDAQ,
  },
  {
    title: "Python GUI Framework",
    description: [
      "In my internship at Texas Instruments, not only did I collaborate with the High Speed Converter group and other interns, I was also given a solo project to complete the design of a Python GUI Framework. The Framework works like and engine, all someone needs to do is provide my engine with a json formatted file which contains the page number; input, output, text, graph, or image label; optional parameters such as range, dropdown, alpha characters, etc. In addition to creating the Engine, I worked with a Solution Architect to simplify the process of writing the json to work directly with a proprietary verilog package provided to Texas Instruments customers. They are able to use Vivado's built-in configuration settings, export it, run our script to deconstruct the exported configuration and run it through the engine to produce a unique Graphical User Interface. Typically, this GUI would do calculations, display estimated signals, and export a configuration back to use in Vivado with calculated values based on the client's data.",
    ],
    imagePath: images.TexasInstruments,
  },
];

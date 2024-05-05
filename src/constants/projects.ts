import images from "@assets/images";
import { ReactNode } from "react";

export type Project = {
  title: string;
  description: string[];
  link?: string;
  imagePath: string;
  component?: ReactNode; // Specify the component property
  componentData?: {};
};

export const projects = [
  {
    title: "This Website!",
    componentData: {
      Description: {
        type: "paragraph",
        variant: "body1",
        data: "Howdy and welcome to my personal website, a digital landscape of my professional and personal passions! This website serves as both a showcase of my skills, a history of my past, and a glimpse of my future. Powered by React TypeScript, this website provides a sleek and modern user experience that reflects my desire to learn the latest web development techniques and apply them. Its minimalist design and interface are made possible by Material UI, a library designed by Google to provide easy access to pre-built components. I've also taken this opportunity to integrate a multi-platform view! Try resizing the screen or even access the website from your Phone! Behind the scenes, webpack open-source module and bundler drives the development process into an easily scalable system. Version control is paramount in maintaining the website's history and changes, and with Git, I'm able to do so while inviting others to collaborate and enhance its content. Please seek the repository at the link provided! Node Package Manager serves as the backbone of the website's dependencies. From essential packages to custom components, npm ensures that the website remains reliable, scalable, and up-to-date. Thanks to the free deployment of Github Pages, I proudly host this website. In addition, you'll notice the URL is not the typical Github Pages access link. I was able to purchase a domain and set up my routing using Amazon Web Services Route 53 tool enabling any remote corner of the world to easily engage with my content and explore my professional endeavors.",
      },
    },
    link: "https://github.com/JohnMcWhirter10/JohnMcWhirter10.github.io",
    imagePath: images.myWebsiteImage,
  },
  {
    title: "UL-SWAP DAQ",
    link: "https://github.com/jmcwhirter1608/ULSWAPDAQ",
    imagePath: images.ULSWAPDAQ,
    componentData: {
      "Project Overview": {
        type: "paragraph",
        variant: "body1",
        data: "The Ultra Low Size Weight and Power Data Acquisition Unit (UL-SWaP DaQ) was a collaborative project undertaken at Texas A&M University sponsore by Sandia National Laboratories. The project aims to design a compact, lightweight, and low-power circuit capable of withstanding rocket test flights, processing various signals, and transmitting data.",
      },
      "Team Composition": {
        type: "paragraph",
        variant: "body1",
        data: "The project team consisted of two electrical engineers and one computer engineer, each bringing their expertise to ensure the project's success. The system was structured into three subsystems: Power, Signal Processing, and Interface. My role specifically focused on the interface subsystem, where I was responsible for selecting components such as the Analog-to-Digital Converter, Microcontroller, LVDS transmitter, and developing the necessary firmware. ",
      },
      "Technical Implementation": {
        type: "list",
        variant: "body1",
        data: [
          "Utilized Altium for PCB design and MPLAB IDE in C for firmware development.",
          "Integrated microcontroller with Analog to Digital converter via SPI bus.",
          "Implemented power layers in the four-layer board and programmed multiple programmable gain amplifiers (PGA).",
          "Established an industry-standard workflow with bi-weekly meetings and monthly check-ins.",
          "Doxygen was used to generate HTML output and documentation for the firmware.",
        ],
      },
      "Purpose and Impact": {
        type: "paragraph",
        variant: "body1",
        data: "Sandia National Laboratories requested the ULSWaP DaQ unit to optimize data acquisition during rocket flights, supporting their mission of enhancing national and global security efforts.",
      },
      "Additional Information": {
        type: "list",
        variant: "body1",
        data: [
          "Project involved writing several key documents, including Concept of Operations, Functional System Requirements, Interface Control Document, Subsystem Reports, and System Reports.",
          "Git Version Control was integrated for managing Altium designs and firmware updates.",
          "Design iterations involved testing and troubleshooting multiple subsystems, resulting in significant improvements and achieving a fully functioning system.",
          "The iterative design process facilitated incremental improvements, ultimately resulting in a more robust and optimized data acquisition unit poised to meet the demands of rocket test flight operations effectively.",
        ],
      },
      "Outcome of Design Iterations": {
        type: "paragraph",
        variant: "body1",
        data: "The design process underwent two iterations, each aimed at refining and optimizing the ULSWaP DaQ unit. The initial iteration demonstrated the concept and identified areas for improvement, while the second iteration addressed issues and resulted in a fully functioning and integrated system.",
      },
      "More Information": {
        type: "paragraph",
        variant: "body1",
        data: "For further insight into the technical specifications of this project, please explore my repository through the link located at the bottom of the screen!",
      },
    },
  },
  {
    title: "Python GUI Framework",
    componentData: {
      Description: {
        type: "paragraph",
        variant: "body1",
        data: "In my internship at Texas Instruments, not only did I collaborate with the High Speed Converter group and other interns, I was also given a solo project to complete the design of a Python GUI Framework. The Framework works like and engine, all someone needs to do is provide my engine with a json formatted file which contains the page number; input, output, text, graph, or image label; optional parameters such as range, dropdown, alpha characters, etc. In addition to creating the Engine, I worked with a Solution Architect to simplify the process of writing the json to work directly with a proprietary verilog package provided to Texas Instruments customers. They are able to use Vivado's built-in configuration settings, export it, run our script to deconstruct the exported configuration and run it through the engine to produce a unique Graphical User Interface. Typically, this GUI would do calculations, display estimated signals, and export a configuration back to use in Vivado with calculated values based on the client's data.",
      },
    },
    imagePath: images.TexasInstruments,
  },
];

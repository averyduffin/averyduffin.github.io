import React, { useState, useEffect } from 'react';
import { Rss, Code, User, Github, Linkedin, Mail } from 'lucide-react'; // HomeIcon removed as per new design aesthetic

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Placeholder data for blog posts and projects
  const blogPosts = [
    {
      id: '1',
      title: 'Understanding React Hooks',
      author: 'Your Name',
      date: 'June 1, 2024',
      snippet: 'A deep dive into useState, useEffect, and custom hooks, and how they simplify state management and side effects in functional components.',
      content: `
        <p>React Hooks were introduced in React 16.8, and they revolutionized how we write React components. Before hooks, class components were necessary for state management and lifecycle methods. With hooks, you can now use state and other React features in functional components.</p>
        <h2>useState</h2>
        <p>The \`useState\` hook allows you to add state to functional components. It returns a stateful value and a function to update it.</p>
        <pre><code class="language-javascript">import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
        <h2>useEffect</h2>
        <p>The \`useEffect\` hook lets you perform side effects in functional components. This is similar to \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` in class components.</p>
        <pre><code class="language-javascript">import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run if count changes

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
        <h3>Custom Hooks</h3>
        <p>Custom hooks are a powerful way to reuse stateful logic between components. They are JavaScript functions whose names start with "use" and that may call other hooks.</p>
        <pre><code class="language-javascript">import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function MyComponent() {
  const windowSize = useWindowSize();
  return (
    &lt;div&gt;
      &lt;p&gt;Window Width: {windowSize.width}&lt;/p&gt;
      &lt;p&gt;Window Height: {windowSize.height}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
        <p>Hooks make functional components more capable and improve code readability and reusability. Happy coding!</p>
      `,
    },
    {
      id: '2',
      title: 'Getting Started with Tailwind CSS',
      author: 'Your Name',
      date: 'May 20, 2024',
      snippet: 'A quick guide to setting up Tailwind CSS in your React project for rapid UI development and beautiful designs.',
      content: `
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs directly in your HTML. Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn't come with pre-designed components. Instead, it provides low-level utility classes that you can combine to build any design you can imagine.</p>
        <h2>Installation</h2>
        <p>To get started with Tailwind CSS in a React project, you typically install it via npm or yarn:</p>
        <pre><code class="language-bash">npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
        <p>This will create \`tailwind.config.js\` and \`postcss.config.js\` files.</p>
        <h2>Configuration</h2>
        <p>Configure your \`tailwind.config.js\` file to scan your project files for Tailwind classes:</p>
        <pre><code class="language-javascript">/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
        <p>Then, add the Tailwind directives to your \`index.css\` (or equivalent) file:</p>
        <pre><code class="language-css">@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
        <h2>Usage</h2>
        <p>Now you can start using Tailwind classes directly in your JSX:</p>
        <pre><code class="language-html">&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  My Button
&lt;/button&gt;</code></pre>
        <p>Tailwind CSS offers a powerful and flexible way to style your applications without writing custom CSS, leading to faster development and consistent designs.</p>
      `,
    },
    {
      id: '3',
      title: 'Introduction to Web Accessibility (A11y)',
      author: 'Your Name',
      date: 'April 10, 2024',
      snippet: 'Discover the importance of making your websites accessible to everyone, regardless of their abilities, and learn some basic principles.',
      content: `
        <p>Web accessibility (often abbreviated as A11y) means making websites usable by people with disabilities. This includes people with visual, auditory, motor, cognitive, and neurological impairments. Designing for accessibility isn't just about compliance; it's about creating inclusive experiences for all users.</p>
        <h2>Why is A11y Important?</h2>
        <ul>
          <li><strong>Inclusivity:</strong> Everyone deserves equal access to information and services online.</li>
          <li><strong>Legal Compliance:</strong> Many regions have laws requiring websites to be accessible.</li>
          <li><strong>Improved SEO:</strong> Accessible websites often have better SEO due to semantic HTML and clear structure.</li>
          <li><strong>Better User Experience:</strong> Practices for A11y often benefit all users, not just those with disabilities.</li>
        </ul>
        <h2>Basic Principles of WCAG (Web Content Accessibility Guidelines)</h2>
        <p>The WCAG are a set of guidelines developed by the W3C to provide a shared standard for web accessibility. They are organized under four main principles, often remembered by the acronym POUR:</p>
        <ol>
          <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive. (e.g., provide text alternatives for non-text content).</li>
          <li><strong>Operable:</strong> User interface components and navigation must be operable. (e.g., all functionality available from a keyboard).</li>
          <li><strong>Understandable:</strong> Information and the operation of user interface must be understandable. (e.g., text content readable and understandable).</li>
          <li><strong>Robust:</strong> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. (e.g., maximize compatibility with current and future user agents).</li>
        </ol>
        <h2>Quick Tips for A11y</h2>
        <ul>
          <li>Use semantic HTML (e.g., \`&lt;button&gt;\`, \`&lt;a&gt;\`, \`&lt;h1&gt;\` to \`&lt;h6&gt;\`).</li>
          <li>Provide alt text for all meaningful images.</li>
          <li>Ensure sufficient color contrast.</li>
          <li>Make sure all interactive elements are keyboard-operable.</li>
          <li>Use ARIA attributes when semantic HTML isn't enough.</li>
        </ul>
        <p>Embracing accessibility in your web development journey will make your creations more impactful and truly for everyone.</p>
      `,
    },
  ];

  const projects = [
    {
      id: '1',
      title: 'E-commerce Store Front',
      description: 'A responsive e-commerce front-end built with React, featuring product listings, a shopping cart, and user authentication.',
      technologies: ['React', 'Tailwind CSS', 'Firebase (Auth/Firestore)'],
      githubLink: 'https://github.com/yourusername/ecommerce-store',
      liveDemoLink: 'https://yourusername.github.io/ecommerce-store',
      image: 'https://placehold.co/600x400/C0CDD9/2C3A5A?text=E-commerce',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A full-stack task management application with drag-and-drop functionality, user profiles, and real-time updates.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      githubLink: 'https://github.com/yourusername/task-manager-app',
      liveDemoLink: 'https://yourusername.github.io/task-manager-app',
      image: 'https://placehold.co/600x400/C0CDD9/2C3A5A?text=Task+App',
    },
    {
      id: '3',
      title: 'Interactive Data Visualization',
      description: 'An interactive dashboard visualizing public data using D3.js and React, allowing users to filter and sort information.',
      technologies: ['React', 'D3.js', 'SVGs'],
      githubLink: 'https://github.com/yourusername/data-viz-dashboard',
      liveDemoLink: 'https://yourusername.github.io/data-viz-dashboard',
      image: 'https://placehold.co/600x400/C0CDD9/2C3A5A?text=Data+Viz',
    },
  ];

  // Component to render based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <Blog posts={blogPosts} setCurrentPage={setCurrentPage} />;
      case 'blogPost':
        const postId = new URLSearchParams(window.location.search).get('id');
        const post = blogPosts.find(p => p.id === postId);
        return post ? <BlogPost post={post} /> : <NotFound />;
      case 'projects':
        return <Projects projects={projects} setCurrentPage={setCurrentPage} />;
      case 'projectDetail':
        const projectId = new URLSearchParams(window.location.search).get('id');
        const project = projects.find(p => p.id === projectId);
        return project ? <ProjectDetail project={project} /> : <NotFound />;
      case 'about':
        return <About />;
      default:
        return <NotFound />;
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1); // Remove leading slash
      const searchParams = new URLSearchParams(window.location.search);

      if (path.startsWith('blog-post/')) {
        setCurrentPage('blogPost');
      } else if (path.startsWith('project-detail/')) {
        setCurrentPage('projectDetail');
      } else if (path === 'blog') {
        setCurrentPage('blog');
      } else if (path === 'projects') {
        setCurrentPage('projects');
      } else if (path === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL and currentPage when navigation happens
  const navigateTo = (page, id = null) => {
    let url = '';
    switch (page) {
      case 'home':
        url = '/';
        break;
      case 'blog':
        url = '/blog';
        break;
      case 'blogPost':
        url = `/blog-post/?id=${id}`;
        break;
      case 'projects':
        url = '/projects';
        break;
      case 'projectDetail':
        url = `/project-detail/?id=${id}`;
        break;
      case 'about':
        url = '/about';
        break;
      default:
        url = '/';
    }
    window.history.pushState({ page, id }, '', url);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 font-inter text-blue-900">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Header Component
function Header({ navigateTo, currentPage }) {
  const navItems = [
    { name: 'Blog', page: 'blog', icon: Rss },
    { name: 'Projects', page: 'projects', icon: Code },
    { name: 'About', page: 'about', icon: User },
  ];

  return (
    <header className="bg-white text-blue-900 shadow-sm p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">
          <a href="#" onClick={() => navigateTo('home')} className="hover:text-blue-700 transition-colors duration-300">
            Your Brand
          </a>
        </h1>
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.page);
                  }}
                  className={`text-lg font-medium px-3 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2
                    ${currentPage === item.page ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'}
                  `}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Home Component
function Home({ setCurrentPage }) {
  return (
    <section className="py-16 bg-white rounded-lg shadow-xl animate-fade-in md:flex items-center justify-between p-8">
      <div className="text-left md:w-1/2">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
          Helping people make the world a better place through quality software.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => setCurrentPage('blog')}
            className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-800"
          >
            Read the blog <Rss className="inline-block ml-2" size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className="border-2 border-blue-900 text-blue-900 bg-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100"
          >
            View Projects <Code className="inline-block ml-2" size={20} />
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        {/* Placeholder for the illustration - You can replace this with an actual SVG or image */}
        <img
          src="https://placehold.co/500x500/C0CDD9/2C3A5A?text=Kody+the+Koala+Illustration"
          alt="Kody the Koala Illustration"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}

// Blog List Component
function Blog({ posts, setCurrentPage }) {
  return (
    <section className="bg-white rounded-lg shadow-xl p-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">My Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-blue-50 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 overflow-hidden border border-blue-200"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-blue-700 mb-4">
                By {post.author} on {post.date}
              </p>
              <p className="text-blue-800 mb-5 line-clamp-3">{post.snippet}</p>
              <button
                onClick={() => setCurrentPage('blogPost', post.id)}
                className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Single Blog Post Component
function BlogPost({ post }) {
  // Simple syntax highlighting (can be replaced by a proper library like highlight.js)
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      // Very basic "syntax highlighting" for display purposes
      const lang = block.className.replace('language-', '');
      if (lang === 'javascript' || lang === 'bash' || lang === 'css' || lang === 'html') {
        block.innerHTML = block.innerHTML
          .replace(/(&lt;)([^&gt;]+)(&gt;)/g, '<span class="text-blue-700">$&</span>') // HTML tags
          .replace(/(const|let|var|function|return|import|export|from|new|this|if|else|for|while|switch|case|break|default|try|catch|finally)\b/g, '<span class="text-blue-600 font-semibold">$&</span>') // Keywords
          .replace(/(")([^"]*)(")/g, '<span class="text-green-600">$&</span>') // Strings
          .replace(/(')([^']*)(')/g, '<span class="text-green-600">$&</span>') // Strings
          .replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="text-blue-500 italic">$&</span>') // Comments
          .replace(/(\d+)/g, '<span class="text-orange-600">$&</span>'); // Numbers
      }
    });
  }, [post]);

  return (
    <section className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">{post.title}</h2>
      <p className="text-blue-700 text-sm mb-6">
        By <span className="font-semibold">{post.author}</span> on {post.date}
      </p>
      <div className="prose prose-lg max-w-none text-blue-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
      <button
        onClick={() => window.history.back()} // Go back to previous page
        className="mt-8 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow"
      >
        &larr; Back to Blog
      </button>
    </section>
  );
}

// Projects List Component
function Projects({ projects, setCurrentPage }) {
  return (
    <section className="bg-white rounded-lg shadow-xl p-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">My Development Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-blue-50 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 overflow-hidden border border-blue-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/C0CDD9/2C3A5A?text=Project'; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3 leading-tight">
                {project.title}
              </h3>
              <p className="text-blue-800 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage('projectDetail', project.id)}
                className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Single Project Detail Component
function ProjectDetail({ project }) {
  return (
    <section className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto animate-fade-in">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x400/C0CDD9/2C3A5A?text=Project+Detail'; }}
      />
      <h2 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">{project.title}</h2>
      <p className="text-blue-800 text-lg mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="font-semibold text-blue-900">Technologies Used:</span>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-1 bg-blue-200 text-blue-800 text-sm font-medium rounded-full shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <Github size={20} />
            <span>GitHub Repo</span>
          </a>
        )}
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-900 text-blue-900 bg-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 flex items-center space-x-2"
          >
            <Code size={20} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
      <button
        onClick={() => window.history.back()} // Go back to previous page
        className="mt-8 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow"
      >
        &larr; Back to Projects
      </button>
    </section>
  );
}

// About Component
function About() {
  return (
    <section className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">About Me</h2>
      <div className="text-lg text-blue-800 leading-relaxed space-y-4">
        <p>
          Hi there! I'm <span className="font-semibold text-blue-700">Your Name</span>, a dedicated software developer with a passion for creating impactful web applications. My journey into programming started with curiosity, and it quickly grew into a full-blown obsession. I love solving complex problems, building intuitive user interfaces, and exploring new technologies.
        </p>
        <p>
          This website serves as my personal knowledge hub and portfolio. Here, I share my insights on various development topics, from deep dives into JavaScript frameworks like React to discussions on best practices, algorithms, and system design. My goal is to contribute to the developer community by sharing what I've learned, fostering discussions, and helping others on their own coding adventures.
        </p>
        <p>
          In the <span className="font-semibold text-blue-700">Projects</span> section, you'll find a showcase of my personal and professional development projects. These range from full-stack applications to intricate front-end designs, demonstrating my skills in various areas of software development.
        </p>
        <p>
          I believe in continuous learning and growth. The world of technology is always evolving, and I'm committed to staying current with the latest trends and tools. Thank you for visiting my site! Feel free to connect with me.
        </p>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Connect with Me</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900 transition-colors duration-300"
          >
            <Github size={36} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900 transition-colors duration-300"
          >
            <Linkedin size={36} />
          </a>
          <a
            href="mailto:youremail@example.com" // Replace with your Email
            className="text-blue-800 hover:text-blue-900 transition-colors duration-300"
          >
            <Mail size={36} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center shadow-inner mt-8">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-blue-200">
          Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

// Not Found Component
function NotFound() {
  return (
    <div className="text-center py-16 bg-white rounded-lg shadow-xl animate-fade-in">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h2>
      <p className="text-xl text-blue-800">The page you're looking for does not exist.</p>
      <button
        onClick={() => window.history.back()}
        className="mt-8 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow"
      >
        Go Back
      </button>
    </div>
  );
}

export default App;


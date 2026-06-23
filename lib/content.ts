import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  contentHtml: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  challenges: string;
  lessons: string;
  contentHtml: string;
  image?: string;
}

// Ensure content folders exist
function ensureDirectoryExistence(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(CONTENT_DIR, "blog");
  ensureDirectoryExistence(blogDir);
  
  const filenames = fs.readdirSync(blogDir);
  const posts = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const contentHtml = marked(content) as string;

      return {
        slug,
        title: data.title || "Untitled Post",
        date: data.date || "",
        description: data.description || "",
        tags: data.tags || [],
        contentHtml,
      };
    });

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const blogDir = path.join(CONTENT_DIR, "blog");
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = marked(content) as string;

  return {
    slug,
    title: data.title || "Untitled Post",
    date: data.date || "",
    description: data.description || "",
    tags: data.tags || [],
    contentHtml,
  };
}

export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(CONTENT_DIR, "projects");
  ensureDirectoryExistence(projectsDir);

  const filenames = fs.readdirSync(projectsDir);
  return filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(projectsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const contentHtml = marked(content) as string;

      return {
        slug,
        title: data.title || "Untitled Project",
        description: data.description || "",
        tags: data.tags || [],
        githubUrl: data.githubUrl || "",
        demoUrl: data.demoUrl || "",
        features: data.features || [],
        challenges: data.challenges || "",
        lessons: data.lessons || "",
        contentHtml,
        image: data.image || "",
      };
    });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projectsDir = path.join(CONTENT_DIR, "projects");
  const filePath = path.join(projectsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = marked(content) as string;

  return {
    slug,
    title: data.title || "Untitled Project",
    description: data.description || "",
    tags: data.tags || [],
    githubUrl: data.githubUrl || "",
    demoUrl: data.demoUrl || "",
    features: data.features || [],
    challenges: data.challenges || "",
    lessons: data.lessons || "",
    contentHtml,
    image: data.image || "",
  };
}

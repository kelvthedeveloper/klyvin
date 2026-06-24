import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  order: number;
  features: ProjectFeature[];
  problem: string;
  engineeringChallenges: ProjectChallenge[];
  role: string;
  timeline: string;
  learnings: string[];
  roadmap: string[];
  metrics: ProjectMetric[];
  techStack: TechStackGroup[];
  images: string[];
  challenges: string;
  lessons: string;
  contentHtml: string;
}

function ensureDirectoryExistence(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function normalizeFeatures(raw: unknown): ProjectFeature[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => {
    if (typeof item === "string") {
      return { title: item, description: "" };
    }
    return {
      title: item.title || "Feature",
      description: item.description || "",
    };
  });
}

function normalizeChallenges(raw: unknown, legacyChallenge?: string, legacyLesson?: string): ProjectChallenge[] {
  if (Array.isArray(raw) && raw.length > 0) {
    return raw.map((item) => ({
      challenge: item.challenge || "",
      solution: item.solution || "",
    }));
  }
  if (legacyChallenge) {
    return [{ challenge: legacyChallenge, solution: legacyLesson || "" }];
  }
  return [];
}

function normalizeMetrics(raw: unknown): ProjectMetric[] {
  if (Array.isArray(raw) && raw.length > 0) {
    return raw.map((item) => ({
      value: item.value || "",
      label: item.label || "",
    }));
  }
  return [
    { value: "4+ APIs", label: "APIs Integrated" },
    { value: "<1.5s", label: "Load Time" },
    { value: "98/100", label: "Lighthouse" },
    { value: "6 Weeks", label: "Development Time" },
  ];
}

function normalizeTechStack(raw: unknown, tags: string[]): TechStackGroup[] {
  if (Array.isArray(raw) && raw.length > 0) {
    return raw.map((item) => ({
      category: item.category || "Stack",
      items: item.items || [],
    }));
  }
  return [{ category: "Technologies", items: tags }];
}

function parseProject(filename: string, fileContents: string): Project {
  const slug = filename.replace(/\.md$/, "");
  const { data, content } = matter(fileContents);
  const contentHtml = marked(content) as string;
  const tags: string[] = data.tags || [];

  return {
    slug,
    title: data.title || "Untitled Project",
    description: data.description || "",
    category: data.category || tags.slice(0, 2).join(" & ") || "Full Stack",
    tags,
    githubUrl: data.githubUrl || "",
    demoUrl: data.demoUrl || "",
    featured: data.featured ?? false,
    order: data.order ?? 99,
    features: normalizeFeatures(data.features),
    problem: data.problem || "",
    engineeringChallenges: normalizeChallenges(data.engineeringChallenges, data.challenges, data.lessons),
    role: data.role || "Full Stack Developer",
    timeline: data.timeline || "",
    learnings: data.learnings || [],
    roadmap: data.roadmap || [],
    metrics: normalizeMetrics(data.metrics),
    techStack: normalizeTechStack(data.techStack, tags),
    images: data.images || (data.image ? [data.image] : []),
    challenges: data.challenges || "",
    lessons: data.lessons || "",
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
      const filePath = path.join(projectsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return parseProject(filename, fileContents);
    })
    .sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projectsDir = path.join(CONTENT_DIR, "projects");
  const filePath = path.join(projectsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parseProject(`${slug}.md`, fileContents);
}

/* Ground truth: detail routes are structural placeholders only; no case-study content is invented before the user's assets and copy arrive. */
import { Link, useRoute } from "wouter";

const labels: Record<string, string> = {
  mirantes: "Mirantes",
  ziett: "Ziett",
  "versus-esport": "Versus Esport",
  codepoint: "Codepoint",
  "mirantes-talentlink": "Mirantes Talentlink",
  "nazih-website": "Nazih_Website",
};

export default function ProjectDetail() {
  const [, params] = useRoute<{ slug: string }>("/projects/:slug");
  const name = labels[params?.slug ?? ""] ?? "Projeto";
  return <main className="project-detail-page"><div className="page-width"><Link href="/#projects" className="back-link">← Voltar aos projetos</Link><p className="eyebrow">PROJECT</p><h1>{name}</h1><div className="detail-slot">Conteúdo do projeto a aguardar os assets e materiais fornecidos.</div></div></main>;
}

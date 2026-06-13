import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpenCheck,
  Code2,
  ExternalLink,
  FileText,
  FolderGit2,
  GitPullRequest,
  GraduationCap,
  Languages,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  UsersRound,
} from 'lucide-react';
import './App.css';

const GITHUB_USERNAME = '12pedro1021-droid';
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const AVATAR_URL = 'https://avatars.githubusercontent.com/u/245465568?v=4';

const fallbackDescriptions = {
  'adivinhe-a-senha-':
    'Projeto em Python para praticar lógica, condições e interação com o usuário por meio de um jogo de senha.',
  'jogo-da-senha':
    'Experimento de jogo digital focado em raciocínio, regras simples e evolução de código.',
  'github-pages':
    'Repositório usado para publicar páginas estáticas e praticar hospedagem com GitHub Pages.',
  '12pedro1021-droid':
    'Repositório de perfil do GitHub, usado para apresentar identidade, estudos e projetos.',
  'github-pagess':
    'Prática de desenvolvimento web com HTML, CSS e publicação em ambiente GitHub Pages.',
  Cumeemcasa:
    'Site criado para treinar estrutura de páginas, organização visual e publicação de conteúdo.',
  PedroHenrique2:
    'Projeto inicial de portfólio e aprendizado contínuo em desenvolvimento web.',
};

const implementationSteps = [
  {
    title: 'Planejamento da implantação',
    text: 'Definição do objetivo do PortfolioHUB, escolha de React com Vite e organização das etapas com apoio do Google Gemini.',
    icon: BookOpenCheck,
  },
  {
    title: 'Integração com GitHub',
    text: 'Consumo da API pública do GitHub para exibir automaticamente os repositórios mais recentes de Pedro Henrique.',
    icon: FolderGit2,
  },
  {
    title: 'Usuários e segurança',
    text: 'Documentação de políticas para acesso, revisão por Pull Request e cuidado com vulnerabilidades.',
    icon: ShieldCheck,
  },
  {
    title: 'Compartilhamento e acesso',
    text: 'Fluxo pensado para versionamento, colaboração por branches e publicação em GitHub Pages.',
    icon: GitPullRequest,
  },
  {
    title: 'Testes e produção',
    text: 'Build de produção, verificação responsiva e preparo para deploy contínuo pelo GitHub Actions.',
    icon: Rocket,
  },
  {
    title: 'Revisão final',
    text: 'Revisei o conteúdo, conferi se o site abria corretamente e deixei os arquivos prontos para a entrega final.',
    icon: FileText,
  },
];

const aiTools = [
  {
    name: 'Google Gemini',
    use: 'Usei como apoio para entender melhor as etapas do desafio, organizar ideias e revisar alguns pontos da implantação.',
    icon: Sparkles,
  },
  {
    name: 'ChatGPT',
    use: 'Usei para revisar textos, corrigir erros e ajustar a organização do site antes da entrega.',
    icon: Sparkles,
  },
];

const evidenceItems = [
  { label: 'Plano de implantação documentado', icon: FileText },
  { label: 'Repositórios carregados pela API do GitHub', icon: FolderGit2 },
  { label: 'Política de segurança e colaboração', icon: ShieldCheck },
  { label: 'Site publicado no GitHub Pages', icon: Rocket },
];

const skillHighlights = [
  { label: 'Inteligência Artificial', icon: Sparkles },
  { label: 'Inglês em evolução', icon: Languages },
  { label: 'Desenvolvimento Web', icon: Code2 },
  { label: 'Git e GitHub', icon: GitPullRequest },
];

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

function App() {
  const [projects, setProjects] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error('Não foi possível buscar os dados públicos do GitHub.');
        }

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();
        setProfile(profileData);
        setProjects(reposData.filter((repo) => !repo.fork));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const stats = useMemo(
    () => [
      { value: profile?.public_repos ?? 7, label: 'repositórios públicos' },
      { value: projects.filter((project) => project.has_pages).length || 3, label: 'projetos com GitHub Pages' },
      { value: '14/06', label: 'prazo da entrega final' },
    ],
    [profile, projects],
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <Terminal size={24} />
          <span>PortfolioHUB</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#implantacao">Implantação</a>
          <a href="#ias">IAs usadas</a>
          <a href="#seguranca">Segurança</a>
        </nav>

        <div className="social-actions">
          <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" title="Abrir GitHub">
            <FolderGit2 size={19} />
          </a>
          <a href="mailto:pedrohenrique.contato@example.com" title="Enviar e-mail">
            <Mail size={19} />
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Desafio Final - Implantação PortfolioHUB + IA Gemini</p>
            <h1>
              Pedro Henrique
              <span>PortfolioHUB pessoal integrado ao GitHub</span>
            </h1>
            <p className="hero-text">
              Este é meu portfólio para reunir os projetos que estou desenvolvendo e mostrar minha evolução
              em tecnologia, programação, GitHub e Inteligência Artificial.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#projetos">
                <Code2 size={18} />
                Ver projetos
              </a>
              <a className="secondary-action" href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
                <FolderGit2 size={18} />
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Resumo do perfil">
            <img src={AVATAR_URL} alt="Foto de perfil de Pedro Henrique no GitHub" />
            <div>
              <p className="profile-name">12pedro1021-droid</p>
              <p className="profile-bio">
                Estou aprendendo desenvolvimento web, lógica de programação e uso de IA para melhorar meus projetos.
              </p>
            </div>
            <div className="profile-tags">
              {skillHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label}>
                    <Icon size={15} />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </aside>
        </section>

        <section className="stats-row" aria-label="Resumo do GitHub">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="projetos" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Integração com GitHub</p>
            <h2>Projetos recentes</h2>
            <p>
              Aqui aparecem meus repositórios do GitHub. Assim, quando eu atualizar ou criar novos projetos,
              o portfólio continua acompanhando minha evolução.
            </p>
          </div>

          {loading && <div className="state-message">Buscando repositórios no GitHub...</div>}
          {error && <div className="state-message error">Erro: {error}</div>}

          {!loading && !error && (
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-title-row">
                    <h3>
                      <Code2 size={19} />
                      {project.name}
                    </h3>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer" title="Abrir repositório">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p>
                    {project.description ||
                      fallbackDescriptions[project.name] ||
                      'Projeto publicado no GitHub de Pedro Henrique.'}
                  </p>
                  <div className="project-meta">
                    <span>{project.language || 'Web'}</span>
                    <span>Atualizado em {formatDate(project.updated_at)}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="implantacao" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Requisitos do PDF</p>
            <h2>Trilha de implantação</h2>
            <p>
              Organizei esta parte para mostrar como fiz a implantação do PortfolioHUB e quais cuidados usei
              com GitHub, segurança, testes e publicação.
            </p>
          </div>

          <div className="timeline-grid">
            {implementationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="timeline-item" key={step.title}>
                  <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
                  <Icon size={23} />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="ias" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">IAs utilizadas</p>
            <h2>Ferramentas que usei como apoio</h2>
            <p>
              Usei IA como ajuda para revisar ideias e organizar melhor a entrega, mas o portfólio foi
              personalizado para representar meus projetos e minha forma de apresentar o trabalho.
            </p>
          </div>

          <div className="ai-grid">
            {aiTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <article className="ai-card" key={tool.name}>
                  <Icon size={24} />
                  <h3>{tool.name}</h3>
                  <p>{tool.use}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="seguranca" className="security-section">
          <div className="security-copy">
            <p className="eyebrow">Segurança e colaboração</p>
            <h2>Controle de acesso documentado</h2>
            <p>
              Também deixei documentado como o projeto pode ser atualizado, revisado e publicado com mais cuidado.
            </p>
          </div>

          <div className="security-list">
            <div>
              <ShieldCheck size={22} />
              <span>Branch main protegida por Pull Request e revisão.</span>
            </div>
            <div>
              <UsersRound size={22} />
              <span>Colaboradores organizados por convites, forks e branches.</span>
            </div>
            <div>
              <GraduationCap size={22} />
              <span>Uso de IA apenas como apoio para revisar e organizar melhor a entrega.</span>
            </div>
          </div>
        </section>

        <section className="evidence-section" aria-label="Evidências para entrega final">
          {evidenceItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label}>
                <Icon size={22} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </section>
      </main>

      <footer className="footer">
        <p>PortfolioHUB de Pedro Henrique - React, Vite, GitHub API, Gemini e GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpenCheck,
  Code2,
  ExternalLink,
  FolderGit2,
  GitPullRequest,
  GraduationCap,
  Languages,
  Mail,
  Presentation,
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
    'Projeto em Python para praticar logica, condicoes e interacao com usuario por meio de um jogo de senha.',
  'jogo-da-senha':
    'Experimento de jogo digital focado em raciocinio, regras simples e evolucao de codigo.',
  'github-pages':
    'Repositorio usado para publicar paginas estaticas e praticar hospedagem com GitHub Pages.',
  '12pedro1021-droid':
    'Repositorio de perfil do GitHub, usado para apresentar identidade, estudos e projetos.',
  'github-pagess':
    'Pratica de desenvolvimento web com HTML, CSS e publicacao em ambiente GitHub Pages.',
  Cumeemcasa:
    'Site criado para treinar estrutura de paginas, organizacao visual e publicacao de conteudo.',
  PedroHenrique2:
    'Projeto inicial de portifolio e aprendizado continuo em desenvolvimento web.',
};

const implementationSteps = [
  {
    title: 'Planejamento da implantacao',
    text: 'Definicao do objetivo do PortfolioHUB, escolha de React com Vite e organizacao das etapas com apoio de IA.',
    icon: BookOpenCheck,
  },
  {
    title: 'Integracao com GitHub',
    text: 'Consumo da API publica do GitHub para exibir automaticamente os repositorios mais recentes de Pedro Henrique.',
    icon: FolderGit2,
  },
  {
    title: 'Usuarios e seguranca',
    text: 'Documentacao de politicas para acesso, revisao por Pull Request e cuidado com vulnerabilidades.',
    icon: ShieldCheck,
  },
  {
    title: 'Compartilhamento e acesso',
    text: 'Fluxo pensado para versionamento, colaboracao por branches e publicacao em GitHub Pages.',
    icon: GitPullRequest,
  },
  {
    title: 'Testes e producao',
    text: 'Build de producao, verificacao responsiva e preparo para deploy continuo pelo GitHub Actions.',
    icon: Rocket,
  },
  {
    title: 'Revisao e apresentacao',
    text: 'Conteudo organizado para apoiar a entrega final em PDF e uma apresentacao curta em video.',
    icon: Presentation,
  },
];

const skillHighlights = [
  { label: 'Inteligencia Artificial', icon: Sparkles },
  { label: 'Ingles em evolucao', icon: Languages },
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
          throw new Error('Nao foi possivel buscar os dados publicos do GitHub.');
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
      { value: profile?.public_repos ?? 7, label: 'repositorios publicos' },
      { value: projects.filter((project) => project.has_pages).length || 3, label: 'projetos com GitHub Pages' },
      { value: '2026', label: 'entrega final PortfolioHUB' },
    ],
    [profile, projects],
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Voltar ao inicio">
          <Terminal size={24} />
          <span>PortfolioHUB</span>
        </a>

        <nav className="nav-links" aria-label="Navegacao principal">
          <a href="#projetos">Projetos</a>
          <a href="#implantacao">Implantacao</a>
          <a href="#seguranca">Seguranca</a>
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
            <p className="eyebrow">Desafio Final - Implantacao PortfolioHUB + IA</p>
            <h1>
              Pedro Henrique
              <span>PortfolioHUB pessoal integrado ao GitHub</span>
            </h1>
            <p className="hero-text">
              Estudante de Inteligencia Artificial e Ingles, criando projetos digitais e evoluindo
              em tecnologia, desenvolvimento web, logica de programacao e boas praticas de seguranca.
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
                Desenvolvo projetos digitais e estou em constante evolucao nas areas de tecnologia e aprendizado.
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
            <p className="eyebrow">Integracao com GitHub</p>
            <h2>Projetos recentes</h2>
            <p>
              Estes cards sao carregados diretamente da API publica do GitHub, mantendo o PortfolioHUB atualizado
              conforme novos repositorios forem publicados.
            </p>
          </div>

          {loading && <div className="state-message">Buscando repositorios no GitHub...</div>}
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
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer" title="Abrir repositorio">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p>{project.description || fallbackDescriptions[project.name] || 'Projeto publicado no GitHub de Pedro Henrique.'}</p>
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
            <h2>Trilha de implantacao</h2>
            <p>
              A estrutura abaixo organiza as seis partes pedidas no desafio, conectando planejamento,
              GitHub, seguranca, testes e apresentacao final.
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

        <section id="seguranca" className="security-section">
          <div className="security-copy">
            <p className="eyebrow">Seguranca e colaboracao</p>
            <h2>Controle de acesso documentado</h2>
            <p>
              O projeto inclui arquivos de README, plano de implantacao, politica de seguranca e guia de
              contribuicao para demonstrar as praticas cobradas na avaliacao.
            </p>
          </div>

          <div className="security-list">
            <div>
              <ShieldCheck size={22} />
              <span>Branch main protegida por Pull Request e revisao.</span>
            </div>
            <div>
              <UsersRound size={22} />
              <span>Colaboradores organizados por convites, forks e branches.</span>
            </div>
            <div>
              <GraduationCap size={22} />
              <span>Uso de IA como apoio tecnico para revisao, documentacao e planejamento.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>PortfolioHUB de Pedro Henrique - React, Vite, GitHub API e GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;

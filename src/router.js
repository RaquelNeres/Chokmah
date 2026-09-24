import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./views/Home.vue')
const Projetos = () => import('./views/Projetos.vue')
const Frontend = () => import('./views/Frontend.vue')
const Backend = () => import('./views/Backend.vue')
const Artigos = () => import('./views/Artigos.vue')
const Ferramentas = () => import('./views/Ferramentas.vue')

const Frontend1 = () => import('./views/front/front1.vue')
const FrontTailwind = () => import('./views/front/Tailwind.vue')
const FrontVue = () => import('./views/front/Vue.vue')
const FrontReact = () => import('./views/front/React.vue')
const FrontHtml = () => import('./views/front/Html.vue')
const FrontQuasar = () => import('./views/front/Quasar.vue')

const Geral = () => import('./views/Geral.vue')

const BackFlask = () => import('./views/back/Flask.vue')
const BackFastAPI = () => import('./views/back/FastAPI.vue')
const BackPython = () => import('./views/back/Python.vue')
const BackJS = () => import('./views/back/JS.vue')
const BackNode = () => import('./views/back/Nodejs.vue')
const Backend1 = () => import('./views/back/Back1.vue')

const ArtLog = () => import('./views/artigos/Log.vue')
const ArtEngSof = () => import('./views/artigos/EngSoft.vue')
const Artigos1 = () => import('./views/artigos/Artigos1.vue')

const FerramentasDocker = () => import('./views/ferramentas/Docker.vue')
const FerramentasVite = () => import('./views/ferramentas/Vite.vue')
const FerramentasGit = () => import('./views/ferramentas/Git.vue')
const FerramentasSql = () => import('./views/ferramentas/Sql.vue')
const Ferramentas1 = () => import('./views/ferramentas/Ferramentas1.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/projetos', component: Projetos },
  { path: '/frontend', component: Frontend },
  { path: '/frontend/frontend1', component: Frontend1 },
  { path: '/frontend/tailwind', component: FrontTailwind },
  { path: '/frontend/vue', component: FrontVue },
  { path: '/frontend/react', component: FrontReact },
  { path: '/frontend/html', component: FrontHtml },
  { path: '/frontend/quasar', component: FrontQuasar },
  { path: '/backend', component: Backend },
  { path: '/backend/backend1', component: Backend1 },
  { path: '/backend/flask', component: BackFlask },
  { path: '/backend/fastapi', component: BackFastAPI },
  { path: '/backend/python', component: BackPython },
  { path: '/backend/javascript', component: BackJS },
  { path: '/backend/nodejs', component: BackNode },
  { path: '/geral', component: Geral },
  { path: '/artigos', component: Artigos },
  { path: '/artigos/artigos1', component: Artigos1 },
  { path: '/artigos/log', component: ArtLog },
  { path: '/artigos/engenharia-software', component: ArtEngSof },
  { path: '/ferramentas', component: Ferramentas },
  { path: '/ferramentas/ferramentas1', component: Ferramentas1 },
  { path: '/ferramentas/docker', component: FerramentasDocker },
  { path: '/ferramentas/vite', component: FerramentasVite },
  { path: '/ferramentas/git', component: FerramentasGit },
  { path: '/ferramentas/sql', component: FerramentasSql },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

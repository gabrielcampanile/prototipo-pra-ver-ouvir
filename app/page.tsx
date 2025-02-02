import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Book,
  BookOpen,
  Calendar,
  Headphones,
  Mail,
  // MapPin,
  Newspaper,
  Phone,
  Trophy,
  Users,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/service-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { BudgetForm } from "@/components/budget-form";
// import { section } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main" tabIndex={-1} className="min-h-screen">
        <section className="container py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Por um mundo mais acessível
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-muted-foreground">
            Audiodescrição com poesia para produzir e acessibilizar conteúdos,
            produtos, projetos e eventos visuais.
          </p>
        </section>

        <section id="sobre" className="container py-24 rounded-lg">
          <h2 className="text-3xl font-bold mb-12">Quem Somos</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg mb-4">
                A Pra Ver Ouvir germinou em 2022 como projeto acessível e
                floresceu em 2023 como empresa. Com o lema &quot;por um mundo
                mais acessível&quot;, unimos Audiodescrição com Poesia para
                produzir e acessibilizar conteúdos, produtos, projetos e eventos
                visuais.
              </p>
              <p className="text-lg">
                Nossa equipe é formada por audiodescritores qualificados,
                premiados e que também são artistas e professores. Tudo isso
                para gerar doces frutos poéticos, proporcionando uma
                acessibilidade satisfatória a todas as pessoas.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Nossa Equipe</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/profile1.png"
                      alt="Foto de Felipe Neves"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Felipe Neves</h3>
                    <p className="text-base text-muted-foreground">
                      Gestor e audiodescritor consultor
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/profile2.png"
                      alt="Foto de Ienmily Araújo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Ienmily Araújo
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Diretora e audiodescritora roteirista e narradora
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="servicos" className="container py-24">
          <h2 className="text-3xl font-bold mb-12">Nossos Serviços</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceCard
              title="Audiodescrição escrita"
              description="Transformamos conteúdo visual em descrições detalhadas e poéticas, tornando-o acessível para todos."
              icon={<Headphones className="h-6 w-6" />}
            />
            <ServiceCard
              title="Audiodescrição gravada"
              description="Narrações profissionais que trazem vida às descrições, criando uma experiência imersiva."
              icon={<Video className="h-6 w-6" />}
            />
            <ServiceCard
              title="Audiodescrição ao vivo"
              description="Descrição em tempo real para eventos, apresentações e conferências."
              icon={<Users className="h-6 w-6" />}
            />
            <ServiceCard
              title="Projetos e ações formativas"
              description="Workshops, palestras e treinamentos sobre acessibilidade e audiodescrição."
              icon={<BookOpen className="h-6 w-6" />}
            />
          </div>
        </section>

        <section id="portfolio" className="container py-24 rounded-lg">
          <h2 className="text-3xl font-bold mb-12">Portfólio</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              title="Curta 'Nó Cego'"
              description="Audiodescrição e legendagem descritiva para curta-metragem."
              date="Março, 2024"
              image="/images/project1.png"
              imageAlt="Thumbnail do curta Nó Cego"
              details="Este projeto envolveu a criação de uma audiodescrição poética e legendas descritivas para o curta-metragem 'Nó Cego'. Trabalhamos em estreita colaboração com a equipe de produção para garantir que a essência do filme fosse capturada e transmitida de forma acessível."
            />
            <PortfolioCard
              title="IV Conferência Nacional SECDEF/AL"
              description="Audiodescrição ao vivo para conferência sobre direitos da pessoa com deficiência."
              date="Abril, 2024"
              image="/images/project2.png"
              imageAlt="Equipe na IV Conferência Nacional"
              details="Fornecemos audiodescrição ao vivo durante toda a IV Conferência Nacional dos Direitos da Pessoa com Deficiência em Alagoas. Nossa equipe trabalhou incansavelmente para garantir que todos os aspectos visuais do evento fossem descritos de forma clara e precisa."
            />
            <PortfolioCard
              title="Memes Pra Ver Ouvir"
              description="Laboratório de memes acessíveis para professores e usuários da audiodescrição."
              date="2024"
              image="/images/project3.png"
              imageAlt="Logo do projeto Memes Pra Ver Ouvir"
              details="Este projeto inovador visa tornar os memes acessíveis a todos. Desenvolvemos técnicas especiais de audiodescrição para capturar o humor e o contexto dos memes, permitindo que pessoas com deficiência visual possam participar plenamente dessa forma de comunicação online."
            />
          </div>
        </section>

        <section id="premiacoes" className="container py-24">
          <h2 className="text-3xl font-bold mb-12">Premiações e Publicações</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle>
                    1º Lugar no concurso de Ideias Inovadoras
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Projeto &quot;LabPARAtodos&quot; - Outubro, 2023
                </p>
                <Image
                  src="/images/prize1.png"
                  alt="Certificado SINPETE"
                  width={600}
                  height={400}
                  className="mt-4 rounded-lg"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Book className="h-6 w-6 text-primary" />
                  <CardTitle>Coleção SINPETE 2023 - capítulo 3</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detalhes da segunda premiação
                </p>
                <Image
                  src="/images/prize2.png"
                  alt="Certificado da segunda premiação"
                  width={600}
                  height={400}
                  className="mt-4 rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="atualizacoes" className="container py-24 rounded-lg">
          <h2 className="text-3xl font-bold mb-12">Atualizações e Eventos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Workshop de Audiodescrição
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  15 de Maio, 2024
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Workshop presencial sobre técnicas avançadas de audiodescrição
                  poética. Local: Centro Cultural de Maceió.
                </p>
                <Button>
                  <Link href="#orcamento">Inscreva-se</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-primary" />
                  Nova Parceria
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  10 de Maio, 2024
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Firmamos parceria com o Festival de Cinema Acessível para
                  audiodescrição de todos os filmes do evento.
                </p>
                <Button>
                  <Link href="#contato">Saiba mais</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Prêmio de Inovação
                </CardTitle>
                <p className="text-sm text-muted-foreground">1 de Maio, 2024</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Fomos premiados no Encontro Nacional de Acessibilidade pelo
                  projeto &quot;Memes Pra Ver Ouvir&quot;.
                </p>
                <Button>
                  <Link href="#premiacoes">Ver prêmio</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="orcamento" className="container py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold">Solicite um Orçamento</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Preencha o formulário ao lado para solicitar um orçamento.
                  Nossa equipe entrará em contato em até 24 horas úteis.
                </p>
              </div>

              <div className="space-y-4">
                {/* <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <p className="text-sm">
                    Travessa Santa Rita, 08
                    <br />
                    Clima Bom, Maceió - AL
                    <br />
                    CEP: 57071
                  </p>
                </div> */}

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="tel:+5582991130173"
                    className="text-sm hover:underline"
                  >
                    (82) 9113-0173
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:praverouvir@gmail.com"
                    className="text-sm hover:underline"
                  >
                    praverouvir@gmail.com
                  </a>
                </div>
              </div>

              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  title="Localização da Pra Ver Ouvir"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.2844033703386!2d-35.7392799!3d-9.5805556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145c0a9e44445%3A0x1c8cd650d37f1bef!2sTv.%20Santa%20Rita%2C%208%20-%20Clima%20Bom%2C%20Macei%C3%B3%20-%20AL%2C%2057071-031!5e0!3m2!1spt-BR!2sbr!4v1710437169099!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <BudgetForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

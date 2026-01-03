import Header from "@/components/Header";
import StickyFooter from "@/components/StickyFooter";
import QuoteBlock from "@/components/QuoteBlock";
import CheckList from "@/components/CheckList";
import { Button } from "@/components/ui/button";
import speakerImage from "@/assets/speaker.jpg";
import messyClosetImage from "@/assets/messy-closet.jpg";
import brainComparisonImage from "@/assets/brain-comparison.png";
import antes1Image from "@/assets/antes1.png";
import depois1Image from "@/assets/depois1.png";
import antes2Image from "@/assets/antes2.png";
import depois2Image from "@/assets/depois2.png";
import relato1Image from "@/assets/relato1.png";
import relato2Image from "@/assets/relato2.png";
import relato3Image from "@/assets/relato3.png";

const Index = () => {
  const checklistItems = [
    "Diante a uma casa bagunçada ou tarefas simples do dia a dia. Você não sabe por onde começar?",
    "Você se sente esgotada(o) mesmo antes de começar",
    "Talvez consiga começar a limpar, mas apenas se estiver extremamente empolgado",
    "Não consegue priorizar uma única atividade, porque todas parecem igualmente urgentes.",
    "Você se senta 'só por um minuto'… e, quando percebe, já se passaram 3 horas.",
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-6">

        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold leading-tight mb-4 text-foreground">
            Notícia de última hora: Neurocientista revela por que você não consegue fazer tarefas básicas de casa.
          </h1>
          
          <p className="text-muted-foreground mb-6 italic">
            (Esse método fez mais de 450.000 pessoas nos EUA transformarem suas próprias vidas, desenvolvendo Foco, Disciplina e Clareza Mental. Elas recuperaram o controle da mente e passaram a vencer desde tarefas Simples até desafios que antes pareciam Impossíveis.)
          </p>

          <div className="rounded-xl overflow-hidden shadow-md mb-3">
            <img 
              src={speakerImage} 
              alt="Dra. Sam Parker explicando a conexão entre o sistema nervoso e a organização" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center italic mb-6">
            Dra. Sam Parker explicando a conexão entre o sistema nervoso e a organização.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-foreground leading-relaxed mb-4">
            Se você não consegue nem limpar a própria casa, não consegue jogar o lixo fora, não consegue sequer levantar da cama…
          </p>
          
          <p className="text-foreground leading-relaxed mb-4">
            Você vive dizendo <strong>"amanhã eu limpo, amanhã eu faço, amanhã eu começo"</strong> — Mas esse amanhã nunca chega...
          </p>

          <p className="text-foreground leading-relaxed mb-4">
            E, a cada dia que passa, a culpa aumenta, a autoestima diminui e a sensação de estar falhando com você mesmo só cresce.
          </p>

          <QuoteBlock>
            "Há duas coisas que você precisa saber agora mesmo..." diz a Dra. Sam Parker, neurocientista que passou décadas pesquisando por que alguns cérebros não deixam as pessoas fazerem tarefas cotidianas básicas, mesmo que estejam completamente envergonhados.
          </QuoteBlock>
        </section>

        {/* First Point */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Primeiro: Você não está sozinho(a). Muito pelo contrário.
          </h2>
          <p className="text-foreground leading-relaxed">
            Milhões de mulheres (e homens) em todo o país estão paralisados pela mesma incapacidade de agir e estão sofrendo em silêncio. (Especialmente se você se compara constantemente.)
          </p>
        </section>

        {/* Second Point */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Segundo: Se isso soa familiar, você já percebeu que quanto mais tenta reagir, se organizar ou 'fazer dar certo', mais parece que afunda no próprio problema — junto com a culpa, a frustração e a sensação de incapacidade.
          </h2>
          
          <p className="text-foreground leading-relaxed mb-4 text-center font-medium">
            Seu guarda-roupas se parece com isso?
          </p>

          <div className="section-card">
            <div className="rounded-lg overflow-hidden mb-3">
              <img 
                src={messyClosetImage} 
                alt="Armário bagunçado representando o ciclo da desordem" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center italic my-6">
            O ciclo da autossabotagem pode parecer impossível de quebrar.
          </p>

          <p className="text-foreground leading-relaxed">
            Mas cada vez que você tenta "aguentar", na verdade reforça o bloqueio que te prende.
          </p>
        </section>

        {/* Research Section */}
        <section className="mb-8">
          <div className="rounded-xl overflow-hidden shadow-md mb-4">
            <img 
              src={brainComparisonImage} 
              alt="Comparação entre cérebro normal e cérebro traumatizado" 
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed mb-4">
            Após 35 anos de pesquisa, posso te garantir: <strong>Sua Autossabotagem não é preguiça! É o seu sistema nervoso implorando por ajuda.</strong>
          </p>
          
          <p className="text-foreground leading-relaxed mb-4">
            Isso é especialmente grave em pessoas que sofreram abusos prolongados, negligência, ou o que agora começamos a chamar de Transtorno de Estresse Pós-Traumático Complexo TEPT (C-PTSD). E é muito mais comum do que as pessoas pensam.
          </p>

          <CheckList items={checklistItems} />
        </section>

        {/* Solution Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Este novo "método centrado no sistema nervoso" muda tudo.
          </h2>
          
          <p className="text-foreground leading-relaxed mb-4">
            Eu ouvi pela primeira vez em uma notícia — pessoas contando como lhes ajudou finalmente a fazer coisas básicas que não faziam há anos.
          </p>

          <p className="text-foreground leading-relaxed mb-4">
            Chama-se <strong>Recomeço Mental</strong>. Ele trabalha com o seu sistema nervoso — e não contra ele. É isso que o torna tão poderoso.
          </p>

          <QuoteBlock>
            "Muitos pacientes descreviam a mesma experiência: finalmente conseguiam realizar tarefas básicas sem se sobrecarregar, e também lidar com tarefas que antes pareciam impossíveis. Muitos elogiavam esse método chamado Recomeço Mental. Embora eu, como neurocientista, costume ser cética em relação a esse tipo de abordagem, sabia que precisava investigar. O que encontrei foi surpreendente: o Recomeço Mental realmente ajuda você a entender como — e em que momento — o seu cérebro se bloqueia."
          </QuoteBlock>
        </section>

        {/* How It Works */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Funciona com seu sistema nervoso em vez de contra ele. Isso é o que o torna tão poderoso.
          </h2>

          <div className="section-card">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Como Funciona</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Começa com algumas perguntas que identificam a razão exata pela qual seu sistema nervoso não para de te Sabotar.
            </p>
            <p className="text-foreground leading-relaxed">
              Quando termina o teste, Ele não pede que você limpe toda sua casa ou que comece na mesma hora a praticar alguma atividade fisica. Em vez disso, pedem que dobre uma única camiseta, tarefas básicas — e te guiam através de atividades e exercícios específicos para seu tipo de bloqueio.
            </p>
          </div>

          <p className="text-sm text-muted-foreground text-center italic my-6">
            Milhares de pessoas estão recuperando o controle de suas vidas.
          </p>
        </section>

        {/* Before/After Results Section */}
        <section className="mb-8">
          <p className="text-lg font-bold text-foreground leading-relaxed mb-6">
            Relatos e fotos de alguns dos meus pacientes. Depois desse processo, nada voltou a ser como antes.
          </p>

          {/* Testimonial Screenshots */}
          <div className="space-y-4 mb-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={relato1Image} 
                alt="Relato da Marcela sobre o Recomeço Mental" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={relato2Image} 
                alt="Relato da Carla sobre o Recomeço Mental" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={relato3Image} 
                alt="Relato do Marcio sobre o Recomeço Mental" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* First pair of before/after */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={antes1Image} 
                alt="Antes - Armário desorganizado" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={depois1Image} 
                alt="Depois - Armário organizado" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second pair of before/after */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={antes2Image} 
                alt="Antes - Armário desorganizado" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={depois2Image} 
                alt="Depois - Armário organizado" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center italic mb-6">
            Resultados reais de usuários do Recomeço Mental.
          </p>

          <p className="text-foreground leading-relaxed">
            Só leva alguns minutos por dia. Recomeço Mental não só ajuda a limpar sua casa, devolve sua vida.
          </p>
        </section>

        {/* Final CTA Section */}
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Não fique só com minhas palavras, prove você mesma(o).
          </h2>
          <p className="text-muted-foreground mb-6">
            Faça o teste gratuito: Descubra um plano simples e personalizado para te ajudar a combater a bagunça e voltar a sentir paz em seu lar.
          </p>
          <Button className="w-full py-6 text-lg font-semibold">
            Faça o Teste Grátis
          </Button>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
};

export default Index;

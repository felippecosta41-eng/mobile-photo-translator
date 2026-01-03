import Header from "@/components/Header";
import StickyFooter from "@/components/StickyFooter";
import QuoteBlock from "@/components/QuoteBlock";
import CheckList from "@/components/CheckList";
import speakerImage from "@/assets/speaker.jpg";
import messyClosetImage from "@/assets/messy-closet.jpg";

const Index = () => {
  const checklistItems = [
    "Você bloqueia ao ver a bagunça e não sabe por onde começar",
    "Você se sente esgotada(o) mesmo antes de começar",
    "Talvez consiga começar a limpar, mas apenas se houver uma crise",
    "Não consegue priorizar porque cada objeto parece igual de urgente",
    "Você senta 'só um minuto' e desaparecem três horas",
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-6">

        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold leading-tight mb-4 text-foreground">
            Notícias de última hora: Neurocientista revela por que você não consegue limpar sua casa
          </h1>
          
          <p className="text-muted-foreground mb-6 italic">
            (E o truque viral que fez mais de 450.000 aposentados nos EUA ficarem obcecados com a organização)
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
            Se a bagunça da sua casa continua crescendo, não importa o que você faça. Se você parou de convidar pessoas para casa por causa da bagunça. Ou se continua dizendo <strong>"Amanhã eu limpo"</strong>, mas esse amanhã nunca chega...
          </p>

          <QuoteBlock>
            "Há duas coisas que você precisa saber agora mesmo..." diz a Dra. Sam Parker, neurocientista que passou décadas pesquisando por que alguns cérebros não deixam as pessoas fazerem tarefas cotidianas básicas, mesmo que estejam afogadas em vergonha.
          </QuoteBlock>
        </section>

        {/* First Point */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Primeiro: Você não está sozinha. Muito pelo contrário.
          </h2>
          <p className="text-foreground leading-relaxed">
            Milhões de mulheres (e homens) em todo o país estão paralisados pela mesma incapacidade de agir e estão sofrendo em silêncio. (Especialmente quem já entrou na aposentadoria).
          </p>
        </section>

        {/* Second Point */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Segundo: Se isso soa familiar, quanto mais você tenta limpar, mais você se afunda no problema.
          </h2>
          
          <div className="section-card">
            <p className="font-semibold text-foreground mb-4">
              Se isso soa familiar, quanto mais você tenta limpar, mais você se afunda no problema.
            </p>
            
            <div className="rounded-lg overflow-hidden mb-3">
              <img 
                src={messyClosetImage} 
                alt="Armário bagunçado representando o ciclo da desordem" 
                className="w-full h-auto object-cover"
              />
            </div>

            <QuoteBlock>
              "A segunda coisa que você precisa saber é essa," continua a Dra. Parker. "Se você quer finalmente eliminar a desordem que está te sufocando..."
            </QuoteBlock>
          </div>

          <p className="text-sm text-muted-foreground text-center italic my-6">
            O ciclo da bagunça pode parecer impossível de quebrar.
          </p>

          <p className="text-foreground leading-relaxed">
            Mas cada vez que você tenta "aguentar", na verdade reforça o bloqueio que te prende.
          </p>
        </section>

        {/* Research Section */}
        <section className="mb-8">
          <p className="text-foreground leading-relaxed mb-4">
            Após 35 anos de pesquisa, finalmente posso dizer com certeza uma coisa: <strong>Sua bagunça não é preguiça. É seu sistema nervoso gritando por ajuda.</strong>
          </p>
          
          <p className="text-foreground leading-relaxed mb-4">
            Isso é especialmente grave em pessoas que sofreram abusos prolongados, negligência, ou o que agora começamos a chamar de Trauma Complexo ou CPTSD. E é mais comum do que as pessoas pensam.
          </p>

          <CheckList items={checklistItems} />
        </section>

        {/* Solution Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Este novo "enfoque do sistema nervoso" para limpar muda tudo.
          </h2>
          
          <p className="text-foreground leading-relaxed mb-4">
            Eu ouvi pela primeira vez em uma notícia — pessoas contando como lhes ajudou finalmente a fazer coisas em que estavam bloqueadas há anos.
          </p>

          <p className="text-foreground leading-relaxed mb-4">
            Chama-se <strong>MellowFlow</strong>. Funciona com seu sistema nervoso em vez de contra ele. Isso é o que o torna tão poderoso.
          </p>

          <QuoteBlock>
            "Uma e outra vez descreviam o mesmo: por fim podiam atuar. Por fim limpar. Por fim funcionar de formas que antes eram impossíveis. Se chama <strong>MellowFlow</strong>. Embora como neurocientista costumo ser cética com essas coisas, soube que devia investigar. E o que encontrei foi surpreendente. MellowFlow realmente te ajuda a entender quando teu cérebro se bloqueia."
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
              Começa com um teste gratuito de 3 minutos que identifica a razão exata pela qual seu sistema nervoso não te deixa limpar.
            </p>
            <p className="text-foreground leading-relaxed">
              Quando termina o teste, não pedem que limpe toda sua cozinha. Em vez disso, pedem que dobre uma única camiseta — e te guiam através de exercícios específicos para seu tipo de bloqueio.
            </p>
          </div>

          <p className="text-sm text-muted-foreground text-center italic my-6">
            Milhares de pessoas estão recuperando o controle de suas casas.
          </p>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
};

export default Index;

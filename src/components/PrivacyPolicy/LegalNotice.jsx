import styled from 'styled-components';
import Footer from '../shared/Footer';
import HomeComponent from '../shared/HomeComponent';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  text-align: center;
  padding: 1em;
`;

const ContainerContent = styled.div`
  padding: 1em 0 0 0;
`;
const Span = styled.span`
  display: block;
  font-size: 1.3rem;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const Impressum = () => {
  return (
    <>
      <ContainerContent>
        <HomeComponent />
        <Container>
          <Span>Impressum</Span>

          <div>
            <Span>Verantwortlich für den Inhalt:</Span>
            <Paragraph>[Name Ihres Unternehmens]</Paragraph>
            <Paragraph>[Adresse Ihres Unternehmens]</Paragraph>
            <Paragraph>[Telefonnummer Ihres Unternehmens]</Paragraph>
            <Paragraph>[E-Mail-Adresse Ihres Unternehmens]</Paragraph>
            <Paragraph>[Weitere Kontaktinformationen]</Paragraph>
          </div>

          <div>
            <Span>Geschäftsführung:</Span>
            <Paragraph>[Vor- und Nachname des Geschäftsführers]</Paragraph>
          </div>

          <div>
            <Span>Registergericht:</Span>
            <Paragraph>[Registergericht und -nummer]</Paragraph>
          </div>

          <div>
            <Span>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
            </Span>
            <Paragraph>[Umsatzsteuer-ID]</Paragraph>
          </div>

          <div>
            <Span>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:</Span>
            <Paragraph>
              [Vor- und Nachname des inhaltlich Verantwortlichen]
            </Paragraph>
          </div>

          <div>
            <Span>Haftungshinweis:</Span>
            <Paragraph>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </Paragraph>
          </div>

          <div>
            <Span>Urheberrechtshinweis:</Span>
            <Paragraph>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </Paragraph>
          </div>

          {/* Weitere Abschnitte und Hinweise hier einfügen */}

          <div>
            <Span>Stand:</Span>
            <Paragraph>[Datum der letzten Aktualisierung]</Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            quaerat in vitae mollitia nostrum ad ullam animi optio fugiat
            exercitationem. Voluptatem esse fugit nostrum tempora deleniti unde
            sequi commodi adipisci? Doloremque cupiditate error veniam nulla
            odit placeat, accusantium dolores magnam, saepe iure assumenda nihil
            amet reiciendis voluptatibus ullam dolorem maxime quidem at sapiente
            accusamus esse nemo ut. Aliquam, eos totam! Modi ipsa similique
            asperiores mollitia. Cum quibusdam nobis obcaecati animi saepe
            voluptas sequi fuga esse soluta iusto. Doloribus laboriosam
            praesentium facere, accusantium perspiciatis magni excepturi, eos,
            dolorem ratione enim suscipit.
          </div>

          {/* Social-Media-Profile Hinweis hier einfügen */}
        </Container>
        <Footer />
      </ContainerContent>
    </>
  );
};

export default Impressum;

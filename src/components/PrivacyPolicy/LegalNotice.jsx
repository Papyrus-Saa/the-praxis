import styled from 'styled-components';
import Footer from '../Main/Footer';
import HomeComponent from '../shared/HomeComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.6em;
  text-align: center;



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
      <Container>
        <HomeComponent />
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
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
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
        </div>

        {/* Social-Media-Profile Hinweis hier einfügen */}
      </Container>
      <Footer />
    </>
  );
};

export default Impressum;

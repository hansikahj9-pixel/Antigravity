import AxiomeGlobalNav from '../components/AxiomeGlobalNav';

export default function ProcessRoute() {
  return (
    <div className="process-container">
      {/* ── Global Navigation ── */}
      <AxiomeGlobalNav />

      {/* ── Split Screen Manifesto ── */}
      <main className="process-grid">
        {/* ── Left Column: Meaning ── */}
        <section className="process-left fade-in">
          <h1 className="process-heading">THE AXIOME.</h1>
          <h2 className="process-subheading">Bridging the gap between fashion and art.</h2>
          <p className="process-body">
            An axiom is a self-evident truth. But here, the truth is found in the irrational. 
            Axiome creates garments that embody the emotional intensity, symbolism, and visual 
            language of surrealism. These are not just clothes; they are wearable expressions 
            of inner narratives.
          </p>
        </section>

        {/* ── Right Column: Inspiration ── */}
        <section className="process-right fade-in-delayed">
          {/* Rotating Dream Orb Background */}
          <div className="dream-orb"></div>
          
          <div className="process-right-content">
            <h3 className="inspiration-heading">THE INSPIRATION.</h3>
            <p className="process-body">
              Rooted in a deep understanding of dreams and the unconscious, every silhouette 
              challenges conventional norms. Inspired by the melting, viscous realities of 
              Salvador Dalí and the meticulous, biomorphic structures of Max Ernst, the 
              collection blurs the lines between fantasy and reality.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

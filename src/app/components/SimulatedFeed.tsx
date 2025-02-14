import Claim from './Claim';

type Claim = {
  id: number;
  author: string;
  authorHandle: string;
  authorAvatar: string;
  text: string;
  truthfulness: string;
  harmfulness: string;
  persuasiveness: string;
  explanation: string;
};

export default function SimulatedFeed({ claims }: { claims: Claim[] }) {
  return (
    <div className="space-y-6">
      {claims.map((claim) => (
        <Claim key={claim.id} claim={claim} />
      ))}
    </div>
  );
}

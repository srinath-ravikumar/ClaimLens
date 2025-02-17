import React from 'react';
import Claim from './Claim';
import { ClaimType } from '../types';

export default function SimulatedFeed({ claims }: { claims: ClaimType[] | undefined }) {
  if (!claims || !Array.isArray(claims) || claims.length === 0) {
    return <div className="text-gray-500">No claims available.</div>;
  }

  return (
    <div className="space-y-6">
      {claims.map((claim: ClaimType) => (
        <Claim key={claim.id} claim={claim} />
      ))}
    </div>
  );
}

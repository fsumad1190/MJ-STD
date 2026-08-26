/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { StuffToDoModal } from './components/StuffToDoModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hidden">
      <StuffToDoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Analytics />
    </div>
  );
}

export { StuffToDoModal };


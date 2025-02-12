import { useState } from 'react';
import { generateInvitationCode } from '../../utils/invitations';
import { sendInvitationEmail } from '../../services/emailService';

const InvitationManager = () => {
  const [email, setEmail] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerateInvitation = async () => {
    const code = generateInvitationCode();
    setGeneratedCode(code);
    try {
      await sendInvitationEmail(email, code);
    } catch (error) {
      console.error('Error sending invitation:', error);
    }
  };

  return (
    <div className="invitation-manager">
      <h3>Gerenciar Convites</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email do paciente"
      />
      <button onClick={handleGenerateInvitation}>Enviar Convite</button>
      {generatedCode && <p>Código gerado: {generatedCode}</p>}
    </div>
  );
};

export default InvitationManager; 
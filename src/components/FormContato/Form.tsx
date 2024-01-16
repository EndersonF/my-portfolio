import { useState } from 'react';
import toast from 'react-hot-toast';
import { FormContainer, Input, TextArea } from './styles';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!nome || !email || !mensagem) {
      toast.error('Preencha todos os campos para enviar sua mensagem!🙁', {
        style: {
          background: theme.error,
          color: '#f8f8f2'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');

      toast('Mensagem enviada com sucesso!😀', {
        style: {
          background: theme.primary,
          color: '#f8f8f2'
        }
      });
    } catch (error) {
      toast(
        'Ops! Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!😞',
        {
          style: {
            background: theme.error,
            color: '#f8f8f2'
          }
        }
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <FormContainer data-aos="zoom-in-down" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}

import { StyleSheet, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from '@/components/Themed';

type Pessoa = {
  nome: string;
  idade: string;
  cargo: string;
};

const pessoas: Pessoa[] = [
  { nome: 'Ana Silva', idade: '28', cargo: 'Desenvolvedora' },
  { nome: 'Carlos Santos', idade: '35', cargo: 'Designer' },
  { nome: 'Julia Costa', idade: '24', cargo: 'Product Manager' },
];

export default function Exercicio3() {
  const router = useRouter();

  const irParaPerfil = (pessoa: Pessoa) => {
    const fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(pessoa.nome)}&size=150&background=ececa3&color=1d2b12`;

    router.push({
      pathname: '/perfil' as any,
      params: {
        nome: pessoa.nome,
        idade: pessoa.idade,
        cargo: pessoa.cargo,
        fotoUrl: fotoUrl,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PERFIS DE USUÁRIO</Text>

      <View style={styles.listaBotoes}>
        {pessoas.map((pessoa, index) => (
          <Pressable
            key={index}
            style={styles.botaoPerfil}
            onPress={() => irParaPerfil(pessoa)}
          >
            <Text style={styles.textoBotao}>{pessoa.nome}</Text>
            <Text style={styles.subtextoBotao}>{pessoa.cargo}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607c3c',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ececa3',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  listaBotoes: {
    gap: 12,
  },
  botaoPerfil: {
    backgroundColor: '#b5e550',
    padding: 16,
    borderRadius: 0,
    alignItems: 'flex-start',
  },
  textoBotao: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  subtextoBotao: {
    color: '#1d2b12',
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
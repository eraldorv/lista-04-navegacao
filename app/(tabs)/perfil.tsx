import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Perfil() {
  const router = useRouter();
  const { nome, idade, cargo, fotoUrl } = useLocalSearchParams();

  const voltar = () => {
    router.replace('/three');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.botaoVoltar} onPress={voltar}>
        <Text style={styles.textoBotaoVoltar}>X</Text>
      </Pressable>

      <View style={styles.cardPerfil}>
        <View style={styles.containerAvatar}>
          {fotoUrl && (
            <Image
              source={{ uri: fotoUrl }}
              style={styles.imagemAvatar}
              resizeMode="contain"
            />
          )}
        </View>

        <Text style={styles.nomePessoa}>{nome}</Text>
        <Text style={styles.cargoPessoa}>{cargo}</Text>

        <View style={styles.divisor} />

        <View style={styles.infoBloco}>
          <Text style={styles.rotuloInfo}>Idade:</Text>
          <Text style={styles.textoInfo}>{idade} anos</Text>
        </View>

        <View style={styles.infoBloco}>
          <Text style={styles.rotuloInfo}>Cargo / Ocupação:</Text>
          <Text style={styles.textoInfo}>{cargo}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607c3c',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  textoBotaoVoltar: {
    color: '#ececa3',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  cardPerfil: {
    backgroundColor: '#b5e550',
    borderRadius: 0,
    padding: 20,
    alignItems: 'center',
  },
  containerAvatar: {
    width: 90,
    height: 90,
    borderRadius: 0,
    marginBottom: 12,
    overflow: 'hidden',
  },
  imagemAvatar: {
    width: '100%',
    height: '100%',
  },
  nomePessoa: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'monospace',
  },
  cargoPessoa: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1d2b12',
    marginTop: 2,
    fontFamily: 'monospace',
  },
  divisor: {
    height: 2,
    backgroundColor: '#abc32f',
    width: '100%',
    marginVertical: 15,
  },
  infoBloco: {
    width: '100%',
    marginBottom: 10,
  },
  rotuloInfo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1d2b12',
    fontFamily: 'monospace',
  },
  textoInfo: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'monospace',
    marginTop: 2,
  },
});
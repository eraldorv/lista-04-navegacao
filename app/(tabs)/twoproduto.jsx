import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function TwoProduto() {
  const router = useRouter();
  const { nome, preco, descricao, imagem } = useLocalSearchParams();

  const irParaTwo = () => {
    router.replace('/two');
  };

  return (
    <View style={styles.container}>
    
      <Pressable style={styles.botaoVoltar} onPress={irParaTwo}>
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
      </Pressable>

     
      <View style={styles.cardDetalhes}>
        <View style={styles.containerImagem}>
          {imagem && (
            <Image 
              source={{ uri: imagem }} 
              style={styles.imagemItem} 
              resizeMode="contain"
            />
          )}
        </View>

        <Text style={styles.nomeProduto}>{nome}</Text>
        <Text style={styles.precoProduto}>{preco}</Text>

        <View style={styles.divisor} />

        <Text style={styles.rotuloDescricao}>Descrição do Item:</Text>
        <Text style={styles.textoDescricao}>{descricao}</Text>

        <Pressable style={styles.botaoComprar} onPress={irParaTwo}>
          <Text style={styles.textoBotaoComprar}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  textoBotaoVoltar: {
    color: '#15fdb0',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  cardDetalhes: {
    backgroundColor: '#15fdb0',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  containerImagem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  imagemItem: {
    width: 80,
    height: 80,
  },
  nomeProduto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'monospace',
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#116146',
    marginTop: 4,
    fontFamily: 'monospace',
  },
  divisor: {
    height: 2,
    backgroundColor: '#2a8164',
    width: '100%',
    marginVertical: 15,
  },
  rotuloDescricao: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#073827',
    marginBottom: 6,
    fontFamily: 'monospace',
  },
  textoDescricao: {
    alignSelf: 'flex-start',
    fontSize: 13,
    color: '#000000',
    lineHeight: 20,
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  botaoComprar: {
    backgroundColor: '#2a8164',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoComprar: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});